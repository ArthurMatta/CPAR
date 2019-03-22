const matrixGenerator = size => {
  let matrix = [];

  for (let i = 0; i < size; i++) {
    let line = [];

    for (let j = 0; j < size; j++) {
      const randomNumber = Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
      line.push(randomNumber);
    }

    matrix.push(line);
  }

  return matrix;
};

module.exports = matrixGenerator;
