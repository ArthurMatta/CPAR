const matrixMult = (matrixA, matrixB) => {
  let finalMatrix = [];

  for (let i = 0; i < matrixA.length; i++) {
    let line = [];

    for (let j = 0; j < matrixB.length; j++) {
      let sum = 0;

      for (let k = 0; k < matrixA.length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      line.push(sum);
    }
    finalMatrix.push(line);
  }

  return finalMatrix;
};

module.exports = matrixMult;
