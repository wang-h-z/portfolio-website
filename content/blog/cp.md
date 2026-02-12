---
title: "cp megathread"
project: "competitive programming"
summary: "competitive programming looks fun"
author: "me"
date: "22 Jan 2026"
readTime: "1 min read"
tags: []
---

# cp megathread

wanted to start learning c++, in general i also really just enjoy leetcoding and was super inspired and interested by competitive programming concepts and the math/algos involved so naturally i wanted to start trying out some cp

this page will just cover mostly some technicals and algorithms i learnt from

resources that i'll be mainly interacting with: 
1. [competitive programming handbook](https://cses.fi/book/book.pdf)
2. [cp31 sheet](https://www.tle-eliminators.com/cp-sheet)

## content page
- 1. runtime analysis
- 2. sorting 


### 1. runtime analysis

#### estimating efficiency

| Input Size | Required Time Complexity |
|------------|-------------------------|
| n ≤ 10 | O(n!) |
| n ≤ 20 | O(2ⁿ) |
| n ≤ 500 | O(n³) |
| n ≤ 5000 | O(n²) |
| n ≤ 10⁶ | O(n log n) or O(n) |
| n is large | O(1) or O(log n) |

#### maximum subarray sum

we wil use this simple subarray problem to illustrate how to improve the runtime of an algorithm sequentially

