import { useEffect } from "react";

const HEADER_OFFSET = 110; // tweak if needed

export default function useLenisScroll() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target?.closest?.('a[href^="#"]');
      if (!a) return;

      const hash = a.getAttribute("href");
      if (!hash || hash.length < 2) return;

      const el = document.querySelector(hash);
      if (!el) return;

      // allow checkout hash change (modal trigger)
      if (hash !== "#checkout") e.preventDefault();

      try {
        // If Lenis instance exists, use it
        if (window.lenis && typeof window.lenis.scrollTo === "function") {
          window.lenis.scrollTo(el, { offset: -HEADER_OFFSET });
        } else {
          // fallback
          const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
          window.scrollTo({ top, behavior: "smooth" });
        }
      } catch {
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }

      if (hash !== "#checkout") history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
