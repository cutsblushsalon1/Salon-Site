import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

// Reads the salon's live service list from the `public_catalog` table
// (row key = "services"), which the Salon Billing app keeps in sync
// automatically every time staff add, edit or remove a service there.
// Also subscribes to realtime updates so a price/service change made in
// the billing app shows up here without a page refresh.
export function usePublicServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    if (!isSupabaseConfigured) {
      setLoading(false);
      setError("Booking isn't connected yet — please call or WhatsApp us to book.");
      return;
    }

    async function load() {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from("public_catalog")
        .select("value")
        .eq("key", "services")
        .maybeSingle();

      if (cancelled) return;

      if (fetchError) {
        console.error("[supabase] failed to load services:", fetchError.message);
        setError("Couldn't load the service list. Please refresh, or call/WhatsApp us to book.");
        setServices([]);
      } else {
        setServices(Array.isArray(data?.value) ? data.value : []);
        setError(null);
      }
      setLoading(false);
    }

    load();

    const channel = supabase
      .channel("public-catalog-services")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "public_catalog", filter: "key=eq.services" },
        (payload) => {
          const next = payload.new?.value;
          if (Array.isArray(next)) setServices(next);
        },
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  return { services, loading, error };
}
