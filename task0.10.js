function getCommonLetters(word1, word2) {
  var commonLetters = "Common letters: ";
  var trackCommas = 0;
  for (let i = 0; i < word2.length; i++) {
    for (let j = 0; j < word1.length; j++) {
      if (word1[j].toLowerCase() === word2[i].toLowerCase()) {
        if (trackCommas === 0) {
          commonLetters += word1[j].toLowerCase();
          trackCommas++;
        } else {
          commonLetters = commonLetters + ", " + word1[j].toLowerCase();
        }
      }
    }
  }
  console.log(commonLetters);
}
