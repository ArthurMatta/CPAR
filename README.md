# CPAR

Repository for the Parallel Computer couse in FEUP

### CLONING THIS REPOSITORY

When cloning this repository add '--recurse-submodules' to initialize and update papi submodule.<br>
git clone --recurse-submodules \<url\>

### RUNNING THE JS FILE

To run the algorithms in javascript, you must install node.js in your computer.

Steps:

1 - Go to the js folder

`cd js`

2 - Run the gui.js file with node

`node ./gui.js`

3 - It should print the appropriated usage of the program.

```
Usage: node ./gui [mode] [size] [blockSize(block multiplication only)]

Mode:
0 - Matrix Multiplication
1 - Matrix Line Multiplication
2 - Matrix Block Line Multiplication Size: matrix size (ex: 1000)
```


### BEFORE RUNNING THE CPP FILE

Make sure that the file /proc/sys/kernel/perf_event_paranoid has value -1

### RUNNING THE CPP FILE

```
g++ -O2 mulmatrix.cpp -o mulmatrix -lpapi
./mulmatrix
```
