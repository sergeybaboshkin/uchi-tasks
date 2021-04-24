import { bubbleSort, selectionSort, insertionSort, binarySearch } from './tasks/algorithms';

function isGreater <T>(a: T, b: T): boolean {
  return a > b;
}
// let array: number[] = [200, 4, 6, 12, 5, 12, 100, 76, 1];
let array: string[] = ['ab', 'a', 'new', 'class', 'void', 'ww'];
// let array: boolean[] = [false, true, false, true, true];

// array = bubbleSort(array, isGreater);
// array = selectionSort(array, isGreater);
array = insertionSort(array, isGreater);

console.log(array);

// const searchIndex = binarySearch(array, 5);
const searchIndex = binarySearch(array, 'class');
// const searchIndex = binarySearch(array, true);

console.log(searchIndex);
