import { bubbleSort, selectionSort, insertionSort, binarySearch } from './tasks/algorithms';
import { HashMap } from './tasks/dataStructures';

function isGreater <T>(a: T, b: T): boolean {
  return a > b;
}

function compareFunction <T>(a: T, b: T): number {
  if (a > b) return 1;
  if (a === b) return 0;
  return -1;
}
let array: number[] = [200, 4, 6, 12, 5, 12, 100, 76, 1];
// let array: string[] = ['ab', 'a', 'new', 'class', 'void', 'ww'];
// let array: boolean[] = [false, true, false, true, true];

// array = bubbleSort(array, isGreater);
// array = selectionSort(array, isGreater);
array = insertionSort(array, isGreater);

console.log(array);

const searchIndex = binarySearch(array, 5, compareFunction);
// const searchIndex = binarySearch(array, 'class', compareFunction);
// const searchIndex = binarySearch(array, true, compareFunction);

console.log(searchIndex);


//===================HashMap==============================

const hashMap = new HashMap([
  { key: 'sda', value: 12 },
  { key: 2, value: 'sdfgsdfg' },
  { key: '2222', value: 434543 },
  { key: 'ddd', value: 'dfd' },
  { key: '12', value: 940590 },
  { key: '2', value: 90 },
]);

hashMap.deleteItem('sda')
console.log('hashMap', hashMap);
hashMap.setItem({key: '23', value: 23});
hashMap.setItem({key: '**', value: 'dmlkgmhklkl'});
hashMap.setItem({key: { number: 10, value: 'dsds'}, value: 'gggggggggggg'});
hashMap.setItem({key: { number: 10, value: 'dsds'}, value: '1233454'});
console.log('hashMap', hashMap);

