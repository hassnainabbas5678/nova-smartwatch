import { useEffect } from "react";

/**
 * Optional enhancement: add a "magnetic" cursor feel to elements
 * with [data-magnetic]. Doesn't break if unused.
 */
export default function useMagnetic() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-magnetic]"));

    const move = (e) => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        const inside =
          e.clientX >= r.left &&
          e.clientX <= r.right &&
          e.clientY >= r.top &&
          e.clientY <= r.bottom;

        if (!inside) {
          el.style.transform = "translate3d(0,0,0)";
          return;
        }

        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        const strength = Number(el.getAttribute("data-magnetic")) || 10;

        el.style.transform = `translate3d(${(mx / r.width) * strength}px, ${(my / r.height) * strength}px, 0)`;
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
}
