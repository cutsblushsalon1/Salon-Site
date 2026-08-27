import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

// Checks which time slots should NOT be offered for a given date:
// - a specific staff member chosen -> slots already booked for THEM
//   (get_taken_slots)
// - "No preference" chosen -> slots where every active staff member is
//   already booked, i.e. genuinely nobody is free (get_full_slots)
// Both come from supabase/staff_availability.sql in the billing repo,
// and only ever return time strings — never any appointment details.
//
// IMPORTANT: this is a UI convenience so people don't waste time picking
// an unavailable slot — it is NOT what actually prevents double-booking.
// That's enforced by a database trigger (see staff_availability.sql),
// which is the only thing that can't be raced around by two people
// submitting at the same instant. `refetch` lets the form re-sync this
// list immediately after the database rejects a slot that just got taken.
export function useTakenSlots(staffId, date) {
  const [takenSlots, setTakenSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reloadTick, setReloadTick] = useState(0);

  useEffect(() => {
    let cancelled = false;

    if (!isSupabaseConfigured || !date) {
      setTakenSlots([]);
      return;
    }

    async function load() {
      setLoading(true);
      const { data, error } = staffId
        ? await supabase.rpc("get_taken_slots", { p_staff_id: staffId, p_date: date })
        : await supabase.rpc("get_full_slots", { p_date: date });

      if (cancelled) return;

      if (error) {
        // Fail open rather than blocking booking entirely if this RPC
        // hasn't been set up yet (e.g. staff_availability.sql not run).
        // The database trigger still has the final say either way.
        console.error("[supabase] failed to check availability:", error.message);
        setTakenSlots([]);
      } else {
        setTakenSlots((data || []).map((row) => row.appointment_time).filter(Boolean));
      }
      setLoading(false);
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [staffId, date, reloadTick]);

  return { takenSlots, loading, refetch: () => setReloadTick((t) => t + 1) };
}
