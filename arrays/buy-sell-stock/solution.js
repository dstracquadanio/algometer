// Brute Force Solution
// Time Complexity - O(n^2)
// Space Complexity - O(1)

const maxProfit = (stocks) => {
  let maxProfit = 0;
  for (let i = 0; i < stocks.length; i++) {
    for (let j = i + 1; j < stocks.length - 1; j++) {
      let profit = stocks[j] - stocks[i];
      if (profit > maxProfit) maxProfit = profit;
    }
  }
  return maxProfit;
};

// Optimized Solution
// Time - O(n)
// Space - O(1)
const maxProfit = (stocks) => {
  let min = stocks[0];
  let max = 0;

  for (let i = 0; i < stocks.length; i++) {
    min = Math.min(min, stocks[i]);
    max = Math.max(max, stocks[i] - min);
  }
  return max;
};
