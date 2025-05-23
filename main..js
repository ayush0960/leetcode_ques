// Find max sum of subarray of size k
function maxSumSubarray(arr, k) {
  let maxSum = 0, windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

// Example usage:
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumSubarray(arr, k)); // Output: 9