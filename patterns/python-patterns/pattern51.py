# Pattern 51: ...

#     1
#    *1
#   3*1
#  *3*1
# 5*3*1

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if i >= j:
            if j % 2 == 0:
                print("*", end="")
            else:
                print(j, end="")
        else:
            print(" ", end="")
    print()
