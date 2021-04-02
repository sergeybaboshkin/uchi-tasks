export function binarySearch<T>(array: Array<T>, x: T): number {
  
  const func = function<T>(array: Array<T>, x: T, left: number = 0, right: number = array.length - 1): number {
    if (right >= left) {
      const middle = Math.round(left + (right - left) / 2);
  
      if(array[middle] === x) return middle;
  
      if(array[middle] > x) return func(array, x, left, middle - 1);
  
      return func(array, x, middle + 1, right);
    }
    return -1;
  }

  return func(array, x, 0, array.length - 1);
}
