/**
 * Transforms the input string based on its length.
 * - If the length is divisible by 15: reverse the string and replace each character with its ASCII code.
 * - If the length is divisible by 3: reverse the string.
 * - If the length is divisible by 5: replace each character with its ASCII code.
 * - Otherwise, return the original string.
 *
 * @param {string} input - The input string to be transformed.
 * @returns {string} - The transformed string.
 */
function transformString(input) {
    const length = input.length;

    // Check if the length is divisible by 15
    if (length % 15 === 0) {
        // Reverse the string and replace each character with its ASCII code
        return input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }
    
    // Check if the length is divisible by 3
    if (length % 3 === 0) {
        // Reverse the string
        return input.split('').reverse().join('');
    }
    
    // Check if the length is divisible by 5
    if (length % 5 === 0) {
        // Replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    // If none of the above conditions are met, return the original string
    return input;
}

// Example usage
console.log(transformString("Hamburger"));           // Output: "regrubmaH"
console.log(transformString("Pizza"));               // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));// Output: "101 105 107 111 111 67 112 105 104 67 101 116 97 108 111 99 111 104 67"
