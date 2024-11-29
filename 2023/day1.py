
import re, time

start_time = time.time()

input = open("./day1input.txt", "r")

accumulator = 0

def return_first_digit(s):
    m = re.search(r"\d", s)
    return s[m.start()]

for n in input:
    m = return_first_digit(n) + return_first_digit(n[::-1])
    accumulator += int(m)

print("Sum: ", accumulator)
print("--- %s seconds ---" % (time.time() - start_time))    
        