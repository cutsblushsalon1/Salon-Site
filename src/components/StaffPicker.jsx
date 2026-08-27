import React from "react";
import { UserRound, Check, Sparkles } from "lucide-react";

export default function StaffPicker({ staff, loading, value, onSelect }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => onSelect(null)}
          className={`group relative flex flex-col items-center gap-2 rounded-2xl border p-3.5 text-center transition ${
            value === null
              ? "border-gold bg-gradient-to-b from-gold/10 to-transparent shadow-[0_8px_24px_rgba(184,154,100,.18)]"
              : "border-black/10 bg-[#f8f6f1] hover:border-black/20"
          }`}
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
              value === null ? "bg-ink text-gold" : "bg-white text-black/40 group-hover:text-black/60"
            }`}
          >
            <Sparkles size={16} />
          </span>
          <span className={`text-xs font-semibold leading-tight ${value === null ? "text-ink" : "text-black/60"}`}>
            No preference
          </span>
          <span className="hidden text-[10px] leading-tight text-black/35 sm:block">Any available stylist</span>
        </button>

        {staff.map((s) => {
          const active = value === s.id;
          return (
            <button
              type="button"
              key={s.id}
              onClick={() => onSelect(s.id, s.name)}
              className={`group relative flex flex-col items-center gap-2 rounded-2xl border p-3.5 text-center transition ${
                active
                  ? "border-gold bg-gradient-to-b from-gold/10 to-transparent shadow-[0_8px_24px_rgba(184,154,100,.18)]"
                  : "border-black/10 bg-[#f8f6f1] hover:border-black/20"
              }`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold uppercase transition ${
                  active ? "bg-ink text-gold" : "bg-white text-black/40 group-hover:text-black/60"
                }`}
              >
                {s.name?.slice(0, 1) || <UserRound size={16} />}
              </span>
              <span className={`truncate text-xs font-semibold leading-tight ${active ? "text-ink" : "text-black/60"}`}>
                {s.name}
              </span>
              {s.role && <span className="hidden truncate text-[10px] leading-tight text-black/35 sm:block">{s.role}</span>}
              {active && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-white">
                  <Check size={12} />
                </span>
              )}
            </button>
          );
        })}
      </div>
      {!loading && staff.length === 0 && (
        <p className="mt-2 text-xs text-black/35">Staff picker unavailable right now — "No preference" works fine.</p>
      )}
    </div>
  );
}
