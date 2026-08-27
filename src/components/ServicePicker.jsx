import React, { useEffect, useMemo, useRef, useState } from "react";
import { Search, ChevronDown, Check, Sparkles } from "lucide-react";

// Gender is controlled by the parent (AppointmentForm) so the big "Who's
// this for?" selector and this dropdown's own quick-filter chips always
// agree on one value instead of drifting apart.
export const GENDER_OPTIONS = [
  { id: "all", label: "All" },
  { id: "Female", label: "Women" },
  { id: "Male", label: "Men" },
];

// Searchable / filterable picker for the salon's full service catalog
// (200+ services). Renders as a single field (matches the rest of the
// form) that expands into a search box + category chips + results list.
export default function ServicePicker({
  services,
  loading,
  error,
  value,
  onSelect,
  gender,
  onGenderChange,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const wrapRef = useRef(null);

  const categories = useMemo(() => {
    const set = new Set(services.map((s) => s.category).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [services]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((s) => {
      if (category !== "All" && s.category !== category) return false;
      if (gender !== "all" && s.gender !== gender) return false;
      if (q && !s.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [services, query, category, gender]);

  useEffect(() => {
    function onClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="field relative" ref={wrapRef}>
      <span className="flex items-center gap-1.5">
        Service
        {services.length > 0 && (
          <span className="normal-case font-normal tracking-normal text-black/30">
            ({services.length} available)
          </span>
        )}
      </span>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between gap-2 rounded-2xl border bg-[#f8f6f1] p-4 text-left text-sm outline-none transition ${
          open ? "border-gold shadow-[0_0_0_3px_rgba(184,154,100,0.12)]" : "border-black/10 hover:border-black/20"
        }`}
      >
        <span className={`flex min-w-0 items-center gap-2 truncate ${value ? "font-medium text-ink" : "text-black/40"}`}>
          <span className="truncate">
            {value
              ? `${value.name} · ₹${Number(value.price).toLocaleString("en-IN")}`
              : loading
                ? "Loading services…"
                : "Select a service"}
          </span>
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-black/40 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-[0_25px_70px_rgba(17,17,15,.16)]">
          <div className="border-b border-black/10 bg-[#fbfaf7] p-3">
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2.5">
              <Search size={15} className="shrink-0 text-black/35" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/35"
              />
            </div>

            <div className="mt-2.5 flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {GENDER_OPTIONS.map((g) => (
                <button
                  type="button"
                  key={g.id}
                  onClick={() => onGenderChange(g.id)}
                  className={`shrink-0 rounded-full p-1.5 px-4 text-[11px] font-semibold uppercase tracking-wide transition ${
                    gender === g.id ? "bg-ink text-white" : "bg-[#f2efe8] text-black/50 hover:bg-[#ece7dc]"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>

            <div className="mt-2 flex gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`shrink-0 rounded-full border p-1.5 px-4 text-[11px] font-semibold transition ${
                    category === c
                      ? "border-gold bg-gold/10 text-ink"
                      : "border-black/10 bg-white text-black/45 hover:border-black/20"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            {error && <p className="p-4 text-xs text-red-500">{error}</p>}
            {!error && filtered.length === 0 && (
              <p className="p-6 text-center text-xs text-black/40">
                {loading ? "Loading services…" : "No services match your search."}
              </p>
            )}
            {filtered.map((s) => {
              const selected = value?.id === s.id;
              return (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => {
                    onSelect(s);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`flex w-full items-center justify-between gap-3 border-b border-l-2 border-black/[0.04] px-4 py-3 text-left text-sm transition last:border-b-0 ${
                    selected ? "border-l-gold bg-gold/[0.06]" : "border-l-transparent hover:bg-[#f8f6f1]"
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block truncate font-medium text-ink/90">{s.name}</span>
                    <span className="mt-0.5 block text-[11px] text-black/40">
                      {s.category} · {s.gender === "Female" ? "Women" : "Men"}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    <span className="text-xs font-semibold text-gold">
                      ₹{Number(s.price).toLocaleString("en-IN")}
                    </span>
                    {selected && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-white">
                        <Check size={11} />
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
