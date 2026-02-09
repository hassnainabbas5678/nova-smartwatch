import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

const specs = [
  { k: "Display", v: "1.9” AMOLED Ultra-Glow" },
  { k: "Battery", v: "Up to 7 days (optimized)" },
  { k: "Water", v: "5ATM water resistant" },
  { k: "Sensors", v: "HR, SpO2, Sleep, Motion" },
  { k: "Connectivity", v: "Bluetooth 5.x" },
  { k: "Materials", v: "Alloy body, soft-touch strap" }
];

export default function TechSpecs() {
  return (
    <Section
      id="specs"
      eyebrow="Tech Specs"
      title="Built with restraint. Engineered with intent."
      desc="Clear specs, clean layout, and a premium panel style—buyers love this in templates."
    >
      <div className="grid gap-4 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="rounded-[40px] bg-white/5 ring-1 ring-white/10 shadow-glow p-7">
            <div className="text-sm text-ice-200/70">What’s inside</div>
            <div className="mt-3 text-2xl font-semibold tracking-tight">
              Premium feel isn’t a color.
            </div>
            <p className="mt-4 text-sm text-ice-200/80">
              It’s spacing, contrast, micro-motion, and strong hierarchy. This section
              makes the product feel real and reduces hesitation.
            </p>

            <div className="mt-6 rounded-3xl bg-black/25 ring-1 ring-white/10 p-4">
              <div className="text-xs text-ice-200/60">Tip for buyers</div>
              <div className="mt-1 text-sm text-ice-200/85">
                Update specs in one place and the section stays consistent.
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.05}>
          <div className="rounded-[40px] bg-white/5 ring-1 ring-white/10 shadow-soft overflow-hidden">
            <div className="border-b border-white/10 px-6 py-5">
              <div className="text-sm font-semibold">Specifications</div>
              <div className="text-xs text-ice-200/70 mt-1">
                Clean and readable on mobile-first layout
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {specs.map((s) => (
                <div
                  key={s.k}
                  className="flex items-center justify-between gap-4 px-6 py-4"
                >
                  <div className="text-sm text-ice-200/70">{s.k}</div>
                  <div className="text-sm font-semibold text-ice-100 text-right">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
