# a=int(input("hellow world"))
# b=int(input("hellow world"))

# if(a<10):
#     smallest="hello world"
# else:
#     smallest="sorry ! try agin"

a=int(input('Enter first number: '))
b=int(input('Enter second number: '))
c=int(input('Enter third number: '))

smallest=0

# Comparing the three numbers and finding the smallest one.
if a<b and a<c:
    smallest=a
if b<a and b<c:
    smallest=b
if c<a and c<b:
    smallest=c

print(smallest, "is the smallest of three numbers.")
