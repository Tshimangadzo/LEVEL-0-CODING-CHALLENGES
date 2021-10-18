function getCommonLetters(word1, word2) {
  let saveCommonLetters = [];

  for (let i = 0; i < word2.length; i++) {
    for (let j = 0; j < word1.length; j++) {
      if (word1[j].toLowerCase() === word2[i].toLowerCase()) {
        saveCommonLetters.push(word1[j].toLowerCase());
      }
    }
  }

  for (let i = 0; i < saveCommonLetters.length; i++) {
    let countLetters = 0;
    for (let j = 0; j < saveCommonLetters.length; j++) {
      if (saveCommonLetters[i] == saveCommonLetters[j]) {
        countLetters++;
      }
      if (countLetters > 1) {
        saveCommonLetters.splice(j, 1);
        j = j + 1;
      }
    }
  }

  let commonLetters = "Common letters: ";
  for (let i = 0; i < saveCommonLetters.length; i++) {
    commonLetters += saveCommonLetters[i];
    if (i < saveCommonLetters.length - 1) commonLetters += ", ";
  }

  console.log(commonLetters);
}
