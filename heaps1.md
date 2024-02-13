# Deletion From Heap

**Problem Statement:**

You are given a Max Heap, represented as an array, and you need to implement a function to delete the maximum element from the Max Heap.

**Example:**
Let us consider the following max-heap that we created at the time of insertion

![image](https://pesto.b-cdn.net/pesto_candidate_files_prod/Heaps-13


Since we maintain the elements inside an array, we know that if directly delete from middle, the shift process only will take O(n) time and some more time to adjust elements as per the max heap property. 
Easiest way to delete an element from an array is from the last. 


To delete the elements from a heap, we follow the under-given steps â€“

- Search for the element to be deleted and swap it with the last element in the heap, letâ€™s say we want to delete 10. (Searching in the array can be optimized by keeping a hashmap)

![image](https://pesto.b-cdn.net/pesto_candidate_files_prod/Heaps-14)

Remove the element from the tree 

![image](https://pesto.b-cdn.net/pesto_candidate_files_prod/Heaps-15)


But now, the remaining heap is not a max-heap anymore. So, as the next step, we should heapify it once again. 

**Input**:

const maxHeapArray = [30, 15, 25, 10, 5, 7, 12, 20];

**Output**:

const updatedMaxHeapArray = deleteMaxElement(maxHeapArray);

console.log(updatedMaxHeapArray); // Output: [25, 15, 20, 10, 5, 7, 12]


**Solution in JavaScript:**

```javascript
function deleteMaxElement(maxHeapArray) {
    if (maxHeapArray.length === 0) {
        return [];
    }

    // Swap the maximum element with the last element
    [maxHeapArray[0], maxHeapArray[maxHeapArray.length - 1]] = [maxHeapArray[maxHeapArray.length - 1], maxHeapArray[0]];

    // Remove the maximum element (which is now at the end)
    const maxElement = maxHeapArray.pop();

    // Restore the Max Heap property
    heapifyDown(maxHeapArray, 0);

    return maxHeapArray;
}

function heapifyDown(heap, index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largestIndex = index;

    // Find the index of the largest value among the current node, left child, and right child
    if (leftChildIndex < heap.length && heap[leftChildIndex] > heap[largestIndex]) {
        largestIndex = leftChildIndex;
    }
    if (rightChildIndex < heap.length && heap[rightChildIndex] > heap[largestIndex]) {
        largestIndex = rightChildIndex;
    }

    // If the largest value is not the current node, swap them and recursively heapify down
    if (largestIndex !== index) {
        [heap[index], heap[largestIndex]] = [heap[largestIndex], heap[index]];
        heapifyDown(heap, largestIndex);
    }
}

// Example usage
const maxHeapArray = [30, 15, 25, 10, 5, 7, 12, 20];
const updatedMaxHeapArray = deleteMaxElement(maxHeapArray);
console.log(updatedMaxHeapArray); // Output: [25, 15, 20, 10, 5, 7, 12]
```

**Explanation:**
Certainly! Let's explain each line of code in the `deleteMaxElement` and `heapifyDown` functions:

```javascript
function deleteMaxElement(maxHeapArray) {
    if (maxHeapArray.length === 0) {
        return [];
    }
```

- The function `deleteMaxElement` begins by checking if the input `maxHeapArray` is empty. If it's empty (i.e., its length is 0), the function returns an empty array, as there's nothing to delete.

```javascript
    // Swap the maximum element with the last element
    [maxHeapArray[0], maxHeapArray[maxHeapArray.length - 1]] = [maxHeapArray[maxHeapArray.length - 1], maxHeapArray[0]];
```

- In this line, the function swaps the maximum element (which is at the root of the Max Heap, represented by `maxHeapArray[0]`) with the last element in the heap (represented by `maxHeapArray[maxHeapArray.length - 1]`). This step is essential for deleting the maximum element.

```javascript
    // Remove the maximum element (which is now at the end)
    const maxElement = maxHeapArray.pop();
```

- After swapping the maximum element with the last element, the function uses `pop()` to remove the maximum element from the array. Since the maximum element has been swapped to the end, it can be safely removed.

```javascript
    // Restore the Max Heap property
    heapifyDown(maxHeapArray, 0);
```

- After removing the maximum element, the `heapifyDown` function is called to restore the Max Heap property. It starts the heapify operation from the root (index 0) to maintain the Max Heap structure.

```javascript
    return maxHeapArray;
}
```

- Finally, the function returns the updated `maxHeapArray` after the maximum element has been deleted and the Max Heap property has been restored.

Now, let's explain the `heapifyDown` function:

```javascript
function heapifyDown(heap, index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largestIndex = index;
```

- The `heapifyDown` function takes two arguments: the `heap` (represented as an array) and the `index` of the current node to start the heapify operation.

- It calculates the indices of the left child (`leftChildIndex`) and the right child (`rightChildIndex`) based on the current node's index. The formula `2 * index + 1` gives the left child's index, and `2 * index + 2` gives the right child's index.

- `largestIndex` is initialized with the current node's index, assuming it is the largest among the current node, left child, and right child.

```javascript
    // Find the index of the largest value among the current node, left child, and right child
    if (leftChildIndex < heap.length && heap[leftChildIndex] > heap[largestIndex]) {
        largestIndex = leftChildIndex;
    }
    if (rightChildIndex < heap.length && heap[rightChildIndex] > heap[largestIndex]) {
        largestIndex = rightChildIndex;
    }
```

- These lines compare the values of the left and right children with the current node's value in the `heap` array.

- If the left child exists (i.e., `leftChildIndex` is within the array bounds) and its value is greater than the current largest value, it updates `largestIndex` to the left child's index.

- Similarly, if the right child exists (i.e., `rightChildIndex` is within the array bounds) and its value is greater than the current largest value, it updates `largestIndex` to the right child's index.

- After these comparisons, `largestIndex` contains the index of the largest value among the current node, left child, and right child.

```javascript
    // If the largest value is not the current node, swap them and recursively heapify down
    if (largestIndex !== index) {
        [heap[index], heap[largestIndex]] = [heap[largestIndex], heap[index]];
        heapifyDown(heap, largestIndex);
    }
}
```

- If `largestIndex` is different from the original `index`, it means that one of the child nodes had a larger value. In this case, the function swaps the values of the current node and the node at `largestIndex`.

- After the swap, the function calls itself recursively on the node at `largestIndex`. This recursive call continues the heapify operation downward, ensuring that the Max Heap property is maintained.

- If no swaps were made, the function terminates, as the Max Heap property is already satisfied.

This process continues until the Max Heap property is restored throughout the heap.