export function isGreater<T>(a: T, b: T): boolean {
  if (typeof a === 'number' || typeof a === 'string') return a > b;
  else if (typeof a === 'boolean') return a;

  return false;
}
