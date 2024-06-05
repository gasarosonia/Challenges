# Challenges

This repository contains solutions for two coding tasks: Array Manipulation and String Transformation.

## Table of Contents
1. [Array Manipulation](#array-manipulation)
2. [String Transformation](#string-transformation)
3. [Setup Instructions](#setup-instructions)
4. [Approach](#approach)

## Array Manipulation

### Problem Statement
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target.
Return `true` if such a subarray exists, otherwise return `false`.

#### Example:
- **Input:** `arr = [4, 2, 7, 1, 9, 5], target = 17`
- **Output:** `true`
- **Explanation:** The subarray `[7, 1, 9]` sums up to 17, which is equal to the target.

### Solution
The solution uses a sliding window technique to find the contiguous subarray that sums up to the target. It runs in linear time `O(n)` and uses constant space `O(1)`.

## String Transformation

### Problem Statement
Given a string, transform it based on the following rules:
- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

#### Examples:
1. **Input:** `"Hamburger"`
   - **Output:** `"regrubmaH"`
   - **Explanation:** The length of the string is 9, which is divisible by 3. Therefore, the string is reversed.

2. **Input:** `"Pizza"`
   - **Output:** `"80 105 122 122 97"`
   - **Explanation:** The length of the string is 5, which is divisible by 5. Therefore, each character is replaced by its ASCII code.

3. **Input:** `"Chocolate Chip Cookie"`
   - **Output:** `"eikooCpihCetalocohC"`
   - **Explanation:** The length of the string is 21, which is divisible by 3. Therefore, the string is reversed.

### Solution
The solution checks the divisibility of the string length and applies the corresponding transformations. It ensures the transformations are performed in the correct order.

## Setup Instructions

To run the solutions locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gasarosonia/Challenges/tree/main.git
   cd Challenges
   ```

2. **Running the Code:**
   - **Browser Console:**
     1. Open your web browser (e.g., Chrome, Firefox, Edge).
     2. Press `F12` or right-click on the page and select "Inspect" to open the Developer Tools.
     3. Go to the "Console" tab.
     4. Copy and paste the JavaScript code from the respective file and press `Enter`.

   - **Node.js:**
     1. Ensure Node.js is installed on your machine. If not, download and install it from [nodejs.org](https://nodejs.org/).
     2. Open your terminal or command prompt.
     3. Navigate to the directory where you cloned the repository.
     4. Run the JavaScript file using Node.js:
        ```bash
        node arrayMap.js
        node stringTransform.js
        ```

## Approach

### Array Manipulation
1. **Sliding Window Technique:**
   - Use two pointers, `left` and `right`, to maintain a window of elements.
   - Adjust the window size by moving the pointers and updating the current sum.
   - If the current sum matches the target, return `true`.
   - If the current sum exceeds the target, shrink the window from the left.

### String Transformation
1. **Check Divisibility:**
   - Check if the string length is divisible by 15, 5, or 3.
   - Apply the transformations in the correct order based on the divisibility.
   - Reverse the string if divisible by 3.
   - Replace characters with ASCII codes if divisible by 5.

By following this structured approach, the solutions ensure efficiency and correctness, adhering to the expected time and space complexities.
