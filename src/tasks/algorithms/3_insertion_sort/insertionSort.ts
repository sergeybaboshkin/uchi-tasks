import { swap, isGreater } from "../../helpers";

export function insertionSort<T>(array: Array<T>): Array<T> {
  let newArray = [...array];

  for (let i = 1; i < newArray.length; i++) {
    for (let j = i; j > 0; j--) {
      if (isGreater(newArray[j - 1], newArray[j])) {
        newArray = swap(newArray, j, j - 1);
      }
    }
  }

  return newArray;
}
