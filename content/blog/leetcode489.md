---
title: "leetcode contest 489"
project: "leetcode"
summary: "one step forward, two steps back"
author: "me"
date: "15 Feb 2026"
readTime: "1 min read"
tags: []
---

this [week's](https://leetcode.com/contest/weekly-contest-489/) problem list had:

1. [3842. Toggle Light Bulbs](https://leetcode.com/problems/toggle-light-bulbs/description/) ✅
2. [3843. First Element with Unique Frequency](https://leetcode.com/problems/first-element-with-unique-frequency/) ✅
3. [3844. Longest Almost-Palindromic Substring](https://leetcode.com/problems/longest-almost-palindromic-substring/) ❌
4. [3845. Maximum Subarray XOR with Bounded Range](https://leetcode.com/problems/maximum-subarray-xor-with-bounded-range/) ❌

current rating: 1535

### thought processes

[1. 3842. Toggle Light Bulbs](https://leetcode.com/problems/toggle-light-bulbs/description/) ✅

```python
class Solution:
    def toggleLightBulbs(self, bulbs: list[int]) -> list[int]:
        res = set()

        for bulb in bulbs:
            if bulb in res:
                res.remove(bulb)
            else: 
                res.add(bulb)

        res = sorted(list(res))
        return res
```

relatively straightforward question and solution

[2. 3843. First Element with Unique Frequency](https://leetcode.com/problems/first-element-with-unique-frequency/) ✅

```python
from collections import defaultdict
class Solution:
    def firstUniqueFreq(self, nums: List[int]) -> int:
        count_to_index = defaultdict(list)
        element_to_count = defaultdict(int)
        first_i = defaultdict(int)
        
        for i, num in enumerate(nums):
            element_to_count[num] += 1
            if num not in first_i:
                first_i[num] = i
                
        for num, freq in element_to_count.items(): 
            count_to_index[freq].append(first_i[num])

        unique = []
        # print(count_to_index)
        for count, indexes in count_to_index.items():
            if len(indexes) == 1:
                unique.append(indexes[0])

    
        return nums[sorted(unique)[0]] if unique else -1
```

managed to solve this question but was disappointed in myself for trying to overthink the question after rethinking about my solution after the contest. i definitely knew that the problem was hinting at an O(n) optimal solution but i just couldn't get it due to them needing the first unique freq number. i realised afterwards i could've literally just reran a loop from the beginning and just return a valid answer from there

the algorithm/concept behind the solution itself is relatively straightforward, we just maintain a some form of counter (hash table) to count the frequency of the elements, then we can use that information to determine which frequency is unique

ended up aiming for correctness instead of trying to be stuck at this part for too long so i gave an O(nlogn) algorithm. 

```python
# acceptable O(n) solution
from collections import Counter
class Solution:
    def firstUniqueFreq(self, nums: List[int]) -> int:
        freq = Counter(nums)
        freq_counts = Counter(freq.values())

        for num in nums:
            if freq_counts[freq[num]] == 1:
                return num
        
        return -1
```

3. [3844. Longest Almost-Palindromic Substring](https://leetcode.com/problems/longest-almost-palindromic-substring/) ❌

```python
class Solution:
    def almostPalindromic(self, s: str) -> int:
        n = len(s)
        s = 'A' + s + 'A'
        def isAlmostPalindrome(l, r):
            resL = l
            resR = r
            oneChance = True

            while l >= 1 and r <= n and (oneChance or s[l] == s[r]):
                if s[l] != s[r]:
                    oneChance = False
                    if l - 1 >= 0 and s[l - 1] == s[r]: # pick a correct way to go
                        l -= 1 
                    elif r + 1 < n + 2 and s[r + 1] == s[l]:
                        r += 1
                    else: 
                        if s[r + 1] == 'A':
                            r += 1
                        elif s[l - 1] == 'A':
                            l -= 1
                else:
                    # print(l, r)
                    resL = l
                    resR = r
                    l -= 1
                    r += 1
            if resR == n and resL - 1 >= 1 and oneChance:
                resL -= 1
            elif resL == 1 and resR + 1 <= n and oneChance: 
                resR += 1
            return resR - resL + 1
        
        res = -1
        for i in range(1, n + 1):
            odd = isAlmostPalindrome(i, i)
            even = isAlmostPalindrome(i, i + 1)
            # print(odd, even)
            res = max(res, odd, even)

        return res # answer should always be >= 2
```

this question took the bulk of my contest time, the pattern is extremely similar to [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/), but with a twist i unfortuantely have not encountered before. in terms of what the algorithm should do, i knew it would follow the prev mentioned problem, and iterate through every index and expand to find the almost palindrome while accounting for odd and even cases. the main crux of the issue came in finding the longest almost palindrome at a given index.

i eventually split the finding longest almost palindrome helper into distinct cases. if the current index is a valid palindrome, we just expand. once we reach an index that is invalid (s[l != s[r]]), then we need to make a decision, do we skip left or do we skip right? i initially thought that only one of these decisions is optimal, but actually we need to consider both cases. additionally, there is one final insane crux that i had to deal with which was the "zabba" and "abbc" cases, where just skipping an element is not good enough. when l/r is at the bounds of one side of the array but the other index r/l respetively is not, then we can actually "extend" the palindrome by one char if we decided NOT to use the skip, this was the implementation of the two if blocks at the end. 

unfortunately this solution did not pass as i firstly did not consider the optimal almost palindrome from choosing either left or right chars to skip and also couldnt fully encompass the "extend" case. 

the bottom solution is my improvement which is an acceptable O(n^2) solution

```python
class Solution:
    def almostPalindromic(self, s: str) -> int:
        n = len(s)

        def almP(l, r):
            resL = 0
            resR = 0
            while l >= 0 and r < n:
                if s[l] != s[r]:
                    core_len = resR - resL + 1

                    # i can minimally just extend my current best palindromic length by 1 value since i am within bounds of array -> 'abca' case
                    best = core_len
                    if resL > 0 or resR < n - 1:
                        best = core_len + 1

                    # mismatch at (baseL, baseR)
                    baseL, baseR = l, r

                    # skip left: delete s[baseL], continue matching from (baseL-1, baseR)
                    l1, r1 = baseL - 1, baseR
                    c1_l, c1_r = resL, resR
                    while l1 >= 0 and r1 < n and s[l1] == s[r1]:
                        c1_l, c1_r = l1, r1
                        l1 -= 1
                        r1 += 1

                    # skip right: delete s[baseR], continue matching from (baseL, baseR+1)
                    l2, r2 = baseL, baseR + 1
                    c2_l, c2_r = resL, resR
                    while l2 >= 0 and r2 < n and s[l2] == s[r2]:
                        c2_l, c2_r = l2, r2
                        l2 -= 1
                        r2 += 1

                    return max(
                        best,
                        c1_r - c1_l + 1,
                        c2_r - c2_l + 1
                    )

                else:
                    resL = l
                    resR = r
                    l -= 1
                    r += 1

            # end boundary -> this is for 'zabba' case
            core_len = resR - resL + 1
            if l < 0 and resR < n - 1:
                return core_len + 1
            if r >= n and resL > 0:
                return core_len + 1

            return core_len

        res = 0
        for i in range(n):
            res = max(res, almP(i, i), almP(i, i + 1))

        return res
```