export function binarySearch<T>(array: Array<T>, x: T, compareFunction: (a: T, b: T) => number): number {
  
  const func = function<T>(array: Array<T>, x: T, left: number = 0, right: number = array.length - 1, compareFunction: (a: T, b: T) => number): number {
    if (right >= left) {
      const middle = Math.round(left + (right - left) / 2);
  
      if(compareFunction(array[middle], x) === 0) return middle;
  
      if(compareFunction(array[middle], x) > 0) return func(array, x, left, middle - 1, compareFunction);
  
      return func(array, x, middle + 1, right, compareFunction);
    }
    return -1;
  }

  return func(array, x, 0, array.length - 1, compareFunction);
}
