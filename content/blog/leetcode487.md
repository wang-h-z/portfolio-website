---
title: "leetcode contest 487"
project: "leetcode"
summary: "lowk got fried"
author: "me"
date: "2 Feb 2026"
readTime: "5 min read"
tags: []
---
## weekly contest 487

this [week's](https://leetcode.com/contest/weekly-contest-487/) problem list had:
1. [Count Monobit Integers](https://leetcode.com/problems/count-monobit-integers/) ✅
2. [Final Element After Subarray Deletions]() :x:
3. [Design Ride Sharing System]() ✅
4. [Longest Alternating Subarray]() :x:

 #### thought processes:

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
initially went with a solution that used division by 2 but realised it was much easier to just use math.log(). the intuition behind this question is to find the number of integers that are represented by all 1s (monobit) which are equal or lesser to n. these integers are always -1 from a power of 2 (more formally 2^k - 1). So for even cases of n, it is enough to just return the number of powers of 2 that is lesser or equal to n. for odd cases, it is abit trickier because the number itself could be a monobit integer, so we add 1 to n to see if it becomes a power of 2. the final "+1" at the end of both cases is to account for the monobit 0

2. 
