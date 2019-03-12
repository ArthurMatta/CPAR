const matrixMult = require("./matrixMult");
const matrixGenerator = require("./generator");

/* throw error if not receive matrix size in cmd argument */
const size = process.argv[2];
if (process.argv.length !== 3 || size == null)
  throw new Error("usage: node ./gui [size (number) ]");

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
console.log("Started multiplicating matrix...\n");

const startTime = process.hrtime.bigint();

/* multiplicate matrix */
matrixMult(matrixA, matrixB);

/* get ending time */
const endTime = process.hrtime.bigint();

/* show performance results in nanoseconds */
const timeDiff = endTime - startTime;

console.log(`Matrix mult time: ${timeDiff.toString() / 1e9} seconds.`);
