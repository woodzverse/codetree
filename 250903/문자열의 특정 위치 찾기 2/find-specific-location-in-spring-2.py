fruit = ["apple", "banana", "grape", "blueberry", "orange"]

letter = input()
total = 0
for i in range(5):
    if (fruit[i][2] == letter) or (fruit[i][3] == letter):
        print(fruit[i])
        total += 1
print(total)
