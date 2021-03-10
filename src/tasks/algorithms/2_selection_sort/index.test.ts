import { selectionSort } from './selectionSort';
import { testArrayString, testArrayNumber, testArrayBoolean } from '../../helpers';

describe('selection sort test cases', () => {
  it('Array string', () => {
    const sortedArray = selectionSort(testArrayString);
    for (let i = 1; i <= sortedArray.length - 1; i++) {
      expect(sortedArray[i] >= sortedArray[i - 1]).toBeTruthy();
    }
  })

  it('Array number', () => {
    const sortedArray = selectionSort(testArrayNumber);
    for (let i = 1; i <= sortedArray.length - 1; i++) {
      expect(sortedArray[i] >= sortedArray[i - 1]).toBeTruthy();
    }
  })

  it('Array boolean', () => {
    const sortedArray = selectionSort(testArrayBoolean);
    for (let i = 1; i <= sortedArray.length - 1; i++) {
      expect(sortedArray[i] >= sortedArray[i - 1]).toBeTruthy();
    }
  })
});
