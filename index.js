function isPalindrome(word) {
  // Write your algorithm here
  const length = word.length;

  for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

/* 
 Add your pseudocode here
1. Create a function called isPalindrome which takes a string as an argument.
2. Initialize a variable called reversed to an empty string.
3. Loop through the string starting from the last character to the first character.
4. In each iteration of the loop, add the character to the reversed variable.
5. Compare the original string with the reversed string.
6. If they are the same, return true. Otherwise, return false.

*/

/*
  Add written explanation of your solution here
  The solution for the isPalindrome function first declares a variable reversed which is initialized to an empty string. It then loops through each character of the input string from the last character to the first using a for loop with a decrementing counter variable i. Within the loop, it appends each character to the reversed variable. Finally, it checks whether the reversed string is the same as the input string, and returns true if they are equal, indicating that the input string is a palindrome, or false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));
}

module.exports = isPalindrome;
