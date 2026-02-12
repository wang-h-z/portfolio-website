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
- [1. runtime analysis](#1-runtime-analysis)
- [2. sorting](#2-sorting)

### 1. runtime analysis

#### **estimating efficiency**

| Input Size | Required Time Complexity |
|------------|-------------------------|
| n ≤ 10 | O(n!) |
| n ≤ 20 | O(2ⁿ) |
| n ≤ 500 | O(n³) |
| n ≤ 5000 | O(n²) |
| n ≤ 10⁶ | O(n log n) or O(n) |
| n is large | O(1) or O(log n) |

#### **maximum subarray sum**

we wil use this simple subarray problem to illustrate how to improve the runtime of an algorithm sequentially

input: {-1, 2, 4, -3, 5, 2, -5, 2}

output: 12 

explanation: the subarray {2, 4, -3, 5, 2,} will give the maximum sum

#### **first iteration:**

```c++
int n = input.size();
int best = 0;
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        int curr = 0;
        for (int k = i; k <= j; k++) {
            curr += input[k];
        }
        best = max(curr, best);
    }
}

return best;
```

for this algorithm, we iterate through every subarray and accumulate the sum with a loop using the curr variable. this will give us an O(n³) runtime algorithm. 

#### **second iteration:**

```c++
int n = input.size();
int best = 0;
for (int i = 0; i < n; i++) {
    int curr = 0;
    for (int j = i; j < n; j++) {
        curr += input[k];
        best = max(curr, best);
    }
}

return best;
```

it is easy to improve the runtime by simply just removing the inner loop. this gives us a O(n²) algorithm

#### **third iteration:**

to further improve the runtime to O(n), we can actually break this problem down to consider the subproblems in this question. 

consider finding a maximum subarray that ends at index k of an array. the maximum subarray is either:
1. just the subarray that contains element k
2. a subarray that ends at index k - 1, and includes index k. 

in simpler terms, we either choose to include a subarray from index k - 1, or we just pick k.

this gives rise to this one pass algorithm: 

```c++
int n = input.size();
int best = 0;
int curr = 0;
for (int i = 0; i < n; i++) {
    curr = max(curr + input[k], input[k]);
    best = max(best, curr);  
}
return best;
```




