function getVowels(word) {
  let vowels = ["a", "e", "i", "o", "u"];

  word = word.toLowerCase();

  let holdVowels = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (word[i] === vowels[j]) {
        holdVowels.push(vowels[j]);
      }
    }
  }

  for (let i = 0; i < holdVowels.length; i++) {
    let countVowels = 0;
    for (let j = 0; j < holdVowels.length; j++) {
      if (holdVowels[i] == holdVowels[j]) {
        countVowels++;
      }
      if (countVowels > 1) {
        holdVowels.splice(j, 1);
        j = j + 1;
      }
    }
  }

  let vowelsToString = "Vowels: ";
  for (let i = 0; i < holdVowels.length; i++) {
    vowelsToString += holdVowels[i];
    if (i < holdVowels.length - 1) vowelsToString += ", ";
  }

  console.log(vowelsToString);
}
