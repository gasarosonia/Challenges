/**
 * Determines if there is a contiguous subarray within the given array `arr` that sums to `target`.
 * 
 * @param {number[]} arr - The input array of integers.
 * @param {number} target - The target sum to find within a contiguous subarray.
 * @returns {boolean} - Returns true if a contiguous subarray sums to the target, otherwise false.
 */
function hasContiguousSubarray(arr, target) {
    // Initialize the left pointer and the current sum
    let left = 0;
    let currentSum = 0;

    // Iterate through the array using the right pointer
    for (let right = 0; right < arr.length; right++) {
        // Add the current element to the current sum
        currentSum += arr[right];

        // If the current sum exceeds the target, move the left pointer to the right
        // and subtract the elements from the current sum until it is less than or equal to the target
        while (currentSum > target && left <= right) {
            currentSum -= arr[left];
            left++;
        }

        // If the current sum equals the target, return true
        if (currentSum === target) {
            return true;
        }
    }

    // If no subarray is found that sums to the target, return false
    return false;
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarray(arr, target));  // Output: true
