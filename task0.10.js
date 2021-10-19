function getCommonLetters(word1, word2) {
  let saveCommonLetters = [];

  for (let i = 0; i < word2.length; i++) {
    for (let j = 0; j < word1.length; j++) {
      if (word1[j].toLowerCase() === word2[i].toLowerCase()) {
        saveCommonLetters.push(word1[j].toLowerCase());
      }
    }
  }
  saveCommonLetters = [...new Set(saveCommonLetters)];

  let commonLetters = "Common letters: ";
  for (let i = 0; i < saveCommonLetters.length; i++) {
    commonLetters += saveCommonLetters[i];
    if (i < saveCommonLetters.length - 1) commonLetters += ", ";
  }

  console.log(commonLetters);
}
