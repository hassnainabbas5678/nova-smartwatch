import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

const faqs = [
  {
    q: "Does the checkout work on Netlify without backend?",
    a: "Yes. In demo mode, API calls are mocked so the UI remains fully functional without errors."
  },
  {
    q: "Where do real orders go in production?",
    a: "Once the backend is deployed and connected, orders are stored in MongoDB via the /api/orders endpoint."
  },
  {
    q: "Can buyers plug this into their own product?",
    a: "Yes. Update product data in src/data/product.js and swap images in public/product."
  },
  {
    q: "How do admins view orders?",
    a: "Admins can use the admin API endpoints (or build an admin dashboard later) to fetch and manage orders."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Everything clarified. No friction."
      desc="FAQ reduces buyer hesitation and improves conversion rate."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, idx) => {
          const active = open === idx;
          return (
            <Reveal key={f.q} delay={idx * 0.03}>
              <button
                type="button"
                onClick={() => setOpen(active ? -1 : idx)}
                className="w-full text-left rounded-3xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/8 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <div className="text-xs text-ice-200/70">
                    {active ? "Close" : "Open"}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 text-sm text-ice-200/80">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
