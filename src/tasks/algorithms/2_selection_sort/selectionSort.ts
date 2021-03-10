import { swap, isGreater } from '../../helpers';

export function selectionSort<T>(array: Array<T>): Array<T> {
  let newArray = [...array];
  for (let i = 0; i < newArray.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < newArray.length; j++) {
      if (isGreater(array[index], newArray[j])) index = j;
    }
    newArray = swap(newArray, index, i);
  }
  return newArray;
};
