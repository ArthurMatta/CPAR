#!/usr/bin/env python
# coding: utf-8

# In[1]:


import random
import time
import numpy as np


# In[19]:


def stdMul(A, B):
    """
    Multiplies two given matrixes.
    """
    C = createZeroMatrix(size)
    
    start = time.perf_counter()
    for i in range(len(A)):
        for j in range(len(B[0])):
            for k in range(len(B)):
                C[i][j] += A[i][k] * B[k][j]
    end = time.perf_counter()
    
    print("Elapsed Time: {elapsed:f} s".format(elapsed=(end-start)))
    
    return C


# In[9]:


def lineMul(A, B):
    """
    Multiplies two given matrixes by multiplying one element of the first matrix by the correspondent line of the second matrix
    """
    size = len(A)
    C = createZeroMatrix(size)
    
    start = time.perf_counter()
    for i in range(size):
        for j in range(size):
            C[i] += A[i][j] * B[j]
    end = time.perf_counter()
    
    print("Elapsed Time: {elapsed:f} s".format(elapsed=(end-start)))
    
    return C


# In[10]:


def blockMul(A, B, block_size=128):
    """
    Multiplies two given matrixes breaking them into small blocks of size block_size
    """
    size = len(A)
    C = createZeroMatrix(size)
    
    start = time.perf_counter()
    for i0 in range(0, size, block_size):
        for j0 in range(0, size, block_size):
            for k0 in range(0, size, block_size):
                for i in range(i0, min(i0 + block_size, size)):
                    for j in range(j0, min(j0 + block_size, size)):
                        for k in range(k0, min(k0 + block_size, size)):
                            C[i][j] += A[i][k] * B[k][j]
    end = time.perf_counter()
    
    print("Elapsed Time: {elapsed:f} s".format(elapsed=(end-start)))
    
    return C


# In[26]:


def createRandomMatrix(size, lower, higher):
    """
    Returns a matrix of size 'size' with random values in [lower, higher).
    """
    return np.random.randint(lower, higher, (size, size))

def createZeroMatrix(size):
    """
    Returns a zero matrix of size 'size'.
    """
    return np.zeros(shape=(size, size))


# In[27]:


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
            string += "{value:05.0f}".format(value=matrix[i][j])
            
        string += " |\n"
        
    print(string)


# In[30]:


while True:
    print("Matrix multiplication")
    print("1. Standard multiplication")
    print("2. Line multiplication")
    print("3. Block multiplication")

    option = int(input("Selection? "))
  
    if option not in [0,1,2, 3]:
        print('\nInvalid value. Value must be 1, 2 or 3; or 0 to quit\n')
        continue
    elif option == 0:
        break
        
    size = int(input('Dimension? '))
    
    if size <= 0:
        print('Invalid dimension.\n')
        continue
    
    ma = createRandomMatrix(size, 0, 101)
    mb = createRandomMatrix(size, 0, 101)
    
    if option == 1:
        print("Standard Multiplication")
        mc = stdMul(ma, mb)
        break
    elif option == 2:
        print("Line Multiplication")
        mc = lineMul(ma, mb)
        break
    else:
        print("Block Multiplication")
        block_size = int(input("Block size: "))
        mc = blockMul(ma, mb, block_size)
        break
        


# In[ ]:





# In[ ]:




