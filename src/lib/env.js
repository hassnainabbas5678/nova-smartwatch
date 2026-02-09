const getEnv = (key, fallback = "") => {
  // Vite exposes env via import.meta.env
  const val = import.meta?.env?.[key];
  return typeof val === "string" && val.length ? val : fallback;
};

export const ENV = {
  // When empty, frontend runs in "demo mode" (mocked)
  API_BASE_URL: getEnv("VITE_API_BASE_URL", ""),
  // Buyers can flip this to force real API during integration
  FORCE_API: getEnv("VITE_FORCE_API", "false") === "true"
};

export const isDemoMode = () => {
  // Demo mode: no API URL set and not forced
  return !ENV.API_BASE_URL && !ENV.FORCE_API;
};
