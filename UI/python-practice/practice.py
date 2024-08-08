#reverse a string 
def reverse_str(s):
    reversed_str = ''
    for char in s:
        reversed_str = char + reversed_str
    return reversed_str  # This line should be outside the loop

print(reverse_str("hello"))  # Output: "olleh"







