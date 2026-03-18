'''
whlie condition :
     body of while loop

==================================
control_variable initialized

while condition :
    # body of while loop
    # update_control_variable
'''
#wap to take two input from the user and add them and display result...then again ask the user if he or she want to continue if user said no terminate the loop and if user said yes continue the same process.
choice = "yes"
while choice == "yes" :     #loop terminate if condition is false
    n1 = int(input("enter n1 :"))
    n2 = int(input("enter n2 :"))
    print("sum",n1+n2)
    choice = input("do you want to continue type 'yes' otherwise any other character:")


#digit extraction from a number questions - by using loop
#wap to find whether a number is armstrong number or not........
'''
armstrong :
153 = 1^3 + 5^3 + 3^3
       1 + 125 + 27
       
1634 = 1^4 + 6^4 +3^3 +4^4
         1 + 1296 +81 +256
'''
num = int(input("enter number:"))
temp = num

while num>0 :
    last = num % 10
    
#pallindrome number or not....
'''
1331
'''
# sum of each digit of a number 122 = 1+2+2
#