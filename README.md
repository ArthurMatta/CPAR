# CPAR
Repository for the Parallel Computer couse in FEUP

### CLONING THIS REPOSITORY
When cloning this repository add '--recurse-submodules' to initialize and update papi submodule.<br>
git clone --recurse-submodules \<url\>

### RUNNING THE CPP FILE
g++ -O2 mulmatrix.cpp -o mulmatrix -lpapi<br>
./mulmatrix