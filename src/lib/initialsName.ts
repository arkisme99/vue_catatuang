export function initialsName(name: string, max: number = 3): string {
  if (!name) return "";

  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase())
    .slice(0, max) // ambil sesuai jumlah max
    .join("");
}
