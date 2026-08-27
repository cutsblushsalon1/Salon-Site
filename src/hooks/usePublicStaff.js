import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

export function usePublicStaff() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("public_catalog")
        .select("value")
        .eq("key", "staff")
        .maybeSingle();

      if (cancelled) return;

      if (error) {
        console.error("[supabase] failed to load staff roster:", error.message);
        setStaff([]);
      } else {
        setStaff(Array.isArray(data?.value) ? data.value : []);
      }
      setLoading(false);
    }

    load();

    const channel = supabase
      .channel("public-catalog-staff")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "public_catalog", filter: "key=eq.staff" },
        (payload) => {
          const next = payload.new?.value;
          if (Array.isArray(next)) setStaff(next);
        },
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  return { staff, loading };
}
