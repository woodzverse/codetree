word1, word2 = input().split()

if (len(word1) == len(word2)):
    print("same")
else:
    if (len(word1) > len(word2)):
        print(word1, len(word1))
    else: 
        print(word2, len(word2))