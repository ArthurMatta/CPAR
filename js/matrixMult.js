const matrixMult = (matrixA, matrixB) => {
  let finalMatrix = [];

  matrixA.forEach((_, i) => {
    let line = [];

    matrixB.forEach((_, j) => {
      let sum = 0;

      for (let k = 0; k < matrixA.length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }

      line.push(sum);
    });

    finalMatrix.push(line);
  });

  return finalMatrix;
};

module.exports = matrixMult;
