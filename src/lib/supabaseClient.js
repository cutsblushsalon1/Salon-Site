import { createClient } from "@supabase/supabase-js";

// This site talks to the SAME Supabase project as the Salon Billing app:
// - it reads the `public_catalog` table (key: "services") to show the
//   live service list the salon staff maintain in the billing app, and
// - it inserts rows into the `appointments` table, which the billing
//   app's Appointments page reads, manages and gets realtime updates from.
// See supabase/public_catalog.sql and supabase/appointments.sql in the
// Salon-Billing-main project for the table definitions + RLS policies.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  // Don't crash the whole page if envs are missing - the booking form and
  // service picker fall back to a WhatsApp message instead (see
  // AppointmentForm.jsx / usePublicServices.js), same defensive pattern
  // the billing app uses.
  console.warn(
    "[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are missing. " +
      "Add them to a .env file (same project as the Salon Billing app), then restart `npm run dev`.",
  );
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key",
);
