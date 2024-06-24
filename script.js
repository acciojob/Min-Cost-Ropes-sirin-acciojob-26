function mincost(arr) {
    if (arr.length <= 1) {
        return 0; // If there's one or no rope, no cost is needed.
    }

    // Sort the array initially
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    while (arr.length > 1) {
        // Take the two smallest ropes
        let firstMin = arr.shift();
        let secondMin = arr.shift();
        
        // Cost to connect these two ropes
        let cost = firstMin + secondMin;
        totalCost += cost;

        // Insert the new rope back into the sorted position in the array
        // This can be optimized but for simplicity we'll use a loop
        let inserted = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > cost) {
                arr.splice(i, 0, cost);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            arr.push(cost);
        }
    }

    return totalCost;
}
