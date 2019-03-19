const multMatrixLine = (m1, m2) => {
  let finalMatrix = [];

  m1.forEach(lineM1 => {
    let line = [];

    lineM1.forEach(elementLineM1 => {
      let value = 0;

      m2.forEach((lineM2, indexLineM2) => {
        // M1 = A1 * A2 + A1 * B2
        value += elementLineM1 * lineM2[indexLineM2];
      });

      line.push(value);
    });

    finalMatrix.push(line);
  });

  return finalMatrix;
};

module.exports = multMatrixLine;
