import { swap } from '../../helpers';

export function selectionSort<T>(array: Array<T>, compareFunction: (a: T, b: T) => boolean): Array<T> {
  let newArray = [...array];
  for (let i = 0; i < newArray.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < newArray.length; j++) {
      if (compareFunction(array[index], newArray[j])) index = j;
    }
    newArray = swap(newArray, index, i);
  }
  return newArray;
};
