function isPalindrome(word) {

  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  
  const reversedWord = cleanedWord.split('').reverse().join('');
  
  return cleanedWord === reversedWord;
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
