const isMonotonic = (arr) => {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) decreasing = false;
    if (arr[i + 1] < arr[i]) increasing = false;
  }

  return increasing || decreasing;
};
