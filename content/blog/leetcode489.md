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


