import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
  className = "",
  divider = true
}) {
  return (
    <motion.section
      id={id}
      className={`relative py-18 md:py-24 ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* soft section separator */}
      {divider ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,.10), transparent)" }}
        />
      ) : null}

      <div className="container">
        {(eyebrow || title || desc) && (
          <div className="mx-auto mb-10 max-w-3xl">
            {eyebrow ? (
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full glass-soft px-3 py-1 text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                  <span style={{ color: "var(--muted)" }}>{eyebrow}</span>
                </div>
              </Reveal>
            ) : null}

            {title ? (
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.08]">
                  {title}
                </h2>
              </Reveal>
            ) : null}

            {desc ? (
              <Reveal delay={0.1}>
                <p className="mt-4 text-base md:text-lg">{desc}</p>
              </Reveal>
            ) : null}
          </div>
        )}

        {children}
      </div>
    </motion.section>
  );
}
