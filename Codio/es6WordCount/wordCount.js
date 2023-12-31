let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// TODO: write a function to split a string into an array of words
const words = (string) => {
    let words = string.split(' ');
    words = words.map((item) => item.replace(',', '')).map((item) => item.replace('.', ''));
    return words;
}
// This should print the length of the words array returned
console.log(words(lorem).length);

// TODO: write a function to count the number of occurrences of each word
const wordFrequency = (refArr) => {
    let wordOcc = {};
    const simWords = [...new Set(refArr)];
    console.log(simWords);
    simWords.forEach((word) => {
    wordOcc[word] = refArr.filter((w) => w === word).length;
  });
  return wordOcc;
}
// This should print an object containing all words and their occurrences
console.log(wordFrequency(words(lorem)));