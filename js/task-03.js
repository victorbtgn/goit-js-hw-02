const findLongestWord = function(string) {
  string = string.split(" ");
  let lengthWord = 0;
  let longestWord;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i].length > lengthWord) {
      lengthWord = string[i].length;
      longestWord = string[i];
    }
  }

  return longestWord;
};

console.log(
  findLongestWord("The quick brown fox jumped over sdfsfgsgfg the lazy dog")
); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
