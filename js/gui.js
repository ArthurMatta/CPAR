const matrixMult = require("./multMatrix");
const matrixGenerator = require("./generator");
const matrixLineMult = require("./lineMultMatrix");
const blockLineMultMatrix = require("./blockLineMultMatrix");

const mode = process.argv[2];
const size = process.argv[3];
const blockSize = process.argv[4];

/* throw error if not receive matrix size in cmd argument */
if (process.argv.length !== 4 && (process.argv.length !== 5 && mode == "2")) {
  console.log(
    "Usage: node ./gui [mode] [size] [blockSize(block multiplication only)] \n"
  );
  console.log(" Mode: 0 - Matrix Multiplication");
  console.log("       1 - Matrix Line Multiplication\n");
  console.log("       2 - Matrix Block Line Multiplication\n");
  console.log(" Size: matrix size (ex: 1000)");

  process.exit(-1);
}

/* verify variables */
if (mode == null) {
  console.error(
    "Mode must be 0 - matrix mult, 1- matrix line mult, 2- matrix block line mult."
  );
  process.exit(-1);
}

if (size == null) {
  console.error("Size must be a integer number.");
  process.exit(-1);
}

// verify matrix size

if (size % 2 !== 0) {
  console.error("Matrix must be square.");
  process.exit(-1);
}

/* logs */
console.log(`Generating random ${size}x${size} matrix...\n`);
const matrixGeneratorStartingTime = process.hrtime.bigint();

/* generate matrixes */
const matrixA = matrixGenerator(size);
const matrixB = matrixGenerator(size);

const matrixGeneratorEndingTime = process.hrtime.bigint();

/* show matrix generation performance results in nanoseconds */
console.log(
  `Matrix generation time: ${(
    matrixGeneratorEndingTime - matrixGeneratorStartingTime
  ).toString() / 1e9} seconds.\n`
);

/* get starting time */
const startTime = process.hrtime.bigint();

switch (mode) {
  case "0":
    console.log(`Started multiplicating matrix in normal mode ...\n`);
    matrixMult(matrixA, matrixB);
    break;
  case "1":
    console.log(`Started multiplicating matrix in line mode ...\n`);
    matrixLineMult(matrixA, matrixB);
    break;
  case "2":
    if (blockSize == null) {
      console.error("Blocksize not specified.\n");
      process.exit(-1);
    }

    const finalBlockSize =
      blockSize > matrixA.length ? matrixA.length : blockSize;

    console.log(
      `Started multiplicating matrix in block line mode with blocksize ${finalBlockSize}...\n`
    );

    blockLineMultMatrix(matrixA, matrixB, finalBlockSize);
    break;
  default:
    console.error("No such mode (0-2).");
    process.exit(-1);
    break;
}

/* get ending time */
const endTime = process.hrtime.bigint();

/* show performance results in nanoseconds */
const timeDiff = endTime - startTime;

console.log(`Matrix mult time: ${timeDiff.toString() / 1e9} seconds.`);
