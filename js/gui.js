const matrixMult = require("./matrixMult");
const matrixGenerator = require("./generator");
const matrixLineMult = require("./matrixMultLine");

/* throw error if not receive matrix size in cmd argument */
if (process.argv.length !== 4) {
  console.log("Usage: node ./gui [mode] [size]\n");
  console.log(" Mode: 0 - Matrix Multiplication");
  console.log("       1 - Matrix Line Multiplication\n");
  console.log(" Size: matrix size (ex: 1000)");

  process.exit(-1);
}

const mode = process.argv[2];
const size = process.argv[3];

/* verify variables */
if (mode == null) {
  console.error("Mode must be 0 - matrix mult, 1- matrix line mult.");
  process.exit(-1);
}

if (size == null) {
  console.error("Size must be a integer number.");
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
console.log(
  `Started multiplicating matrix in ${mode == 0 ? "normal" : "line"} mode ...\n`
);

const startTime = process.hrtime.bigint();

/* multiplicate matrix */
if (mode == 0) matrixMult(matrixA, matrixB);
else matrixLineMult(matrixA, matrixB);

/* get ending time */
const endTime = process.hrtime.bigint();

/* show performance results in nanoseconds */
const timeDiff = endTime - startTime;

console.log(`Matrix mult time: ${timeDiff.toString() / 1e9} seconds.`);
