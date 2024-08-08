#reverse a string 
def reverse_str(s):
    reversed_str = ''
    for char in s:
        reversed_str = char + reversed_str
    return reversed_str  # This line should be outside the loop

print(reverse_str("hello"))  # Output: "olleh"






#palindrome 
def is_palindrome(lst):
    return lst == lst[::-1]

# Example usage
print(is_palindrome('naman'))  # Output: True


#1st[::-1] this will create the reverse order of the string and stored it







