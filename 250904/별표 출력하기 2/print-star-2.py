N = int(input())

for i in range(N):
    for j in range(N, i, -1): # for _ in range(n - i):
        print("*", end=" ")
    print()