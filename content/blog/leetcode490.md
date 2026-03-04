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
```