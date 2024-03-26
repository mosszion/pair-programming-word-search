const matrix = [
 ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],    //07,16,25, 34,43,52,61,70
 ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
 ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
 ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
 ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
 ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
 ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
 ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
 
]

const diagonal = [];

for( let i = 0 ; i < matrix.length  ; i++) {

 for (let j = (matrix[i].length - 1) ; j >= 0; j--) { //matrix[0].lenght = 8
  if(i == j) {
    diagonal.push(matrix[i][j]);

  }
 }
}

console.log(diagonal);
const diagonalJoin = diagonal.join('')
  console.log(diagonalJoin)
  