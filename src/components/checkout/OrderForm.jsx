import { useMemo, useState } from "react";
import { createOrder } from "../../lib/apiClient";
import { isDemoMode } from "../../lib/env";
import { product } from "../../data/product";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

export default function OrderForm({ onSuccess }) {
  const demo = useMemo(() => isDemoMode(), []);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    color: product.colors[0]?.id || "obsidian"
  });

  const set = (key, val) => setForm((p) => ({ ...p, [key]: val }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    if (form.name.trim().length < 2) {
      setStatus({ type: "error", msg: "Please enter your full name." });
      return;
    }
    if (!emailOk(form.email)) {
      setStatus({ type: "error", msg: "Please enter a valid email address." });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        product: product.name,
        price: product.price.current,
        color: form.color
      };

      const res = await createOrder(payload);

      setStatus({
        type: "success",
        msg: demo
          ? "Demo order created (mocked). UI works without backend."
          : "Order placed successfully. Check your email for confirmation."
      });

      // optional success callback (close modal)
      setTimeout(() => onSuccess?.(res), 800);
    } catch (err) {
      setStatus({ type: "error", msg: err?.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      {demo ? (
        <div className="rounded-2xl bg-white/6 px-4 py-3 text-sm text-ice-200/80 ring-1 ring-white/10">
          <span className="font-semibold text-ice-100">Demo Mode:</span>{" "}
          API calls are mocked so Netlify demo never breaks.
        </div>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs text-ice-200/70">Full Name</span>
          <input
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className="mt-2 w-full rounded-2xl bg-black/30 px-4 py-3 text-sm text-ice-100 ring-1 ring-white/10 outline-none placeholder:text-ice-200/40 focus:ring-white/20"
            placeholder="e.g. Usman Irfan"
            autoComplete="name"
          />
        </label>

        <label className="block">
          <span className="text-xs text-ice-200/70">Email</span>
          <input
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className="mt-2 w-full rounded-2xl bg-black/30 px-4 py-3 text-sm text-ice-100 ring-1 ring-white/10 outline-none placeholder:text-ice-200/40 focus:ring-white/20"
            placeholder="e.g. you@email.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs text-ice-200/70">Choose Finish</span>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {product.colors.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => set("color", c.id)}
              className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-sm ring-1 transition-colors ${
                form.color === c.id
                  ? "bg-white text-ink-950 ring-white"
                  : "bg-white/6 text-ice-100 ring-white/10 hover:bg-white/10"
              }`}
            >
              <span className="font-semibold">{c.name}</span>
              <span
                className="h-4 w-4 rounded-full ring-1 ring-black/10"
                style={{ background: c.swatch }}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </label>

      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-ice-200/75">Total</span>
          <span className="font-semibold">
            ${product.price.current.toFixed(0)}
            <span className="ml-2 text-xs text-ice-200/60 line-through">
              ${product.price.compareAt.toFixed(0)}
            </span>
          </span>
        </div>
        <div className="mt-1 text-xs text-ice-200/60">
          Shipping calculated after confirmation.
        </div>
      </div>

      {status.msg ? (
        <div
          className={`rounded-2xl px-4 py-3 text-sm ring-1 ${
            status.type === "success"
              ? "bg-white text-ink-950 ring-white"
              : "bg-red-500/10 text-red-200 ring-red-400/20"
          }`}
        >
          {status.msg}
        </div>
      ) : null}

      <button
        disabled={loading}
        className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-ink-950 hover:bg-ice-100 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Placing Order..." : "Confirm Order"}
      </button>

      <div className="text-xs text-ice-200/60">
        By ordering, you agree to our terms and privacy policy (template demo).
      </div>
    </form>
  );
}
