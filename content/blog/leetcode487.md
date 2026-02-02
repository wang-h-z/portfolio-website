---
title: "leetcode contest 487"
project: "leetcode"
summary: "lowk got fried"
author: "me"
date: "2 Feb 2026"
readTime: "10 min read"
tags: []
---

this [week's](https://leetcode.com/contest/weekly-contest-487/) problem list had:
1. [Count Monobit Integers](https://leetcode.com/problems/count-monobit-integers/) ✅
2. [Final Element After Subarray Deletions](https://leetcode.com/problems/final-element-after-subarray-deletions/) ❌
3. [Design Ride Sharing System]() ✅
4. [Longest Alternating Subarray](https://leetcode.com/problems/longest-alternating-subarray-after-removing-at-most-one-element/description/) ❌

current rating: not placed yet

 ### thought processes:

1. [Count Monobit Integers](https://leetcode.com/problems/count-monobit-integers/) ✅
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

2. [Final Element After Subarray Deletions](https://leetcode.com/problems/final-element-after-subarray-deletions/) ❌

````python

# DID NOT SOLVE
class Solution:
    def finalElement(self, nums: List[int]) -> int:

        return min(nums)
````

this question lowk triggered me, i've seen enough alice and bob games man

![played these games before](https://media1.tenor.com/m/5LVEjoNtey4AAAAd/i-have-played-these-games-before-seong-gi-hun.gif)

initially, i wanted to implement a turn based solution that would explore some form of decision tree, but i realised i had to keep track of the state of the game constantly and the solution was abit too complex given the time crunch

then i realised this question was really similar to another [alice and bob game ](https://leetcode.com/problems/stone-game/description/), where the solution could be extremely trivial. 

i figured since alice wants to maximise the result she may always pick the smallest possible subarray and since bob wants to minimize the result he may always pick the largest possible subarray. this would lead to alice just picking the smallest element, and then bob picking the largest possible contiguous subarray that would result in one "end" having the smaller element. 

i realised that this thinking was actually on the right track but was confused by what alice should do. a counter example to what was mentioned above would be nums = [11, 5, 2]. alice could pick the subarray [5, 2] and the game would end at [11], which is the best case scenario. 

To simplify the problem, we can actually say that each player can has the option to delete everything except the first element or everything except the last element, <u>because effectively this is the only optimal move they can make.</u> So if alice wants to maximise the final element, she can look at nums[0] or nums[-1]. if she pops any other subarray to try to get a middle element and hands control to bob, then bob would just pop that element and any other surrounding element. so alice should just effectively find the best case answer from the ends of the array as bob would optimally not give her any element in the middle

````python
# accepted solution
class Solution:
    def finalElement(self, nums: List[int]) -> int:
        return max(nums[0], nums[len(nums) - 1])
````

3. [Design Ride Sharing System](https://leetcode.com/problems/design-ride-sharing-system/description/) ✅

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
            return [self.driverQ.popleft(), self.riderQ.popleft(), ]

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

this question was relatively straightforward, the question also even hints at you to use a queue data structure. i guess the only thing to really improve in my solution would be the cancelRider() function, which is currently O(n) if len(self.riderQ) is n. However, my answer still lucky passes the time constraints :p

4. [Longest Alternating Subarray](https://leetcode.com/problems/longest-alternating-subarray-after-removing-at-most-one-element/description/) ❌

````python
# DID NOT FINISH
````

ok this question was legitamtely crazy.