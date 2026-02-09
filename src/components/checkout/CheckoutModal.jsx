import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../ui/Modal";
import OrderForm from "./OrderForm";
import { product } from "../../data/product";

export default function CheckoutModal() {
  const [open, setOpen] = useState(false);

  const isCheckoutHash = useMemo(
    () => typeof window !== "undefined" && window.location.hash === "#checkout",
    []
  );

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === "#checkout");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const close = () => {
    setOpen(false);
    history.pushState("", document.title, window.location.pathname + window.location.search);
  };

  return (
    <AnimatePresence>
      {(open || isCheckoutHash) && (
        <Modal open={open || isCheckoutHash} onClose={close}>
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="rounded-3xl glass hairline border overflow-hidden">
                <div className="relative">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(49,231,192,.18), transparent 55%)"
                    }}
                  />
                  <motion.img
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    src={product.images.angle}
                    alt={product.name}
                    className="relative z-10 w-full p-6 select-none"
                    draggable="false"
                  />
                </div>
                <div className="border-t px-5 py-4 hairline">
                  <div className="text-sm font-semibold">{product.name}</div>
                  <div className="mt-1 flex items-center justify-between text-sm">
                    <span style={{ color: "var(--muted)" }}>Today</span>
                    <span className="font-semibold">
                      ${product.price.current.toFixed(0)}
                      <span className="ml-2 text-xs line-through" style={{ color: "var(--muted)" }}>
                        ${product.price.compareAt.toFixed(0)}
                      </span>
                    </span>
                  </div>
                  <div className="mt-3 text-xs" style={{ color: "var(--muted)" }}>
                    Secure checkout (demo-safe). When backend is connected, orders will be stored in MongoDB.
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xl md:text-2xl font-semibold tracking-tight">
                    Checkout
                  </div>
                  <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                    Fill details — we’ll confirm your order via email.
                  </div>
                </div>

                <button
                  onClick={close}
                  className="rounded-2xl px-3 py-2 text-sm glass-soft hairline border hover:opacity-90 transition-opacity"
                  aria-label="Close checkout"
                >
                  Close
                </button>
              </div>

              <div className="mt-5">
                <OrderForm onSuccess={close} />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
}
