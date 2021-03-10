import { bubbleSort } from './bubbleSort';
import { testArrayString, testArrayNumber, testArrayBoolean } from '../../helpers';

describe('bubble sort test cases', () => {
  it('Array string', () => {
    const sortedArray = bubbleSort(testArrayString);
    for (let i = 1; i <= sortedArray.length - 1; i++) {
      expect(sortedArray[i] >= sortedArray[i - 1]).toBeTruthy();
    }
  })

  it('Array number', () => {
    const sortedArray = bubbleSort(testArrayNumber);
    for (let i = 1; i <= sortedArray.length - 1; i++) {
      expect(sortedArray[i] >= sortedArray[i - 1]).toBeTruthy();
    }
  })

  it('Array boolean', () => {
    const sortedArray = bubbleSort(testArrayBoolean);
    for (let i = 1; i <= sortedArray.length - 1; i++) {
      expect(sortedArray[i] >= sortedArray[i - 1]).toBeTruthy();
    }
  })
});