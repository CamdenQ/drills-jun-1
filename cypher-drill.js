/* eslint-disable no-console */
/* eslint-disable strict */
let message = 'craft block argon meter bells brown croon droop';

const cypher = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
};

console.log(cypher.a)


function decode(word) {
  if (word[0] in cypher === true) {
    return word[cypher[word[0]]];
  } else {
    return ' ';
  }
}

function decodeWords(inputMessage) {
  let words = inputMessage.split(' ');
  let finalMessage = '';
  for (let i=0; i<words.length; i++) {
    finalMessage += decode(words[i]);
  }
  return finalMessage;
}

console.log(decodeWords(message));

console.log("Hello")