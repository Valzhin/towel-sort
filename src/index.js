
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
    if (!matrix || matrix == 0) {return [];}
    else if (matrix[matrix.length - 1] == matrix[3]){
        matrix[3].sort((a, b) => b - a);
    matrix[1].sort((a, b) => b - a);
    return matrix.flat(Infinity);
    } else {
        matrix[1].sort((a, b) => b - a);
    return matrix.flat(Infinity);
    }
}
