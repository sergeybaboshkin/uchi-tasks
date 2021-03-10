import { binarySearch } from './binarySearch';
import { testSortedArrayBoolean, testSortedArrayNumber, testSortedArrayString } from '../../helpers';

describe('binary search test cases', () => {
  it('Array string', () => {
    const searchIndex = binarySearch(testSortedArrayString.array, testSortedArrayString.value);
    expect(searchIndex === testSortedArrayString.index).toBeTruthy();
  })

  it('Array number', () => {
    const searchIndex = binarySearch(testSortedArrayNumber.array, testSortedArrayNumber.value);
    expect(searchIndex === testSortedArrayNumber.index).toBeTruthy();
  })

  it('Array boolean', () => {
    const searchIndex = binarySearch(testSortedArrayBoolean.array, testSortedArrayBoolean.value);
    expect(searchIndex === testSortedArrayBoolean.index).toBeTruthy();
  })
});
