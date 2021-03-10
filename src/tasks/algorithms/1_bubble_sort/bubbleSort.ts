import { swap, isGreater } from '../../helpers';

export function bubbleSort<T>(array: Array<T>): Array<T> {
  let newArray = [...array];

  const n = newArray.length;
  let k;

  for (let m = n; m >= 0; m--) {
    for (let i = 0; i < n - 1; i++) {
      k = i + 1;
      if (isGreater(newArray[i], newArray[k])) {
        newArray = swap(newArray, i, k);
      }
    }
  }

  return newArray;
};
