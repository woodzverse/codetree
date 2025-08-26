a, b = map(int, input().split())

number = [a, b]
for i in range(8):
    number.append((number[i] + number[i + 1]) % 10)
for i in number: 
    print(i, end=" ")