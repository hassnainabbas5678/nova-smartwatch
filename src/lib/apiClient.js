import { ENV, isDemoMode } from "./env";
import { createMockOrder } from "./mockOrders";

const timeoutFetch = async (url, options = {}, timeoutMs = 8000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    return res;
  } finally {
    clearTimeout(id);
  }
};

export async function createOrder(payload) {
  // Portfolio demo mode: gracefully mock without errors
  if (isDemoMode()) {
    return createMockOrder(payload);
  }

  const url = `${ENV.API_BASE_URL}/api/orders`;
  const res = await timeoutFetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    let msg = "Order failed.";
    try {
      const data = await res.json();
      msg = data?.message || msg;
    } catch {
      // ignore
    }
    throw new Error(msg);
  }

  return res.json();
}
