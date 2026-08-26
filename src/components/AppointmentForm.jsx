import React, { useState } from "react";
import { Flower2, Scissors, Users, Calendar, Clock, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";
import { usePublicServices } from "../hooks/usePublicServices";
import ServicePicker from "./ServicePicker";

const WHATSAPP_NUMBER = "919279874506";

const GENDER_CARDS = [
  { id: "Female", label: "Female", icon: Flower2 },
  { id: "Male", label: "Male", icon: Scissors },
  { id: "all", label: "Both", icon: Users },
];

function buildTimePeriods() {
  const periods = [
    { label: "Morning", from: 10 * 60, to: 12 * 60 - 30 },
    { label: "Afternoon", from: 12 * 60, to: 16 * 60 - 30 },
    { label: "Evening", from: 16 * 60, to: 20 * 60 + 30 },
  ];
  return periods.map((p) => {
    const slots = [];
    for (let m = p.from; m <= p.to; m += 30) {
      const h24 = Math.floor(m / 60);
      const min = m % 60;
      const period = h24 >= 12 ? "PM" : "AM";
      const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
      slots.push(`${h12}:${String(min).padStart(2, "0")} ${period}`);
    }
    return { label: p.label, slots };
  });
}

const TIME_PERIODS = buildTimePeriods();

function todayISO() {
  const d = new Date();
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

export default function AppointmentForm() {
  const { services, loading: servicesLoading, error: servicesError } = usePublicServices();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("all");
  const [service, setService] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  function handleGenderChange(next) {
    setGender(next);
    if (next !== "all" && service && service.gender !== next) {
      setService(null);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!service) {
      setResult({ ok: false, message: "Please choose a service." });
      return;
    }
    if (!date) {
      setResult({ ok: false, message: "Please choose a preferred date." });
      return;
    }
    if (!time) {
      setResult({ ok: false, message: "Please choose a preferred time." });
      return;
    }

    const appointmentGender = gender !== "all" ? gender : service.gender || null;

    setSubmitting(true);
    setResult(null);

    if (!isSupabaseConfigured) {
      const message = `Hi *Cuts & Blush Salon!*\n\nI'd like to book an appointment.\n*Name:* ${name}\n*Phone:* ${phone}\n*For:* ${appointmentGender === "Female" ? "Her" : appointmentGender === "Male" ? "Him" : "-"}\n*Service:* ${service.name} (₹${Number(service.price).toLocaleString("en-IN")})\n*Date:* ${date}\n*Time:* ${time}${notes ? `\n*Notes:* ${notes}` : ""}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
      setSubmitting(false);
      return;
    }

    const { error } = await supabase.from("appointments").insert({
      client_name: name.trim(),
      phone: phone.trim(),
      gender: appointmentGender,
      service_name: service.name,
      appointment_date: date,
      appointment_time: time,
      notes: notes.trim() || null,
      source: "website",
    });

    setSubmitting(false);

    if (error) {
      console.error("[supabase] failed to create appointment:", error.message);
      setResult({ ok: false, message: "Something went wrong sending your request. Please call or WhatsApp us instead." });
      return;
    }

    setResult({ ok: true, message: "Thank you! Your appointment request has been sent — we'll confirm shortly by phone or WhatsApp." });
    setName("");
    setPhone("");
    setGender("all");
    setService(null);
    setDate("");
    setTime("");
    setNotes("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="reveal overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-black/[0.04]"
    >
      {/* Gold accent strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-gold via-[#e3cf9c] to-gold" />

      <div className="p-6 md:p-8">
        {/* Step 1 — who & how to reach you */}
        <div className="mb-8">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-black/35">
            <span className="w-6 h-6 pl-0.5 flex justify-center items-center leading-none rounded-full bg-ink text-xs text-white">1</span>
            Your details
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field">
              <span>Your name</span>
              <input
                required
                name="name"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="field">
              <span>Phone number</span>
              <input
                required
                name="phone"
                type="tel"
                placeholder="+91"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
        </div>

        {/* Step 2 — who's this for */}
        <div className="mb-8">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-black/35">
            <span className="w-6 h-6 pl-0.5 flex justify-center items-center leading-none rounded-full bg-ink text-xs text-white">2</span>
            Who's this for?
          </p>
          <div className="grid grid-cols-3 gap-3">
            {GENDER_CARDS.map((g) => {
              const Icon = g.icon;
              const active = gender === g.id;
              return (
                <button
                  type="button"
                  key={g.id}
                  onClick={() => handleGenderChange(g.id)}
                  className={`group relative flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition ${
                    active
                      ? "border-gold bg-gradient-to-b from-gold/10 to-transparent shadow-[0_8px_24px_rgba(184,154,100,.18)]"
                      : "border-black/10 bg-[#f8f6f1] hover:border-black/20"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                      active ? "bg-ink text-gold" : "bg-white text-black/40 group-hover:text-black/60"
                    }`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className={`text-sm font-semibold ${active ? "text-ink" : "text-black/60"}`}>{g.label}</span>
                  <span className="hidden text-[10px] text-black/35 sm:block">{g.sub}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3 — service */}
        <div className="mb-8">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-black/35">
            <span className="w-6 h-6 pl-0.5 flex justify-center items-center leading-none rounded-full bg-ink text-xs text-white">3</span>
            Choose a service
          </p>
          <ServicePicker
            services={services}
            loading={servicesLoading}
            error={servicesError}
            value={service}
            onSelect={setService}
            gender={gender}
            onGenderChange={handleGenderChange}
          />
        </div>

        {/* Step 4 — date & time */}
        <div className="mb-8">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-black/35">
            <span className="w-6 h-6 pl-0.5 flex justify-center items-center leading-none rounded-full bg-ink text-xs text-white">4</span>
            Pick a date & time
          </p>

          <label className="field mb-5">
            <span className="flex items-center gap-1.5">
              Preferred Date
            </span>
            <input
              required
              name="date"
              type="date"
              min={todayISO()}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <div className="field">
            <span className="flex items-center gap-1.5">
              Preferred Time
            </span>
            <div className="space-y-3 rounded-2xl border border-black/10 bg-[#f8f6f1] p-3.5">
              {TIME_PERIODS.map((period) => (
                <div key={period.label}>
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-black/30">
                    {period.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {period.slots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setTime(slot)}
                        className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
                          time === slot
                            ? "border-ink bg-ink text-white"
                            : "border-black/10 bg-white text-black/60 hover:border-gold/50 hover:text-ink"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <label className="field mb-2">
          <span>Notes (optional)</span>
          <input
            name="notes"
            placeholder="Anything we should know?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </label>

        {/* Live summary */}
        {(service || date || time) && (
          <div className="mt-6 rounded-2xl border border-gold/25 bg-gold/[0.06] p-4 text-sm">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[.16em] text-black/35">Your booking</p>
            <div className="space-y-1 text-black/70">
              {service && (
                <p>
                  <span className="text-black/40">Service — </span>
                  {service.name} <span className="text-gold">₹{Number(service.price).toLocaleString("en-IN")}</span>
                </p>
              )}
              {date && (
                <p>
                  <span className="text-black/40">Date — </span>
                  {new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </p>
              )}
              {time && (
                <p>
                  <span className="text-black/40">Time — </span>
                  {time}
                </p>
              )}
            </div>
          </div>
        )}

        {result && (
          <div
            className={`mt-5 flex items-start gap-2.5 rounded-2xl px-4 py-3 text-sm ${
              result.ok ? "bg-moss/10 text-moss" : "bg-red-50 text-red-600"
            }`}
          >
            {result.ok ? (
              <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
            ) : (
              <AlertCircle size={17} className="mt-0.5 shrink-0" />
            )}
            <span>{result.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {submitting ? "Sending…" : "Request appointment"}
          {!submitting && (
            <ArrowUpRight size={16} />
          )}
        </button>
        <p className="mt-3 text-center text-xs text-black/40">
          We'll confirm your appointment by phone or WhatsApp shortly after you submit.
        </p>
      </div>
    </form>
  );
}
