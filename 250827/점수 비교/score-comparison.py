A_Math, A_English = map(int, input().split())
B_Math, B_English = map(int, input().split())

if ((A_Math > B_Math) and (A_English > B_English)):
    print(1)
else:
    print(0)