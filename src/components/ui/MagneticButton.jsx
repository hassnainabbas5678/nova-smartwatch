import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  strength = 18
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 300, damping: 18, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 300, damping: 18, mass: 0.2 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set((mx / (r.width / 2)) * strength);
    y.set((my / (r.height / 2)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = href ? "a" : "button";

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-flex">
      <Comp
        ref={ref}
        href={href}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`relative inline-flex items-center justify-center gap-2 ring-1 ring-white/10 shadow-soft transition-colors ${className}`}
      >
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Comp>
    </motion.div>
  );
}
