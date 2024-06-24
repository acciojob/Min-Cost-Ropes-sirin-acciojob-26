function minCost(arr) {
    // Sort the array
    arr.sort((a, b) => a - b);
    
    let totalCost = 0;
    
    while (arr.length > 1) {
        // Get the two smallest elements and add them
        let temp = arr[0] + arr[1];
        totalCost += temp;
        
        // Remove the two smallest elements from the array
        arr = arr.slice(2);
        
        // Find the correct index to insert 'temp' to keep the array sorted
        let index = binarySearch(arr, temp);
        
        // Insert 'temp' at the found index
        arr.splice(index, 0, temp);
    }
    
    return totalCost;
}

// Binary search function to find the correct index
function binarySearch(arr, value) {
    let low = 0;
    let high = arr.length;
    
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < value) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    
    return low;
}