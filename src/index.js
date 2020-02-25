
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix=[];
  (matrix != null) ? matrix.map((item,i) => {
    newMatrix = (i % 2 == 0) ? newMatrix.concat(item) : newMatrix.concat(item.reverse()); 
  }):[];
  return newMatrix;
}
