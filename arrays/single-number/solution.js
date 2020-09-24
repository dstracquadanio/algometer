const singleNumber = (nums) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = 1;
    else map[nums[i]]++;
  }

  for (let num in map) {
    if (map[num] === 1) return num;
  }
};
