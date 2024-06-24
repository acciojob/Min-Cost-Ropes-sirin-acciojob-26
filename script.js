function minCost(arr) {
    // Edge case: If there's only one rope, no cost is needed
    if (arr.length <= 1) {
        return 0;
    }
    
    // Initialize a min-heap (using array operations)
    const minHeap = [];
    
    // Insert all elements of arr into minHeap
    for (let rope of arr) {
        minHeap.push(rope);
    }
    
    // Build the min-heap using sort to ensure min-heap property
    minHeap.sort((a, b) => a - b);
    
    let totalCost = 0;
    
    // Merge ropes until only one rope remains in the heap
    while (minHeap.length > 1) {
        // Extract the two smallest ropes
        let first = minHeap.shift();
        let second = minHeap.shift();
        
        // Calculate the cost to merge them
        let cost = first + second;
        totalCost += cost;
        
        // Insert the combined rope length back into the min-heap
        minHeap.push(cost);
        
        // Re-sort the min-heap to maintain the min-heap property
        minHeap.sort((a, b) => a - b);
    }
    
    return totalCost;
}

// Example usage:
console.log(minCost([4, 3, 2, 6]));  // Output: 29
console.log(minCost([1, 2, 3, 4, 5]));  // Output: 33