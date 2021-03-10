import { insertionSort } from './insertionSort';
import { testArrayString, testArrayNumber, testArrayBoolean } from '../../helpers';

describe('insertion sort test cases', () => {
  it('Array string', () => {
    const sortedArray = insertionSort(testArrayString);
    for (let i = 1; i <= sortedArray.length - 1; i++) {
      expect(sortedArray[i] >= sortedArray[i - 1]).toBeTruthy();
    }
  })

  it('Array number', () => {
    const sortedArray = insertionSort(testArrayNumber);
    for (let i = 1; i <= sortedArray.length - 1; i++) {
      expect(sortedArray[i] >= sortedArray[i - 1]).toBeTruthy();
    }
  })

  it('Array boolean', () => {
    const sortedArray = insertionSort(testArrayBoolean);
    for (let i = 1; i <= sortedArray.length - 1; i++) {
      expect(sortedArray[i] >= sortedArray[i - 1]).toBeTruthy();
    }
  })
});
