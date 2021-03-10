export const testArrayNumber: number[] = [200, 4, 6, 12, 5, 12, 100, 76, 1];
export const testArrayString: string[] = [
  "ab",
  "a",
  "new",
  "class",
  "void",
  "ww",
];
export const testArrayBoolean: boolean[] = [false, true, false, true, true];
export const testSortedArrayNumber: {
  array: number[];
  value: number;
  index: number;
} = { array: [1, 4, 5, 6, 12, 12, 76, 100, 200], value: 76, index: 6 };
export const testSortedArrayString: {
  array: string[];
  value: string;
  index: number;
} = {
  array: ["a", "ab", "class", "new", "void", "ww"],
  value: "new",
  index: 3,
};
export const testSortedArrayBoolean: {
  array: boolean[];
  value: boolean;
  index: number;
} = { array: [false, true, false], value: true, index: 1 };
