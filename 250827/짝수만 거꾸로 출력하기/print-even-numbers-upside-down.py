N = int(input())
arr = map(int, input().split())

result = []
for i in arr:
    if (i % 2 == 0):
        result.append(i)

for j in range(len(result) - 1, -1, -1):
    print(result[j], end=" ")
