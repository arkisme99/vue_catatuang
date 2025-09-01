// utils/enum-to-options.ts
export function enumToOptions<T extends object>(e: T) {
  return Object.values(e).map((v) => ({
    label: String(v).charAt(0).toUpperCase() + String(v).slice(1),
    value: v,
  }));
}
