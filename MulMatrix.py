def stdMul(size):
    print('Standard Multiplication')
    
    ma = [[j+1 for j in range(size)] for i in range(size)]
    
    print(ma)
    
    pass

def lineMul(size):
    print('Line Multiplication')
    pass

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
 
    if option == 1:
        stdMul(size)
        break
    else:
        lineMul(size)
        break

