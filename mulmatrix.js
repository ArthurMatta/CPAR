const NS_PER_SEC = 1e9;

const matrixMult = (matrixA, matrixB) => {
  let finalMatrix = [];

  matrixA.forEach(lineA => {
    let newLine = [];

    matrixB.forEach((lineB, indexB) => {
      let newElement = 0;

      lineB.forEach(elementB => {
        const elementA = lineA[indexB];

        newElement += elementA * elementB;
      });

      newLine.push(newElement);
    });

    finalMatrix.push(newLine);
  });

  return finalMatrix;
};

const matrixA = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
const matrixB = [[2, 2, 2], [2, 2, 2], [2, 2, 2]];

const startTime = process.hrtime();

const result = matrixMult(matrixA, matrixB);

const endTime = process.hrtime(startTime);

console.log(
  `Matrix mult time: ${endTime[0] * NS_PER_SEC + endTime[1]} nanoseconds.`
);

console.log(result);
