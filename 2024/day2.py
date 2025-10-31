
import time

def steps(list, max):
    for n in range(0, len(list)):
        if max > int(list[n]) + max:
            return False
        
    return True
def main():
    start_time = time.time()

    #input = open("./day2input.txt", "r")
    input = ["7 6 4 2 1",
    "1 2 7 8 9",
    "9 7 6 2 1",
    "1 3 2 4 5",
    "8 6 4 4 1",
    "1 3 6 7 9",]

    for line in input:
        l = line.split(" ")
        print(l)
        
        status = l[0] > l[1]
        match status:
            case True:
                print("decreasing")
                return steps(l, -3)
            case False:
                print("increasing")
                return steps(l, 3)

    print("--- %s seconds ---" % (time.time() - start_time))    

main()