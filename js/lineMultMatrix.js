const multMatrixLine = (m1, m2) => {
  // generate empty matrix
  let matrix = Array(m1.length).fill(Array(m2.length).fill(0));

  // calculate matrix
  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m2.length; j++) {
      for (let k = 0; k < m2.length; k++) {
        matrix[i][k] += m1[i][j] * m2[j][k];
      }
    }
  }

  return matrix;
};

module.exports = multMatrixLine;
