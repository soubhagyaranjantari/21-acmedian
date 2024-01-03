# # def find_survivor_recursive(n, k):
# #     count=0
# #     count+=1
# #     print (count)
# #     if n == 1:
# #         return 1
# #     else:
# #         # print('---',((n - 1, k)+k+1) 
# #         #       ) 
# #         return (find_survivor_recursive(n - 1, k) + k - 1) % n + 1

# # total_students = 100
# # skip_count = 2  # Alternate shooting

# # survivor = find_survivor_recursive(total_students, skip_count)
# # print(f"The survivor is student number: {survivor}")
# def two_sum(nums, target):
#     num_map = {}

#     for i in range(len(nums)):
#         current_num = nums[i]
#         complement = target - current_num

#         if complement in num_map:
#             return [num_map[complement], i]

#         num_map[current_num] = i

#     return None  # If no solution is found

# # Example usage:
# nums_array = [2, 7, 11, 15]
# target_sum =17

# result_indices = two_sum(nums_array, target_sum)
# print("Indices of the two numbers:", result_indices)
def climb_stairs(n):
    if n == 0 or n == 1:
        return 1

    dp = [0] * (n + 1)
    print(dp)
    dp[0] = 1
    dp[1] = 1

    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]

# Example usage:
steps = 10  # Example: 10 steps
print(f"Number of ways to climb {steps} stairs: {climb_stairs(steps)}")
