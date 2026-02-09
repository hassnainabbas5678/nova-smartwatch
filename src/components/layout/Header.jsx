import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import { product } from "../../data/product";

const nav = [
  { label: "Features", href: "#features" },
  { label: "Specs", href: "#specs" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" }
];

function NavLink({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative px-1 py-2 text-sm font-medium transition-colors"
      style={{ color: active ? "var(--text)" : "var(--muted2)" }}
    >
      <span className="relative z-10">{label}</span>

      {/* underline grows from center */}
      <span
        className="pointer-events-none absolute left-1/2 -bottom-0.5 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full"
        style={{ background: "rgba(255,255,255,.14)" }}
      />

      {/* active underline */}
      {active ? (
        <>
          <span
            className="pointer-events-none absolute left-1/2 -bottom-0.5 h-[2px] w-full -translate-x-1/2 rounded-full"
            style={{ background: "var(--accentDim)" }}
          />
          {/* active dot (eye-catching but professional) */}
          <span
            className="pointer-events-none absolute -right-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        </>
      ) : null}
    </a>
  );
}

export default function Header() {
  const [active, setActive] = useState("#features");
  const [open, setOpen] = useState(false);

  // keep active link synced with hash
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash || "#top";
      if (h === "#top" || h === "#checkout") return;
      setActive(h);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const price = useMemo(() => `$${Number(product.price.current).toFixed(0)}`, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Thin glow line (adds premium presence) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--accentDim), transparent)" }}
      />

      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />

      <div className="relative container pt-5">
        {/* NEW STRUCTURE: NOT a pill bar */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-12 items-center gap-3"
        >
          {/* LEFT: Brand block */}
          <a href="#top" className="col-span-6 md:col-span-3 flex items-center">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold tracking-wide">
                  {product.name}
                </span>

                {/* thin accent rule instead of chip */}
                <span
                  className="h-px w-10"
                  style={{ background: "var(--accentDim)" }}
                />
              </div>

              <div className="text-[11px] uppercase tracking-widest" style={{ color: "var(--muted2)" }}>
                Limited Production
              </div>
            </div>
          </a>


          {/* CENTER: Links (clean row, no dock/pill) */}
          <nav className="hidden md:col-span-6 md:flex items-center justify-center gap-8">
            {nav.map((n) => (
              <NavLink
                key={n.href}
                href={n.href}
                label={n.label}
                active={active === n.href}
                onClick={() => {
                  setActive(n.href);
                  setOpen(false);
                }}
              />
            ))}
          </nav>

          {/* RIGHT: price + CTA + square menu */}
          <div className="col-span-6 md:col-span-3 flex items-center justify-end gap-2">
            <div className="hidden sm:block text-right pr-2">
              <div className="text-[11px]" style={{ color: "var(--muted2)" }}>
                Starting
              </div>
              <div className="text-sm font-semibold">{price}</div>
            </div>

            {/* Filled CTA (stronger, more premium) */}
            <MagneticButton
              href="#checkout"
              className="rounded-2xl px-4 py-2.5 text-sm font-semibold"
              style={{
                background: "var(--accent)",
                color: "#04110D",
                boxShadow: "0 18px 40px rgba(47,214,162,.14)"
              }}
              data-magnetic="12"
            >
              Buy Now
            </MagneticButton>

            {/* Square menu button (eye-catching) */}
            <button
              className="md:hidden h-11 w-11 rounded-2xl glass flex items-center justify-center"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              <div className="flex flex-col gap-1.5">
                <span className="h-[2px] w-5 rounded-full bg-white/70" />
                <span className="h-[2px] w-5 rounded-full bg-white/45" />
              </div>
            </button>
          </div>
        </motion.div>

        {/* MOBILE: dropdown sheet (different from pill nav) */}
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass rounded-3xl p-4"
          >
            <div className="grid gap-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => {
                    setActive(n.href);
                    setOpen(false);
                  }}
                  className="rounded-2xl px-4 py-3 glass-soft text-sm font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#checkout"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold"
                style={{ background: "var(--accent)", color: "#04110D" }}
              >
                Checkout
              </a>
            </div>
          </motion.div>
        ) : null}
      </div>
    </header>
  );
}
