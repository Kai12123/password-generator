export function clampNumber({
  number,
  min,
  max,
}: {
  number: number;
  min: number;
  max: number;
}) {
  return Math.min(max, Math.max(min, number));
}
