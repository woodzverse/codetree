A, B, C = map(int, input().split())

# A. B인 경우 
if A < B:
    if B < C: 
        print(B) # A, B, C
    elif C < A:
        print(A) # C, A, B
    else: 
        print(C) # A, C, B
# B, A인 경우 
else: 
    if B > C: 
        print(B) # C, B, A
    elif C > A:
        print(A) # B, A, C
    else:
        print(C) # B, C, A