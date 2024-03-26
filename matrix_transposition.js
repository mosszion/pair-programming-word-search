// Pair-Programming : There is No Spoon (Mussie && Patrick)


//Starter Code

const transpose = function (matrix) {
  //return false for empty array
  if(matrix.length === 0){
    return [];
  }
  // read matrix
   const newArr =[]; //Intialize new empty array
   for(let r = 0; r < matrix[0].length; r++) {  //loop through the number of the frist array
    newArr.push([]);  //push equal number of rows  into the new array
   }

  for (let r = 0; r < matrix.length; r++) {    //going through each element of the rows
    for (let c = 0; c < matrix[0].length; c++) { // going through each element of the colomuns
      newArr[c][r] = matrix[r][c];   //reverse the values of matrix and save them into the new empty array
    }
  }

  return newArr;   //return the new array
};

// // Do not edit this function.
// const printMatrix = (matrix) => {
//   for (const row of matrix) {
//     for (const el of row) {
//       process.stdout.write(el + " ");
//     }
//     process.stdout.write("\n");
//   }
// };


// printMatrix(
//   transpose([
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//   ])
// );

// console.log("----");

// printMatrix(
//   transpose([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );

// console.log("----");

// printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));




module.exports = transpose;