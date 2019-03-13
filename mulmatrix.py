#!/usr/bin/env python
# coding: utf-8

# In[1]:


import random
import time


# In[14]:


def stdMul(ma, mb, result):
    """
    Multiplies two given matrixes and measure time taken to multiply them.
    """
    size = len(ma)
    start = 0
    end = 0

    start = time.process_time()
    for i in range(size):
        for j in range(size):
            for k in range(size):
                result[i][j] += ma[i][k] * mb[k][j]
    end = time.process_time()
    
    print("Elapsed Time: {elapsed:.5f} s".format(elapsed=(end-start)))


# In[8]:


def lineMul(matrixes):
    print('Line Multiplication')
    pass


# In[9]:


def createRandomMatrix(size):
    """
    Returns a matrix of size 'size' filled with random integer numbers from 0 to 100.
    """
    matrix = [[random.randint(0, 100) for j in range(size)] for i in range(size)]
    
    return matrix

def createZeroMatrix(size):
    """
    Returns a matrix of size 'size' filled with random integer numbers from 0 to 100.
    """
    matrix = [[0 for j in range(size)] for i in range(size)]
    
    return matrix


# In[10]:


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
            string += "{value:03d}".format(value=matrix[i][j])
            
        string += " |\n"
        
    print(string)


# In[15]:


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
    mc = createZeroMatrix(size)
 
    if option == 1:
        print("Standard Multiplication")
        stdMul(ma, mb, mc)
        break
    else:
        print("Line Multiplication")
#         lineMul(matrixes)
        break


# In[ ]:




