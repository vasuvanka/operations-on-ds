class Node {
    constructor(weight, src, destination) {
        this.weight = weight;
        this.src = src;
        this.destination = destination;
    }
}

function sort(Node1, Node2) {
    return Node1.weight > Node2.weight;
}

function checkForCycle(list) {
    let v = new Map();
    list.forEach(node => {
        if (v.has(node.src + ':' + node.destination)) {
            v.set(node.src + ':' + node.destination, v.get(node.src + ':' + node.destination) + 1);
        }
    });
}