function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Reverse the cleaned string
  const reversedStr = cleanStr.split('').reverse().join('');
  // Check if the cleaned string is equal to its reverse
  return cleanStr === reversedStr;
}

// Test cases
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));  // false
console.log(isPalindrome("level"));  // true
console.log(isPalindrome("Was it a car or a cat I saw?"));  // true
