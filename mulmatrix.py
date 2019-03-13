#!/usr/bin/env python
# coding: utf-8

# In[123]:


import random
import time
import numpy as np


# In[124]:


def stdMul(A, B):
    """
    Multiplies two given matrixes and measure time taken to multiply them.
    """
    start = time.perf_counter()
    C = A @ B
    end = time.perf_counter()
    
    print("Elapsed Time: {elapsed:f} s".format(elapsed=(end-start)))
    
    return C


# In[125]:


def lineMul(matrixes):
    print('Line Multiplication')
    pass


# In[129]:


def createRandomMatrix(size):
    """
    Returns a matrix of size 'size' with random values from 0 to 100.
    """
    return np.random.randint(0,101,(size, size))

def createZeroMatrix(size):
    """
    Returns a zero matrix of size 'size'.
    """
    return numpy.zeros(shape=(size, size))


# In[127]:


def printMatrix(matrix):
    """
    Print a matrix in a user-friendly way.
    """
    size = len(matrix)
    string = ""
    
    for i in range(size):
        string += "|"
        for j in range(size):
            string += " "
            string += "{value:05d}".format(value=matrix[i][j])
            
        string += " |\n"
        
    print(string)


# In[128]:


while True:
    print("Matrix multiplication")
    print("1. Standard multiplication")
    print("2. Line multiplication")

    option = int(input("Selection? "))
  
    if option not in [0,1,2]:
        print('\nInvalid value. Value must be 1 or 2, or 0 to quit\n')
        continue
    elif option == 0:
        break
        
    size = int(input('Dimension? '))
    
    if size <= 0:
        print('Invalid dimension.\n')
        continue
    
    ma = createRandomMatrix(size)
    mb = createRandomMatrix(size)
    
    if option == 1:
        print("Standard Multiplication")
        mc = stdMul(ma, mb)
        break
    else:
        print("Line Multiplication")
#         lineMul(matrixes)
        break


# In[ ]:





# In[ ]:




