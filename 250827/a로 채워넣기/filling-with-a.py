word = input()

result = ""
for i in range(len(word)):
    if (i == 1) or (i == len(word) -2):
        result += "a"
    else: 
        result += word[i]
print(result)