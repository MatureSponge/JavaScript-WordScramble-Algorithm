function scrambleWord(properWord) {
  //create an array containing each character of the word 
  let wordArray = [];
    for (let i = 0; i < properWord.length; i++) {
        wordArray.push(properWord[i]);
    }

  //loop through each INDEX of the array you just created
  for (let i = 0; i < wordArray.length; i++) {
      //assign a random partner index to the current index
      let conversionFactor = Math.floor(Math.random() * (wordArray.length - 1));
      let partnerIndex = (i + conversionFactor) % wordArray.length;

      //swap their places
      let stringStore = wordArray[i];
      wordArray[i] = wordArray[partnerIndex]; 
      wordArray[partnerIndex] = stringStore; 
  }

  //after partner-swapping everything, convert the array to a string
  let scrambledString = "";
  for (let i = 0; i < wordArray.length; i++) {
      scrambledString += wordArray[i];
  }

  //just in case the scrambled letters are somehow equal to the original string, rerun the function. 
  if (scrambledString === properWord) {
      scrambledString = scrambleWord(properWord);
  }

  return scrambledString;
};
