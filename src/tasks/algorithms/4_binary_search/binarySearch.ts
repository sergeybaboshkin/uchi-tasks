export function binarySearch<T>(array: Array<T>, x: T, left: number = 0, right: number = array.length - 1): number {
  if (right >= left) {
    const middle = Math.round(left + (right - left) / 2);

    if(array[middle] === x) return middle;

    if(array[middle] > x) return binarySearch(array, x, left, middle - 1);

    return binarySearch(array, x, middle + 1, right);
  }
  return -1;
}
