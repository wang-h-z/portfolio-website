---
title: "leetcode contest 488"
project: "leetcode"
summary: "slightly better but still got deep fried"
author: "me"
date: "8 Feb 2026"
readTime: "10 min read"
tags: []
---

this [week's](https://leetcode.com/contest/weekly-contest-488/) problem list had:
1. [3833. Count Dominant Indices](https://leetcode.com/problems/count-dominant-indices/description/) ✅
2. [3834. Merge Adjacent Equal Elements](https://leetcode.com/problems/merge-adjacent-equal-elements/description/) ✅
3. [3835. Count Subarrays With Cost Less Than or Equal to K](https://leetcode.com/problems/count-subarrays-with-cost-less-than-or-equal-to-k/description/) ❌
4. [3836. Maximum Score Using Exactly K Pairs](https://leetcode.com/problems/maximum-score-using-exactly-k-pairs/description/) ❌

current rating: 1489

 ### thought processes:

[1. Count Dominant Indices](https://leetcode.com/problems/count-dominant-indices/description/) ✅

```python
class Solution:
    def dominantIndices(self, nums: List[int]) -> int:

        res = 0
        n = len(nums)
        acc = nums[-1]
        
        for i in range(n - 2, -1 , -1):
            if nums[i] > acc:
                res += 1
            acc = (acc * (n - i - 1) + nums[i]) / (n - i)
        
        return res
```

this question was alright, just used abit of simple math to solve it by just traversing the array from the back using an accumulator variable 

[2. Merge Adjacent Equal Elements](https://leetcode.com/problems/merge-adjacent-equal-elements/description/) ✅

```python
class Solution:
    def mergeAdjacent(self, nums: List[int]) -> List[int]:
        stack = [nums[0]]
        n = len(nums)
        i = 1
        s_l = 1
        while i < n: 
            stack.append(nums[i])
            s_l += 1
            while s_l  > 1 and stack[-1] == stack[-2]:
                curr = stack.pop()
                stack.pop()
                stack.append(curr * 2)
                s_l -= 1
            i += 1

        return stack
```

recognised the pattern immediately, whcih was similar to [20. Valid Parantheses](https://leetcode.com/problems/valid-parentheses/description/) and [735. Asteroid Collision](https://leetcode.com/problems/asteroid-collision/description/). 

However, a huge room improvement would be to solve the question with a better runtime. Although my contest solution was O(n), I could simplify the solution a whole lot more. Because of this I only beat 20% of submissions, whereas I could've put my score up much further.

A cleaner solution would be: 


```python
class Solution:
    def mergeAdjacent(self, nums: List[int]) -> List[int]:
        stack = []

        for num in nums:
            curr = num
            while stack and stack[-1] == curr:
                curr += stack.pop()
            stack.append(curr)
        
        return stack
```

[3. Count Subarrays With Cost Less Than or Equal to K](https://leetcode.com/problems/count-subarrays-with-cost-less-than-or-equal-to-k/description/) ❌

```python
# TLE

class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        n = len(nums)
        a1 = [[0] * n for _ in range(n)]
        a2 = [[float('inf')] * n for _ in range(n)]
        res = 0
        for i in range(n):
            for j in range(i, n):
                if j == i:
                    a1[i][j] = nums[j]
                    a2[i][j] = nums[j]
                else:
                    a1[i][j] = max(a1[i][j - 1], nums[j])
                    a2[i][j] = min(a2[i][j - 1], nums[j])

        # print(a1, a2)
        for i in range(n):
            for j in range(i, n):
                cost = (a1[i][j] - a2[i][j]) * (j - i + 1)
                # print(i, j, a1[i][j], a2[i][j], cost)
                if cost <= k:
                    res += 1

        return res
```

ok, this question took the bulk of my time during the contest. i could come up with the trivial solution as seen above, basically just storing all the possible subbaray costs, which is described as cost =  (max(nums[l..r]) - min(nums[l..r])) * (r - l + 1). however, there definitely could've been improvements as there is definitely repeated work being done in my solution.

i definitely recognise that this kind of pattern is one of my weaker patterns, and i couldn't really even come up with the appropriate pattern to solve the question without any hints. 

for this question, i think we can take a hint from the cost having the operation (r - l + 1) which points to a sort of sliding window technique, and the way the cost is structured hints to it as well. suppose we have a subarray nums[l..r] and nums[l2..r2] where l <= l2 <= r2 <= r. If the cost of nums[l..r] is <= k, then cost of nums[l2..r2] is also <= k. this means we should "greedily" expand the sliding window until the cost condition has been violated, then perhaps start shrinking the window from the left (since increasing l by shrinking from the left will decrease r - l + 1, decreasing the cost). 

this segways to the next crux of the issue which is how we can properly store the max of a given window. since we usually use l and r to store the current window, we can use a deque to store the valid "max" and "min" values in the current window. at any given valid l and r, these queues will store all the possible max and min values in that window. instead of storing all the values, we will just keep these queues monotonic (front of max queue is largest, front of min queue is smallest). this will allow us to only keep the values that are only relevant to the current window. this works because suppose we have crossed the current window (l has advanced pass the previous max), then the next max has to be the next value in the queue, since the queue stores the next largest value in the current window.

another point would be that we will store the index of the value in nums in the queues.

with these two main ideas, we can write out a valid O(n) TC solution. 

```python
from collections import deque
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        
        maxq = deque() 
        minq = deque()
        n = len(nums)
        res, l, r = 0, 0, 0

        while r < n: 
            while maxq and nums[maxq[-1]] < nums[r]: # keep monotonic property of queue
                maxq.pop()
            maxq.append(r)

            while minq and nums[minq[-1]] > nums[r]: 
                minq.pop()
            minq.append(r)

            # print(maxq, minq, l, r)
            while l <= r and (nums[maxq[0]] - nums[minq[0]]) * (r - l + 1) > k:
                # print(l, r)
                if maxq[0] == l:
                    maxq.popleft() # the current max is going to be removed when i shrink
                
                if minq[0] == l: # the current min is going to be removed when i shrink
                    minq.popleft()
                
                l += 1 # shrink window

            
            res += (r - l  + 1) # add all the valid subarrays in this window
            # print(r - l + 1) 
            r += 1

        return res
```

[4. Maximum Score Using Exactly K Pairs](https://leetcode.com/problems/maximum-score-using-exactly-k-pairs/description/) ❌

```python
# DID NOT FINISH

class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        n = len(nums1)
        m = len(nums2)
        a = [[[0] * (m + 1) for _ in range(n + 1)] for _ in range(k + 1)]
        # print(a)
        # use a 3d array [max(i,j)]
        # a = max(nums1[i] * nums2[j] + a[i - 1][j - 1][k - 1], 
        #         a[nums[i - 1][j]], a[nums[i - 1][j])
        
        for i in range(1, n + 1): 
            for j in range(1, m + 1):
                for x in range(1, k + 1):
                    a[x][i][j] = max(nums1[i] * nums2[j] + a[x - 1][i - 1][j - 1], a[x - 1][i - 1][j], a[x - 1][i][j - 1])

        return a[k][n][m]
```

i feel like i was geniuenly so close to solving this question as i was halfway trying to figure out the recurrence relation. at this point in the contest i had maybe about 20 minutes of time remaining. i ran into some indexing problems and ran out of time sadly.

i need to read the question better because initially i wrote a heap-based algorithm which was completely off, i did not recognise the main hurdle of the question which was the fact that: 

You must choose exactly k pairs of indices (i1, j1), (i2, j2), ..., (ik, jk) such that:

0 <= i1 < i2 < ... < ik < n
0 <= j1 < j2 < ... < jk < m

hence, a simple popping of all possible pairs of tuples is not correct due to the fact that there is some "ordering" that needs to be maintained in the pairs of indices that we choose. 

this immediately led me to think of a DP solution, where i wanted to come up with the recurrence relation first. in this question, there are 3 states that need to be tracked, i, j, and k, and we have a 0/1 knapsack kind of pattern where if we pick this current index (i/j) then we can't pick any i/j before this current index. 

let us assume we have a magical array that stores all 3 states a[x][i][j], where a[x][i][j] = maximum score using x pairs at index i and index j

then we can form this recurrence relation: a[x][i][j] = max(a[x - 1][i - 1][j - 1] + nums1[i] * nums2[j], a[x][i - 1][j], a[x][i][j - 1])

let's break down what this relation means. at any given state of the problem, we can make 3 decisions, choose nums1[i] and nums2[j] to form a pair, or to skip in two ways: 1. skip the current i index, skip the current j index. 

this is how we get: a[x - 1][i - 1][j - 1] + nums1[i] * nums2[j] (pick this current pair), a[x][i - 1][j] (skip i),  a[x][i][j - 1] (skip j)

using this recurrence relation, we just have to fill the array bottom up and return the final state!

```python
class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        n = len(nums1)
        m = len(nums2)
        
        a = [[([float('-inf')] * (m + 1)) for _ in range(n + 1)] for _ in range(k + 1)] #  + 1 for base cases
        
        for i in range(n + 1): # 0 pairs at any index's = value 0 
            for j in range(m + 1):
                a[0][i][j] = 0

        # print(a)
        for i in range(1, n + 1):
            for j in range(1, m + 1):
                for x in range(1, k + 1):
                    print(a[x - 1][i - 1][j - 1])
                    a[x][i][j] = max(a[x - 1][i - 1][j - 1] + nums1[i - 1] * nums2[j - 1],
                                     a[x][i - 1][j], a[x][i][j - 1])

        return a[k][n][m] 
```

this is a O(k * n * m) TC and SC solution. we can actually improve it by just not having the 3rd x dimension. at any given moment we only look "1 layer" backwards and we only actually need the exact kth pairs, so we don't really have to maintain every possible xth pair.

we can do this by having a curr, and prev state of the dp array. curr keeps track of the best possible outcome from x - 1 pair, while we explore the best possible outcome from x pairs.

```python
class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        n, m = len(nums1), len(nums2)
        NEG = -10**30

        prev = [[0] * (m + 1) for _ in range(n + 1)]  # dp[0]

        for x in range(1, k + 1):
            cur = [[NEG] * (m + 1) for _ in range(n + 1)]
            for i in range(1, n + 1):
                for j in range(1, m + 1):
                    take = prev[i - 1][j - 1] + nums1[i - 1] * nums2[j - 1]
                    cur[i][j] = max(take, cur[i - 1][j], cur[i][j - 1])
            prev = cur

        return prev[n][m]
```

all in all, although i didnt improve in terms of no. of questions solved, still a very good contest experience! hope to do better for the next one. 