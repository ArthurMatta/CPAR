const matrixMult = (matrixA, matrixB) => {
  let finalMatrix = [];

  for (let i = 0; i < matrixA.length; i++) {
    const lineA = matrixA[i];
    let newLine = [];

    for (let j = 0; j < matrixB.length; j++) {
      const lineB = matrixB[j];

      let newElement = 0;
      for (let k = 0; k < lineB.length; k++) {
        const elementA = lineA[j];
        const elementB = lineB[k];
        newElement += elementA * elementB;
      }
      newLine.push(newElement);
    }

    finalMatrix.push(newLine);
  }

  return finalMatrix;
};

const matrixA = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
const matrixB = [[2, 2, 2], [2, 2, 2], [2, 2, 2]];

console.log("Started counting time ", new Date().getMilliseconds());

const result = matrixMult(matrixA, matrixB);

console.log("Ended counting time ", new Date().getMilliseconds());

console.log(result);
