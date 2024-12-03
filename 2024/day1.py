
import re, time

start_time = time.time()

input = open("./day1input.txt", "r")
#input = ["3   4\n","4   3\n","2   5\n","1   3\n","3   9\n","3   3\n",]
left, right = [], []
sum = 0
similarities = 0

for line in input:
    l, r = line.split("   ")
    left.append(int(l.strip()))
    right.append(int(r.strip()))

left.sort()
right.sort()

for l in range(0, len(left)):
    print(right[l], " - ", left[l], " = ", right[l] - left[l])
    
    sum += abs(right[l] - left[l])


print("Sum of distances: ", sum)

for l in range(0, len(left)):
    print("Left: ", left[l], " occurs ", right.count(left[l]), " times in right" )
    similarities += right.count(left[l]) * left[l]
    
print("Similarities: ", similarities)

print("--- %s seconds ---" % (time.time() - start_time))    
        