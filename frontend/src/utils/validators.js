export function isValidEGN(value) {
    const v = String(value || "").trim();
    return /^\d{10}$/.test(v);
  }
  