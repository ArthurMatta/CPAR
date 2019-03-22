const blockLineMultMatrix = (m1, m2, bsize) => {
  const size = m1.length;

  let matrix = Array(size).fill(Array(size).fill(0));

  for (i1 = 0; i1 < size; i1 += bsize) {
    for (j1 = 0; j1 < size; j1 += bsize) {
      for (k1 = 0; k1 < size; k1 += bsize) {
        for (i = parseInt(i1); i < i1 + bsize && i < size; i++) {
          for (j = parseInt(j1); j < j1 + bsize && j < size; j++) {
            for (k = parseInt(k1); k < k1 + bsize && k < size; k++) {
              matrix[i][k] += m1[i][j] * m2[j][k];
            }
          }
        }
      }
    }
  }

  return matrix;
};

module.exports = blockLineMultMatrix;
