const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function createMockOrder(payload) {
  // Smooth demo UX: slight delay to mimic network
  await wait(650);

  return {
    ok: true,
    demo: true,
    order: {
      _id: `demo_${Math.random().toString(16).slice(2)}`,
      name: payload?.name || "Demo Buyer",
      email: payload?.email || "demo@buyer.com",
      product: payload?.product || "NOVA X1 Smartwatch",
      price: payload?.price ?? 149,
      status: "pending",
      createdAt: new Date().toISOString()
    }
  };
}
