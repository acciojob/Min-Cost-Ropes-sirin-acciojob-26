function mincost(arr)
{ 
//write your code herefunction mincost(arr) {
    // Helper function to create a min-heap
    function MinHeap() {
        this.heap = [];

        this.insert = function (val) {
            this.heap.push(val);
            this.bubbleUp();
        };

        this.extractMin = function () {
            const min = this.heap[0];
            const end = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = end;
                this.sinkDown(0);
            }
            return min;
        };

        this.bubbleUp = function () {
            let index = this.heap.length - 1;
            const element = this.heap[index];

            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                const parent = this.heap[parentIndex];

                if (element >= parent) break;
                
                this.heap[index] = parent;
                this.heap[parentIndex] = element;
                index = parentIndex;
            }
        };

        this.sinkDown = function (index) {
            const length = this.heap.length;
            const element = this.heap[index];
            while (true) {
                let leftChildIndex = 2 * index + 1;
                let rightChildIndex = 2 * index + 2;
                let leftChild, rightChild;
                let swap = null;

                if (leftChildIndex < length) {
                    leftChild = this.heap[leftChildIndex];
                    if (leftChild < element) {
                        swap = leftChildIndex;
                    }
                }

                if (rightChildIndex < length) {
                    rightChild = this.heap[rightChildIndex];
                    if (
                        (swap === null && rightChild < element) ||
                        (swap !== null && rightChild < leftChild)
                    ) {
                        swap = rightChildIndex;
                    }
                }

                if (swap === null) break;

                this.heap[index] = this.heap[swap];
                this.heap[swap] = element;
                index = swap;
            }
        };
    }

    const heap = new MinHeap();
    let totalCost = 0;

    // Insert all rope lengths into the min-heap
    for (let length of arr) {
        heap.insert(length);
    }

    // Continue connecting ropes until only one rope remains
    while (heap.heap.length > 1) {
        const firstMin = heap.extractMin();
        const secondMin = heap.extractMin();
        const cost = firstMin + secondMin;
        totalCost += cost;
        heap.insert(cost);
    }

    return totalCost;
}
// return the min cost
  
}

module.exports=mincost;
