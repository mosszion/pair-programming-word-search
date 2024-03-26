//Pair programming-Wordseach done by Mussie,Patrick and Monica.


//import transpose function
const transpose = require("./matrix_transposition");

const wordSearch2 = (letters, word) => { 
  //return false for empty array
  if (letters.length === 0) {
    return false;
  }
  //diagonal word search
  const diagonal = [];
  for( let i = 0 ; i < letters.length  ; i++) {
    for (let j = (letters[i].length - 1) ; j >= 0; j--) { 
      if(i == j) {
         diagonal.push(letters[i][j]);
        }
  }
}
  const diagonalJoin = diagonal.join('');
  
  //horizontal word search
  const horizontalJoin = letters.map(ls => ls.join(''))

  //vertical word search
  const vletters = transpose(letters);
  const verticalJoin = vletters.map(ls => ls.join(''))


  //going through each of the cases
    
  if (diagonalJoin.includes(word)) return true

  for (l of horizontalJoin) {
      if (l.includes(word)) return true
      
  }
  for (x of verticalJoin) {
      if (x.includes(word)) return true
      
  }
 
  return false;
};



module.exports = wordSearch2