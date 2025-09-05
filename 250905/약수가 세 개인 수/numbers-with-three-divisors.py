start, end = map(int, input().split())

# Please write your code here.
count = 0
for i in range(start, end + 1):
    num = 0
    for j in range(1, start + 1):
        if i % j == 0:
            num += 1
    
    if num == 3:
        count += 1
print(count)
