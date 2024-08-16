#reverse a string 
def reverse_str(s):
    reversed_str = ''
    for char in s:
        reversed_str = char + reversed_str
    return reversed_str  # This line should be outside the loop

print(reverse_str("hello"))  # Output: "olleh"


#or 


def reverse_string(s):
    return s[::-1]

print(reverse_string("hello"))  # Output: "olleh"



# Find the Maximum Element in an Array 


def findMax(arr):
    max_num = 0
    
    for num  in arr:
        if num > max_num:
            max_num = num
    
    return max_num
    
print(findMax([11,2,90,4,578,6]))


# or



def findMax(arr):
    return max(arr)

print(findMax([1,1,2,3,4,5,6,7,6]))   


#find the max string length



#palindrome 
def is_palindrome(lst):
    return lst == lst[::-1]

# Example usage
print(is_palindrome('naman'))  # Output: True






#1st[::-1] this will create the reverse order of the string and stored it






#Find the Maximum Element in a List


def Maxnum(nums):
    max_num = nums[0]
    for num in nums:
        if num > max_num:
            max_num = num
    return max_num  
    
nums = [1,2,3,4,5,6,7,8] 
print(Maxnum(nums))    

    


#Question: Write a Python program to print the Fibonacci series up to n terms.


def fibonacci(n):
    fib_sequence = [0 , 1]
    for i in range (2 , n):
        fib_sequence.append(fib_sequence[-1] + fib_sequence[-2])
    return fib_sequence[:n]
    
    
print(fibonacci(3))



#Question: Write a Python function to find the second largest element in a list.

def secondLargest(nums):
    first = 0
    second = 0
    for num in nums:
        if num > second :
           if num > first:
               second = first
               first = num 
        elif num > second and first > num:
            second = num
            
    return second
    
    
print(secondLargest([1,2,3,8,9,89,98,125,987,890,987,6543]))
            
#Merge Two Sorted Lists


def merge_arr(lst1,lst2):
    i=j=0
    merged_list=[]
    while i < len(lst1) and j < len(lst2):
        if lst1[i] < lst2[j]:
           merged_list.append(lst1[i])
           i +=1 
        else:
           merged_list,append(lst2[j])
           j += 1
    merged_list.extend(lst1[i:])
    merged_list.extend(lst2[j:])
    return merged_list
    
    
lst1 = [1,2,3,4,5,6]    
lst2 = [7,8,9]    
print(merge_arr(lst1 , lst2))


#Find the Missing Number in an Array


def find(arr):
    n = len(arr)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(arr)
    return expected_sum - actual_sum
    
print(find([1,2,3,5]))


#or


