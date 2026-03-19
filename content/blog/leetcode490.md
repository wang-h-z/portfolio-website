---
title: "leetcode contest 490"
project: "leetcode"
summary: "first 3/4 solved!"
author: "me"
date: "22 Feb 2026"
readTime: "2 min read"
tags: []
---

this [week's](https://leetcode.com/contest/weekly-contest-490/) problem list had:

1. [3847. Find the Score Difference in a Game](https://leetcode.com/problems/find-the-score-difference-in-a-game/) ✅
2. [3848. Check Digitorial Permutation](https://leetcode.com/problems/check-digitorial-permutation/) ✅
3. [3849. Maximum Bitwise XOR After Rearrangement](https://leetcode.com/problems/maximum-bitwise-xor-after-rearrangement/) ✅
4. [3850. Count Sequences to K](https://leetcode.com/problems/count-sequences-to-k/) ❌

current rating: 1557

[1. 3847. Find the Score Difference in a Game](https://leetcode.com/problems/find-the-score-difference-in-a-game/) ✅
```python
class Solution:
    def scoreDifference(self, nums: List[int]) -> int:
        first = 0
        second = 0

        active = 0 # 0 -> first's turn, 1 -> second's turn

        for i, num in enumerate(nums): 
            if num % 2 == 1: 
                active = 1 - active
            if (i + 1) % 6 == 0:
                # active and inactive players swap roles
                active = 1 - active

            if active == 0:
                first += num
                # print('hi', first, i)
            else: 
                second += num
                # print('yo', second, i)

        # print(first, second)
        return first - second
```

[2. 3848. Check Digitorial Permutation](https://leetcode.com/problems/check-digitorial-permutation/) ✅
```python
import math
class Solution:
    def isDigitorialPermutation(self, n: int) -> bool:
        fact = [factorial(i) for i in range(10)]

        factorial_sum = sum(fact[ord(ch) - 48] for ch in str(n)) # same across all n
        
        n_str = str(n)
        fact_str = str(factorial_sum)
        
        return sorted(n_str) == sorted(fact_str) # leading zeroes 
        
```
[3. 3849. Maximum Bitwise XOR After Rearrangement](https://leetcode.com/problems/maximum-bitwise-xor-after-rearrangement/) ✅
```python
class Solution:
    def maximumXor(self, s: str, t: str) -> str:

        zero_count = 0
        one_count = 0
        for c in t:
            if c == '0':
                zero_count += 1
            else: 
                one_count += 1

        res = []

        for c in s:
            if c == '0':
                if one_count > 0: # there is a '1', we will try to greedily maximise
                    res.append('1')
                    one_count -= 1
                else: 
                    res.append('0')
                    zero_count -= 1
            else: 
                if zero_count > 0: # there is a '0', we will try to maximise
                    res.append('1')
                    zero_count -= 1
                else: 
                    res.append('0')
                    one_count -= 1
                    
        return "".join(res)
```

[4. 3850. Count Sequences to K](https://leetcode.com/problems/count-sequences-to-k/) ❌
```python
from math import gcd
class Solution:
    def countSequences(self, nums: List[int], k: int) -> int:
        res = 0
        num, den = 1, 1
        n = len(nums)

        def reduce_pair(a, b):
            g = gcd(a, b)
            a //= g
            b //= g

            return a, b
        
        def backtrack(i): 
            nonlocal res, num, den
            if i == n: 
                if num == k * den:
                    res += 1
                return
                    
            curr = nums[i]
            num_copy, den_copy = num, den
            # multiple
            num, den = reduce_pair(num * curr, den)
            backtrack(i + 1)
            num, den = num_copy, den_copy
            
            # division, safe as there is no division by 0
            num, den = reduce_pair(num, den * curr)
            backtrack(i + 1)
            num, den = num_copy, den_copy

            # leave val unchanged
            backtrack(i + 1)

        backtrack(0)
        return res
```

during the contest i correctly identified this problem as a search problem, and each operation can be seen as a decision on the decision tree

attempetd to conduct a complete search using a backtracking algorithm, initially i did not have the gcd logic, and just used the python built in division method. however i quickly realised there is a floating point drift problem where multiple divisions end up (exacerbated by the backtracking which causes multiple division) causing the result to drift away (small floating point errors add up)

the gcd function only uses multiplication and finding the gcd of the num and den by doing whole number division, avoiding the floating point drift

my solution is correct but fails the time constraint. 

there is a new pattern, known as man in the middle search, which i was not aware to. 

so we need to answer how does MITM search work and why this pattern can be applied to this pattern.

MITM search