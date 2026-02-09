import { motion, useScroll, useTransform } from "framer-motion";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import { product } from "../../data/product";

export default function Story() {
  const { scrollYProgress } = useScroll();
  const lineW = useTransform(scrollYProgress, [0.08, 0.22], ["0%", "100%"]);

  return (
    <Section
      eyebrow="Motion Storytelling"
      title="Designed like jewelry. Built like a machine."
      desc="A calm, premium rhythm—so the product feels expensive before the user even clicks Buy."
      className="pt-10"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-7">
              <div className="text-sm text-ice-200/70">The Experience</div>
              <div className="mt-3 text-xl md:text-2xl font-semibold tracking-tight">
                Precision haptics. Clean UI. Zero distraction.
              </div>

              <div className="mt-5 space-y-4 text-sm text-ice-200/80">
                <p>
                  NOVA X1 keeps focus on what matters—time, health, and confidence.
                  Every interaction is designed to feel intentional and premium.
                </p>
                <p>
                  This landing page is built to convert: clear hierarchy, strong CTA rhythm,
                  and micro-interactions that reward exploration.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/25 ring-1 ring-white/10 px-4 py-3">
                  <div className="text-sm font-semibold">7-Day Battery</div>
                  <div className="text-xs text-ice-200/70 mt-1">
                    Optimized power curve.
                  </div>
                </div>
                <div className="rounded-2xl bg-black/25 ring-1 ring-white/10 px-4 py-3">
                  <div className="text-sm font-semibold">AMOLED</div>
                  <div className="text-xs text-ice-200/70 mt-1">
                    Ultra-glow clarity.
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="h-[1px] w-full bg-white/10 overflow-hidden rounded-full">
                  <motion.div
                    style={{ width: lineW }}
                    className="h-full bg-white/70"
                  />
                </div>
                <div className="mt-2 text-xs text-ice-200/60">
                  Scroll to reveal the product story.
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.05}>
            <div className="relative overflow-hidden rounded-[40px] bg-white/5 ring-1 ring-white/10 shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/35" />
              <motion.img
                src={product.images.detail}
                alt="Watch detail"
                initial={{ opacity: 0, scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                className="relative z-10 w-full select-none p-6 md:p-10"
                draggable="false"
              />
              <div className="relative z-10 border-t border-white/10 px-6 py-5">
                <div className="text-sm font-semibold">Premium build feel</div>
                <div className="mt-1 text-sm text-ice-200/75">
                  Balanced shadows, crisp typography, and motion cadence that increases trust.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
