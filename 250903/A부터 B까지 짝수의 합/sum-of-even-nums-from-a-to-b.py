A, B = map(int, input().split())

total = 0
for i in range(A, B + 1):
    if i % 2 == 1:
        continue
    total += i
print(total)