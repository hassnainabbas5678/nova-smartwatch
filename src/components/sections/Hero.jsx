import { motion, useScroll, useTransform } from "framer-motion";
import { product } from "../../data/product";
import MagneticButton from "../ui/MagneticButton";
import Reveal from "../ui/Reveal";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 0.35], [0, 18]);
  const imgR = useTransform(scrollYProgress, [0, 0.35], [0, 4]);

  return (
    <section id="top" className="relative pt-28 md:pt-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full glass-soft px-3 py-1 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                Limited batch • premium hardware
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 text-[44px] leading-[1.02] sm:text-5xl md:text-6xl font-semibold">
                A smartwatch that feels{" "}
                <span className="relative inline-block">
                  designed
                  <span
                    className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full"
                    style={{ background: "var(--accentDim)" }}
                  />
                </span>
                , not assembled.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-base md:text-lg">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <MagneticButton
                  href="#checkout"
                  className="rounded-2xl px-5 py-3 text-sm font-semibold"
                  style={{
                    background: "var(--accent)",
                    color: "#04110D",
                    boxShadow: "0 16px 40px rgba(47,214,162,.18)"
                  }}
                  data-magnetic="12"
                >
                  Buy Now • ${product.price.current.toFixed(0)}
                </MagneticButton>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold glass"
                >
                  Explore features
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Display", "AMOLED Ultra-Glow"],
                  ["Battery", "7-Day optimized"],
                  ["Water", "5ATM rated"]
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl glass px-4 py-3">
                    <div className="text-xs font-medium" style={{ color: "var(--muted2)" }}>{k}</div>
                    <div className="mt-1 text-sm font-semibold">{v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[36px] glass p-5 md:p-7 overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">{product.name}</div>
                  <div className="text-xs" style={{ color: "var(--muted2)" }}>
                    minimal UI • precision motion
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">
                    ${product.price.current.toFixed(0)}
                  </div>
                  <div className="text-xs line-through" style={{ color: "var(--muted2)" }}>
                    ${product.price.compareAt.toFixed(0)}
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[28px] bg-white/5 border border-white/10 overflow-hidden">
                <div className="relative">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(600px 280px at 50% 20%, rgba(47,214,162,.14), transparent 60%)"
                    }}
                  />
                  <motion.img
                    src={product.images.hero}
                    alt={product.name}
                    style={{ y: imgY, rotate: imgR }}
                    className="relative z-10 w-full select-none p-6 md:p-10 will-change-transform"
                    draggable="false"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Precision Haptics", "Clean UI", "Alloy Body"].map((x) => (
                  <span key={x} className="rounded-full px-3 py-1 text-xs glass-soft">
                    {x}
                  </span>
                ))}
              </div>
            </motion.div>

            <div id="checkout" className="h-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
