module.exports = function towelSort (matrix) {
   return matrix ? matrix.flatMap((e, i) => i % 2 === 0 ? e : e.reverse()) : [];
}
