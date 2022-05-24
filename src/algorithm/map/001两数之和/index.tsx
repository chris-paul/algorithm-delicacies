const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map();
  for (let index = 0; index < nums.length; index += 1) {
    const item = nums[index];
    if (map.has(item)) return [map.get(item), index];
    const subtraction = target - item;
    map.set(subtraction, index);
  }
  return [];
};

export default twoSum;
