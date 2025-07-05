import type { IValue } from './values';

// Generate all unique pairs
export function getPairs(arr: IValue[]) {
  const pairs: [IValue, IValue][] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}
