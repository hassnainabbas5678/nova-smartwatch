import { useMemo, useState } from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";
import { product } from "../../data/product";

const plans = [
  {
    id: "standard",
    name: "Standard",
    badge: "Most Popular",
    delta: 0,
    perks: ["NOVA X1 Watch", "Standard strap", "1-year support"]
  },
  {
    id: "premium",
    name: "Premium",
    badge: "Best Value",
    delta: 20,
    perks: ["NOVA X1 Watch", "Premium strap", "Fast shipping", "2-year support"]
  }
];

export default function Pricing() {
  const [plan, setPlan] = useState(plans[0].id);

  const selected = useMemo(
    () => plans.find((p) => p.id === plan) || plans[0],
    [plan]
  );

  const total = useMemo(() => product.price.current + selected.delta, [selected]);

  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Pick your finish. Choose your bundle."
      desc="Clear options, clear value — designed to reduce hesitation and lift conversions."
    >
      <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-7">
          <div className="rounded-[36px] glass p-6 md:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm" style={{ color: "var(--muted2)" }}>
                  Choose bundle
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight">
                  {selected.name}
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs" style={{ color: "var(--muted2)" }}>
                  Today
                </div>
                <div className="text-3xl font-semibold tracking-tight">
                  ${total.toFixed(0)}
                </div>
                <div className="text-xs" style={{ color: "var(--muted2)" }}>
                  Compare at ${product.price.compareAt.toFixed(0)}
                </div>
              </div>
            </div>

            {/* Bundle options */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {plans.map((p) => {
                const active = p.id === plan;

                return (
                  <button
                    key={p.id}
                    onClick={() => setPlan(p.id)}
                    type="button"
                    className={`relative text-left rounded-3xl px-5 py-4 transition
                      ${active ? "bg-white/6" : "bg-white/4 hover:bg-white/5"}
                    `}
                    style={{
                      border: active
                        ? "1px solid rgba(47,214,162,.28)"
                        : "1px solid rgba(255,255,255,.12)",
                      boxShadow: active ? "0 0 0 1px rgba(47,214,162,.12)" : "none"
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {/* ✅ Prominent title always */}
                        <div className={`text-base font-semibold ${active ? "text-white" : "text-white/90"}`}>
                          {p.name}
                        </div>

                        {/* ✅ Subtitle readable always */}
                        <div className={`mt-1 text-sm ${active ? "text-white/70" : "text-white/65"}`}>
                          +${p.delta} bundle upgrade
                        </div>
                      </div>

                      <span
                        className="text-[11px] rounded-full px-2.5 py-1 font-semibold"
                        style={{
                          background: active ? "var(--accentDim)" : "rgba(255,255,255,.06)",
                          color: active ? "var(--text)" : "rgba(255,255,255,.72)",
                          border: "1px solid rgba(255,255,255,.10)"
                        }}
                      >
                        {p.badge}
                      </span>
                    </div>

                    {/* active indicator */}
                    {active ? (
                      <span
                        className="pointer-events-none absolute inset-x-6 -bottom-1 h-[2px] rounded-full"
                        style={{ background: "var(--accentDim)" }}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>

            {/* Included */}
            <div className="mt-6 rounded-3xl glass-soft p-5">
              <div className="text-sm font-semibold">Included</div>
              <ul className="mt-3 grid gap-2 text-sm" style={{ color: "var(--muted)" }}>
                {selected.perks.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accentDim)" }} />
                    <span className="text-white/80">{x}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs" style={{ color: "var(--muted2)" }}>
                  One checkout • clear value • better conversions
                </div>

                {/* CTA: premium + consistent */}
                <MagneticButton
                  href="#checkout"
                  className="rounded-2xl px-5 py-3 text-sm font-semibold"
                  style={{
                    background: "var(--accent)",
                    color: "#04110D",
                    boxShadow: "0 16px 40px rgba(47,214,162,.14)"
                  }}
                >
                  Buy Now — ${total.toFixed(0)}
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Confidence box */}
        <Reveal className="lg:col-span-5" delay={0.05}>
          <div className="rounded-[36px] glass p-6 md:p-7">
            <div className="text-sm" style={{ color: "var(--muted2)" }}>
              Confidence
            </div>
            <div className="mt-3 text-xl font-semibold tracking-tight">
              Built to reduce hesitation.
            </div>

            <div className="mt-5 space-y-4 text-sm" style={{ color: "var(--muted)" }}>
              <div className="rounded-3xl glass-soft p-4">
                <div className="font-semibold text-white">Returns</div>
                <div className="mt-1 text-white/70">7-day easy returns.</div>
              </div>
              <div className="rounded-3xl glass-soft p-4">
                <div className="font-semibold text-white">Support</div>
                <div className="mt-1 text-white/70">Priority email support.</div>
              </div>
              <div className="rounded-3xl glass-soft p-4">
                <div className="font-semibold text-white">Warranty</div>
                <div className="mt-1 text-white/70">1–2 years depending on bundle.</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
