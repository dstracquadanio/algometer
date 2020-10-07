const reverseString = (string) => {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    let leftStr = string[left];
    string[left++] = string[right];
    string[right--] = leftStr;
  }
};
