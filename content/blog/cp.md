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
int n = arr.size();
int best = 0;
for (int i = 0; i < n; i++) {
    for (int j = i; j < n; j++) {
        int curr = 0;
        for (int k = i; k <= j; k++) {
            curr += arr[k];
        }
        best = max(curr, best);
    }
}

return best;
```

for this algorithm, we iterate through every subarray and accumulate the sum with a loop using the curr variable. this will give us an O(n³) runtime algorithm. 

#### **second iteration:**

```c++
int n = arr.size();
int best = 0;
for (int i = 0; i < n; i++) {
    int curr = 0;
    for (int j = i; j < n; j++) {
        curr += arr[j];
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
int n = arr.size();
int best = 0;
int curr = 0;
for (int i = 0; i < n; i++) {
    curr = max(curr + arr[i], arr[i]);
    best = max(best, curr);  
}
return best;
```





### 2. sorting

sorting is a fundamental algorithm design problem. the general efficent sorting algo works in O(n log n). let's cover some O(n²) algorithms first

### bubble sort

bubble sort consists of n rounds. at each round, we iterate through the elements of the array, when two elements are found not in its right order, we swap them

```c++
int n = arr.size();
for (int i = 0; i < n; i++) {
    for (int j = 0; j <  n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            swap(arr[j], arr[j + 1]);
        }
    }
}
```

after k rounds, the k largest elements will be in the correct positions.
this describes the **invariant** of the sorting algorithm.

best case: O(n²)
average case: O(n²)
worst case: O(n²)

runtime across all 3 stages do not change since we run both loops regardless of what happens 

### insertion sort

insertion sort inserts (as the name suggests) each element in the array iteratively into its correct position in a sorted portion of the list, we slowly expand the sorted group as the sorting rounds go on.

```c++
// assume the first element is part of the sorted portion
int n = arr.size();
for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;
    while (j >= 0 && arr[j] > key) { // find correct index of current key
        arr[j + 1] = arr[j];
        j -= 1;
    }
    arr[j + 1] = key; // this index will be the correct position of the current key
}
```

best case: O(n), if list is sorted
average case: O(n²), if list is random
worst case: O(n²), if list is reversed

### selection sort

selection sort selects (as the name suggests) the smallest/largest (we will choose smallest here) element from its unsorted portion and swaps it with the first element in its unsorted portion. we expand the sorted portion by running this algorithm n rounds

```c++
int n = arr.size();
for (int i = 0; i < n - 1; i++) {
    int min_idx = i;
    for (int j = i + 1; j < n; j++) { // find the minimum value of this sorted portion
        if (arr[j] < arr[min_idx]) {
            min_idx = j;
        }
    } 
    swap(arr[min_idx], arr[i]);
}
```

best case: O(n²)
average case: O(n²)
worst case: O(n²)


### merge sort

merge sort is a divide and conquer style of sorting algorithm which recursively (in this version) merges (wow what a suprise) sorted portions of a broken down array

at each round, we split the array into half, this creates a total of O(logn) levels. 

within each level, we compare every element in the two split arrays and combine them into one sorted chunk. this takes O(n) comparisons

this gives us our final runtime of O(nlogn)

```c++
#include <bits/stdc++.h>
using namespace std;

vector<int> merge(vector<int> left, vector<int> right) {
    vector<int> result;
    int i = 0, j = 0;

    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j]) {
            result.push_back(left[i]);
            i++;
        } else {
            result.push_back(right[j]);
            j++;
        }
    }

    while (i < left.size()) {
        result.push_back(left[i]);
        i++;
    }

    while (j < right.size()) {
        result.push_back(right[j]);
        j++;
    }

    return result;
}

vector<int> mergeSort(vector<int> arr) {
    if (arr.size() <= 1)
        return arr;

    int mid = arr.size() / 2;

    vector<int> left(arr.begin(), arr.begin() + mid); // split
    vector<int> right(arr.begin() + mid, arr.end());

    left = mergeSort(left); 
    right = mergeSort(right);

    return merge(left, right);
}
```

### lower bound of sorting

it is not possible to get a comparative sorting algorithm that does better than O(nlogn) unless we use additional information about the array

### counting sort

if we have an array of size n that and the range of values is 0 .. c where c = O(n), we can use a "bookkeeping" array of size n to count (wow) the number of occurences of the values and build the sorted array from there

```c++
int max_val = *max_element(arr.begin(), arr.end());
vector<int> count(max_val + 1, 0);

for (int x : arr) {
    count[x] += 1;
}

int idx = 0;
for (int i = 0; i <= max_val; i++) {
    while (count[i] > 0) {
        arr[idx] = i;
        idx++;
        count[i]--;
    }
}
```

this gives a O(n) algo with O(n) space incurred. 

### binary search

searching for an element usually requires scanning the entire array, which is O(n), however if the array is sorted, we can use a divide and conquer algorithm know as binary search to search for an element

### method 1

this is the traditional D&C binary search algorithm that halves the search space at each round

```c++
int n = arr.size();
int l = 0;
int r = n - 1;

while (l <= r) {
    int mid = l + (r - l) / 2;
    if (arr[mid] == target) {
        return mid;
    }
    if (target < arr[mid]) {
        r = mid - 1;
    } else {
        l = mid + 1;
    }
}

return -1;
```

### method 2
there is another version of binary search. we will go through the arary from left to right, making an initial jump of n/2, at each tep, we half the jump length until it is 1. 

```c++
int n = arr.size();
int i = 0;
for (int j = n / 2; b >= 1; b /= 2) {
    while (i + j < n && array[i + j] <= x) i += j;
}

if (array[i] == target) return i;
return -1; // not found
```
