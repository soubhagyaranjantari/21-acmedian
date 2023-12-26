def find_survivor_recursive(n, k):
    count=0
    count+=1
    print (count)
    if n == 1:
        return 1
    else:
        # print('---',((n - 1, k)+k+1) 
        #       ) 
        return (find_survivor_recursive(n - 1, k) + k - 1) % n + 1

total_students = 100
skip_count = 2  # Alternate shooting

survivor = find_survivor_recursive(total_students, skip_count)
print(f"The survivor is student number: {survivor}")
