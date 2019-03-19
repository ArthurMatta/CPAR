const multMatrixLine = (m1, m2) => {
  let finalMatrix = [];

  console.log(m1);
  console.log(m2);

  m1.forEach((line1, index) => {
    let line = new Array(m1.length);

    line1.forEach(element1 => {
      // TODO: inicializar matriz com numeros 0
      line[index] = 0;
      m2[index].forEach((element2, index2) => {
        const value = element1 * element2;
        line[index2] += value;
      });
    });

    console.log(line);
  });

  console.log(finalMatrix);

  return finalMatrix;
};

module.exports = multMatrixLine;
