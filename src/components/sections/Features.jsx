import { motion } from "framer-motion";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

const features = [
  { title: "AMOLED Ultra-Glow", desc: "Crisp contrast and calibrated brightness for every environment." },
  { title: "Health & Sleep Insights", desc: "Actionable trends, not noisy data. Built for consistency." },
  { title: "Precision Haptics", desc: "Micro-feedback that feels expensive—quiet, sharp, intentional." },
  { title: "7-Day Battery Curve", desc: "Optimized power profile for real-world usage." },
  { title: "5ATM Water Resistance", desc: "Train, swim, move—no second thoughts." },
  { title: "Fast Strap Swap", desc: "One-click strap system for instant styling." }
];

export default function Features() {
  return (
    <Section
      id="features"
      eyebrow="Performance Layer"
      title="Luxury isn’t loud. It’s controlled."
      desc="Feature cards designed like product spec modules—built to feel premium, not SaaS."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <Reveal key={f.title} delay={idx * 0.03}>
            <motion.div
              whileHover={{ y: -7 }}
              transition={{ duration: 0.32 }}
              className="group rounded-[28px] glass p-6 shadow-soft hover:ring-white/20"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-lg font-semibold tracking-tight">
                  {f.title}
                </div>

                {/* icon capsule */}
                <div className="relative h-10 w-10 rounded-2xl bg-white/6 ring-1 ring-white/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-neon-400/25 to-transparent" />
                  <div className="relative h-2.5 w-2.5 rounded-full bg-neon-400 shadow-[0_0_18px_rgba(48,231,176,0.45)]" />
                </div>
              </div>

              <p className="mt-3 text-sm text-fog-200/75">{f.desc}</p>

              <div className="mt-6 h-px w-full bg-white/10 overflow-hidden rounded-full">
                <div className="h-full w-0 bg-neon-400/80 transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="mt-3 text-xs text-fog-200/60">
                Hover → signal quality & intent
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
