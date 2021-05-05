const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// to pass the learn requirment - I had to remove the array modifier and put the return as purely tutorials.
// this version is more robust and can capitalise other arrays not just the tutorials one presented here.

const titleCased = (array) => { // to pass learn had to use no value

  //returns the map of the whole array. Removing need to have a FOR loop.
  //the arrow function then invokes a variable which = each line of array and splits to individual words
  //placing in a new array.
  
  return array.map( line => {      // **** to pass learn had to use tutorials.map ****

    const splitInputArray = line.split(" ");

  //a second variable is invoked which = the map of the new array of words,
  //it then takes first letter of word and puts toUpperCase and holds the rest of the word back to be joined back

    const capLetters = splitInputArray.map( word => 
           word[0].toUpperCase() + word.substring(1) );

  //a third variable then joins the capitalised word to remainder  by using secondVariable.join 

    const capTitles = capLetters.join(" ");

  //then returns updated array.  

    return capTitles;        
  });
}
console.table(titleCased(tutorials))
console.log(tutorials.length)