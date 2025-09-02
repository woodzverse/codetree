fruit = ["apple", "banana", "grape", "blueberry", "orange"]

total = 0
alpabet = input()
for i in fruit:
    if alpabet in i[2:4]:
        print(i)
        total += 1
print(total)
