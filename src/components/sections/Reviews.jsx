import { motion } from "framer-motion";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

const reviews = [
  {
    name: "Areeba M.",
    role: "Fitness • Karachi",
    text:
      "The display is insanely clean and the UI feels premium. The landing page vibe matches the product—feels legit."
  },
  {
    name: "Hassan R.",
    role: "Designer • Lahore",
    text:
      "The micro-interactions and spacing are perfect. It looks like a real product brand, not a template."
  },
  {
    name: "Sara K.",
    role: "Busy Professional",
    text:
      "Smooth scrolling, clean story, and checkout is simple. Exactly how a single-product page should be."
  }
];

export default function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Social Proof"
      title="Trust builds faster when it looks real."
      desc="High-contrast, premium review cards with subtle motion on hover."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((r, idx) => (
          <Reveal key={r.name} delay={idx * 0.04}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 shadow-soft"
            >
              <div className="text-sm font-semibold">{r.name}</div>
              <div className="text-xs text-ice-200/70 mt-1">{r.role}</div>
              <p className="mt-4 text-sm text-ice-200/80">{r.text}</p>
              <div className="mt-6 h-[1px] w-full bg-white/10" />
              <div className="mt-3 text-xs text-ice-200/60">
                Verified purchase • NOVA community
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
