export function swap<T>(array: Array<T>, i: number, k: number): Array<T> {
  const newArray = [...array];

  const tmp = newArray[k];
  newArray[k] = newArray[i];
  newArray[i] = tmp;

  return newArray;
}