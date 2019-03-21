const blockLineMultMatrix = (m1, m2, blocksize) => {
  let block1 = [];
  let block2 = [];

  console.log(m1);
  console.log(m2);

  for (let i = 0; i < blocksize; i++) {
    let line = [];
    let line2 = [];
    for (let j = 0; j < blocksize; j++) {
      line.push(m1[i][j]);
      line2.push(m2[i][j]);
    }
    block1.push(line);
    block2.push(line2);
  }

  console.log("Calculated \n");
  console.log(block1);
  console.log(block2);

  return {
    m1: block1,
    m2: block2
  };
};

module.exports = blockLineMultMatrix;
