---
title: "leetcode contest 487"
project: "leetcode"
summary: "lowk got fried"
author: "me"
date: "2 Feb 2026"
readTime: "15 - 20 min read"
tags: []
---

this [week's](https://leetcode.com/contest/weekly-contest-487/) problem list had:
1. [Count Monobit Integers](https://leetcode.com/problems/count-monobit-integers/) ✅
2. [Final Element After Subarray Deletions](https://leetcode.com/problems/final-element-after-subarray-deletions/) ❌
3. [Design Ride Sharing System]() ✅
4. [Longest Alternating Subarray](https://leetcode.com/problems/longest-alternating-subarray-after-removing-at-most-one-element/description/) ❌

current rating: not placed yet

 ### thought processes:

[1. Count Monobit Integers](https://leetcode.com/problems/count-monobit-integers/) ✅


```` python
import math
class Solution:
    def countMonobit(self, n: int) -> int:

        # monobit => all 1s or all 0s
        #there is only 1 "all zero" which is 0
        # count all possible "same" 1s

        if n == 1:
            return 2

        if n == 0:
            return 1
        
        if n % 2 == 1:
            return int(floor(math.log2(n + 1))) + 1
        else: 
            return int(floor(math.log2(n))) + 1
````

this question was lowkeniuenly kinda easy (i mean it is easy difficulty) but i choked hella on it and spent ~20 minutes on it because i couldn't figure out the math behind it (i realise im cheeks at bit questions) 
initially went with a solution that used division by 2 but realised it was much easier to just use math.log(). the intuition behind this question is to find the number of integers that are represented by all 1s (monobit) which are equal or lesser to n. these integers are always -1 from a power of 2 (more formally 2^k - 1). So for even cases of n, it is enough to just return the number of powers of 2 that is lesser or equal to n. for odd cases, it is abit trickier because the number itself could be a monobit integer, so we add 1 to n to see if it becomes a power of 2 (it is not good enough to just find the floor). the final "+1" at the end of both cases is to account for the monobit 0

[2. Final Element After Subarray Deletions](https://leetcode.com/problems/final-element-after-subarray-deletions/) ❌

````python
# DID NOT SOLVE
class Solution:
    def finalElement(self, nums: List[int]) -> int:

        return min(nums)
````

this question lowk triggered me, i've seen enough alice and bob games man

![played these games before](https://media1.tenor.com/m/5LVEjoNtey4AAAAd/i-have-played-these-games-before-seong-gi-hun.gif)

initially, i wanted to implement a turn based solution that would explore some form of decision tree, but i realised i had to keep track of the state of the game constantly and the solution was abit too complex given the time crunch

then i realised this question was really similar to another [alice and bob game](https://leetcode.com/problems/stone-game/description/), where the solution could be extremely trivial. (brain teaser sorta question)

i figured since alice wants to maximise the result she may always pick the smallest possible subarray and since bob wants to minimize the result he may always pick the largest possible subarray. this would lead to alice just picking the smallest element, and then bob picking the largest possible contiguous subarray that would result in one "end" having the smaller element. 

i realised that this thinking was actually on the right track but was confused by what alice should do. a counter example to what was mentioned above would be nums = [11, 5, 2]. alice could pick the subarray [5, 2] and the game would end at [11], which is the best case scenario. so i ended up trying to write a solution that would iterate through all possible subarrays and then trying to make a decision tree from there (aint doing allat tbh)

to simplify the problem, we can actually say that each player has the option to delete everything except the first element or everything except the last element, <u>because effectively this is the only optimal move they can make.</u> Suppose the largest element in the array is in the middle and alice wants that. if alice pops any other subarray to try to get a middle element and hands control to bob, then bob would just pop that element and possibly any other surrounding element. so alice should just effectively find the best case answer from the ends of the array as bob would not give her any element in the middle anyways

````python
# accepted solution
class Solution:
    def finalElement(self, nums: List[int]) -> int:
        return max(nums[0], nums[len(nums) - 1])
````

[3. Design Ride Sharing System](https://leetcode.com/problems/design-ride-sharing-system/description/) ✅

````python
from collections import deque
class RideSharingSystem:

    def __init__(self):
        self.riderQ = deque()
        self.driverQ = deque()

    def addRider(self, riderId: int) -> None:
        self.riderQ.append(riderId)
        # print(self.riderQ)

    def addDriver(self, driverId: int) -> None:
        self.driverQ.append(driverId)
        # print(self.driverQ)

    def matchDriverWithRider(self) -> List[int]:
        # print(self.riderQ, self.driverQ)
        if not self.riderQ or not self.driverQ:
            return [-1, -1]
        else: 
            return [self.driverQ.popleft(), self.riderQ.popleft()]

    def cancelRider(self, riderId: int) -> None:
        if riderId in self.riderQ: 
            self.riderQ.remove(riderId)


# Your RideSharingSystem object will be instantiated and called as such:
# obj = RideSharingSystem()
# obj.addRider(riderId)
# obj.addDriver(driverId)
# param_3 = obj.matchDriverWithRider()
# obj.cancelRider(riderId)
````

this question was relatively straightforward, the question also even hints at you to use a queue data structure. to really improve my solution would be the cancelRider() function, which is currently O(n) if len(self.riderQ) is n. 

there are many solutions/improvements that i saw (such as using a bitset/using a active/cancelled pool), but i think the most interesting improvement i saw was this [solution](https://leetcode.com/problems/design-ride-sharing-system/solutions/7541153/lazy-deletion-with-queues-using-the-tomb-xrkd/) that uses lazy deletion


````python
from collections import deque
from typing import List

class RideSharingSystem:
    def __init__(self):
        self.riderQ = deque()
        self.driverQ = deque()
        self.cancelled = set()

    def cancelRider(self, riderId: int) -> None:
        self.cancelled.add(riderId)

    def matchDriverWithRider(self) -> List[int]:
        # clean cancelled riders from front
        while self.riderQ and self.riderQ[0] in self.cancelled:
            self.cancelled.remove(self.riderQ[0])
            self.riderQ.popleft()

        if not self.riderQ or not self.driverQ:
            return [-1, -1]

        return [self.driverQ.popleft(), self.riderQ.popleft()]
````



[4. Longest Alternating Subarray](https://leetcode.com/problems/longest-alternating-subarray-after-removing-at-most-one-element/description/) ❌

````python
# DID NOT FINISH
````

this question was definitely harder in my mind then it needed to be. at this point in the contest i didnt have too much time but this was relatively an easier question once it is understood how to keep track of the alternating array. i think alternating array patterns don't regularly come up (across the limited questions i have done) but some notable/more popular questions which are relevant would be [376. Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/description/) and [978. Longest Turbulent Subarray](https://leetcode.com/problems/longest-turbulent-subarray/). 

similar to the above two qns, the hardest part about this patter imo is to know how to properly traverse the array to store the longest alternating subsequence (LAS) at a point i. 

for our first iteration, let's suppose we have an array dp that stores the maximum LAS up till index k where k is any valid index in the array nums. if we are at any point i in nums, how would we use dp to determine the maximum LAS up till i? (not incl. of whatever is after i/nums[i + 1:] for simplicity sake). we could maybe say that LAS[i] = dp[i - 1] + 1, but we would need to know what is nums[i]'s relationship to nums[i - 1] (is it < or >) and where did we "left off" from nums[i - 1] (was nums[i - 1] < nums [i - 2]?). the current iteration of dp is not good enough to keep track of the state of the pattern. this is lowk the main headache of the question

to improve, we could say that dp[i] stores a tuple, where dp[i][0] represents the maxmimum LAS up to index k where nums[i] < nums[i - 1]. simply, index k ends with a decreasing step, and dp[i][1] represents the maximum LAS up to index k where nums[i] > nums[i - 1], index k ends with an increasing step. so we use either dp[i][0]/dp[i][1] depending on whether nums[i] is less than/equal/greater to nums[i-1]

to fill up this max LAS dp, we can create this recurrence relation: 
for any index i in nums, 
if nums[i] < nums[i - 1]: dp[i][0] = dp[i - 1][1] + 1, dp[i][1] = 1
if nums[i] > nums[i - 1]: dp[i][0] = dp[i - 1][0] + 1, dp[i][0] = 1
if nums[i] == nums[i - 1]: dp[i][0] = 1, dp[i][1] = 1

example: 
````python
for i in range(1, n):
            if nums[i] < nums[i - 1]:
                dp1[i][0] = dp1[i - 1][1] + 1
                dp1[i][1] = 1
            elif nums[i] > nums[i - 1]:
                dp1[i][1] = dp1[i - 1][0] + 1
                dp1[i][0] = 1
            else: 
                dp1[i][0] = 1
                dp1[i][1] = 1

nums = [2, 1, 3, 2]
dp1 = [[1, 1], [2, 1], [1, 3], [4, 1]]
````

with this, we can actually find the maximum LAS of any array, but the question doesn't stop there (cuz why would it). with the introduction of the ability to delete any element, we need to consider how that will affect the max LAS of nums.

with the above dp filld (renamed dp1), suppose we delete nums[i], how can we "connect" the LAS from nums[0:i] and LAS from nums[i+1:]. We could introduce a new dp (dp2) that stores the maximum LAS that STARTS from i. to repeat, dp1 stores the maximum LAS that ends at i and dp2 stores the maximum LAS that starts at i. 

we will fill this array backwards (from n - 2).

we can say that dp2[i][0] stores the max LAS at i where i starts with an increasing step (nums[i + 1] > nums[i]) and dp2[i][1] stores the maximum alternating length at i where i starts with an decreasing step (nums[i + 1] < nums[i]).

this will give us:

````python
for i in range(n - 2, -1, -1):
            if nums[i] < nums[i + 1]:
                dp2[i][0] = dp2[i + 1][1] + 1
                dp2[i][1] = 1
            elif nums[i] > nums[i + 1]:
                dp2[i][1] = dp2[i + 1][0] + 1
                dp2[i][0] = 1
            else:
                dp2[i][0] = 1
                dp2[i][1] = 1

nums = [2, 1, 3, 2]
dp2 = [[1, 4], [3, 1], [1, 2], [1, 1]]
````

with these two dps, we can now try to find the maximum LAS by iterating through the array, and trying to delete each element range(1, n - 2) (tail elements are exlcuded for index boundaries, these are edgecases sorted out before this step is done) by connecting dp1 and dp2 based on what the nums[i - 1] and nums[i + 1]'s relation is to each other.

````python
res = -1
for i in range(n): # covers the tail element edgecases and also any case where removing does'nt increase the max LAS
    res = max(res, dp1[i][0], dp1[i][1], dp2[i][0], dp2[i][1])

for i in range(1, n - 1):
            left_val, right_val =  nums[i - 1], nums[i + 1]
            if left_val > right_val: # to connect: increasing -> decreasing (current state) -> increasing step
                res = max(res, dp1[i - 1][1] + dp2[i + 1][0])
            if left_val < right_val: # to connect: decreasing -> increasing (current step) -> decreasing step
                res = max(res, dp1[i - 1][0] + dp2[i + 1][1])
    
return res
````

this solution works and TC: O(n) and SC: O(n), but unfortunately this is not the most optimal solution although it's probably the one that is the easiest to digest

there is an O(1) space solution that only requires one 1 pass instead of 3.

````python
from typing import List

class Solution:
    def longestAlternating(self, nums: List[int]) -> int:
        n = len(nums)

        def sgn(x: int) -> int:
            if x > 0:
                return 1
            if x < 0:
                return -1
            return 0

        # dp0: no removal used, ending at i
        up0 = down0 = 1
        # dp1: at most one removal used, ending at i
        up1 = down1 = 1

        # store dp0 at i-2 (needed when we "delete nums[i-1]" and connect i-2 -> i)
        up0_2 = down0_2 = 1

        ans = 1

        for i in range(1, n):
            diff1 = sgn(nums[i] - nums[i - 1])

            # start fresh at i (length 1)
            up0_new = down0_new = 1
            up1_new = down1_new = 1

            # extend without removal (use i-1 -> i)
            if diff1 > 0:
                up0_new = down0 + 1
            elif diff1 < 0:
                down0_new = up0 + 1

            # extend with removal already used (still use i-1 -> i)
            if diff1 > 0:
                up1_new = max(up1_new, down1 + 1)
            elif diff1 < 0:
                down1_new = max(down1_new, up1 + 1)

            # use the removal NOW by deleting nums[i-1], connect i-2 -> i
            if i >= 2:
                diff2 = sgn(nums[i] - nums[i - 2])
                if diff2 > 0:
                    up1_new = max(up1_new, down0_2 + 1)
                elif diff2 < 0:
                    down1_new = max(down1_new, up0_2 + 1)

            ans = max(ans, up0_new, down0_new, up1_new, down1_new)

            # shift for next iteration
            up0_2, down0_2 = up0, down0
            up0, down0 = up0_new, down0_new
            up1, down1 = up1_new, down1_new

        return ans
````

all in all, for a first contest experience i got fried, but i learnt alot of things like time management, trying to write cleaner code, and also how many LOC and what u use actually matters cuz i think im graded on how many % i beat in both the time and space consumption (also didnt know submitting wrong submissions gives penalty T.T)