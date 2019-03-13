
# coding: utf-8

# In[1]:


import random
import time


# In[7]:


def stdMul(matrixes):
    """
    Multiplies two given matrixes and measure time taken to multiply them.
    """
    mc = [[0 for j in range(size)] for i in range(size)]
    start = 0
    end = 0

    start = time.perf_counter_ns()
    for i in range(size):
        for j in range(size):
            for k in range(size):
                mc[i][j] += matrixes['A'][i][k] * matrixes['B'][k][j]
    end = time.perf_counter_ns() 
    
#     print("Result Matrix")
#     printMatrix(mc)
    
    print("Elapsed Time: {elapsed:.0f} ns".format(elapsed=(end-start)))


# In[3]:


def lineMul(matrixes):
    print('Line Multiplication')
    pass


# In[4]:


def MatrixMaker(size):
    """
    Returns a dict with square matrixes A and B of size 'size' filled with random integer numbers from 0 to size.
    """
    ma = [[random.randint(0, size) for j in range(size)] for i in range(size)]
    mb = [[random.randint(0, size) for j in range(size)] for i in range(size)]
    
    
    mb.reverse()
    
    return dict(zip(['A', 'B'], [ma, mb]))


# In[5]:


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


# In[8]:


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
        
    print('\n')
 
    size = int(input('Dimension? '))
    
    if size <= 0:
        print('Invalid dimension.\n')
        continue
    
    matrixes = MatrixMaker(size)
    
#     for i in matrixes.items():
#         print("Matrix " + i[0])
#         printMatrix(i[1])
 
    if option == 1:
        print("Standard Multiplication")
        stdMul(matrixes)
        break
    else:
        print("Line Multiplication")
        lineMul(matrixes)
        break

