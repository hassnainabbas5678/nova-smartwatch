import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import { product } from "../../data/product";

export default function StickyBuyNow() {
  const [hidden, setHidden] = useState(true);
  const { scrollYProgress } = useScroll();

  const threshold = useMemo(() => 0.05, []);
  const opacity = useTransform(scrollYProgress, [threshold, threshold + 0.05], [0, 1]);
  const y = useTransform(scrollYProgress, [threshold, threshold + 0.05], [18, 0]);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setHidden(v < threshold));
    return () => unsub();
  }, [scrollYProgress, threshold]);

  if (hidden) return null;

  return (
    <motion.div style={{ opacity, y }} className="fixed bottom-4 left-0 right-0 z-50">
      <div className="container">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-3xl glass px-4 py-3 hairline border">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">{product.name}</div>
            <div className="text-xs" style={{ color: "var(--muted)" }}>
              Limited batch • Ships in 24–48h
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right leading-tight">
              <div className="text-sm font-semibold">
                ${product.price.current.toFixed(0)}
                <span className="ml-2 text-xs line-through" style={{ color: "var(--muted)" }}>
                  ${product.price.compareAt.toFixed(0)}
                </span>
              </div>
              <div className="text-[11px]" style={{ color: "var(--muted)" }}>
                Free strap included
              </div>
            </div>

            <MagneticButton
              href="#checkout"
              className="rounded-2xl px-4 py-2.5 text-sm font-semibold"
              style={{
                background: "var(--accent)",
                color: "#04110D",
                boxShadow: "0 12px 30px rgba(49,231,192,.22)"
              }}
            >
              Buy Now
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
