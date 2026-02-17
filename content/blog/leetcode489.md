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

[2. 3843. First Element with Unique Frequency](https://leetcode.com/problems/first-element-with-unique-frequency/)

```python
```
