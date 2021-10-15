function getVowels(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var extractVowels = "Vowels: ";
  var trackComma = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (word[i] === vowels[j]) {
        if (trackComma === 0) {
          extractVowels += word[i];
          trackComma++;
        } else {
          extractVowels = extractVowels + ", " + word[i];
        }
      }
    }
  }
  console.log(extractVowels);
}
