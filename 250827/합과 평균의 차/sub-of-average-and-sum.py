a, b, c = map(int, input().split())
total = a + b + c
average = int(total / 3)
print(total, average, total - average, sep="\n")