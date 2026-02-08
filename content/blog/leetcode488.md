---
title: "leetcode contest XXX"
project: "leetcode"
summary: ""
author: "me"
date: "X XXX 2026"
readTime: "10 min read"
tags: []
---

this [week's]() problem list had:
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