// 1. How to find the missing number in integer array of 1 to 100?
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10]

function findMissingNumber(arr) {
    let x = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (x - arr[i] !== 0) {
            return ++i;
        }
        x++;
    }

    return 'no missing number';
}

// console.log(findMissingNumber(arr));

// 2.How to find duplicate number on Integer

// const arr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 10]

function findDuplicateNumber(arr) {
    let obj = {};
    arr.forEach(e => {
        obj[e] = (obj[e] || 0) + 1;
    });
    for (const k in obj) {
        if (obj[k] > 1) {
            return k;
        }
    }
}

// console.log(findDuplicateNumber(arr))

// 3.How to check if array contains a number

// const arr = ['a', 2, 3, 4, 4, 5, 6, 7, 8, 10]

function checkArrayForInt(arr) {
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (!isNaN(Number(e))) {
            return e;
        }

    }
}

// console.log(checkArrayForInt(arr))

// 4.How to find largest and smallest number in unsorted

// const arr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 10]

function findSmallestAndGreatestNumbers(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

// console.log(findSmallestAndGreatestNumbers(arr));

// 5.How to find duplicate numbers

// const arr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 10]

function findDuplicateNumbers(arr) {
    let obj = {};
    arr.forEach(e => {
        obj[e] = (obj[e] || 0) + 1;
    });
    const d = [];
    for (const k in obj) {
        if (obj[k] > 1) {
            d.push(k);
        }
    }
    return d;
}

// console.log(findDuplicateNumbers(arr))

// 6.Write a program to find intersection of two sorted arrays

// const a1 = [1, 2, 3, 4];
// const a2 = [2, 3, 4, 5];

function findInterSectionArry(a1, a2) {
    let a = [];
    a1.forEach(n => {
        if (a2.includes(n)) {
            a.push(n)
        }
    })
    return a;
}

// console.log(findInterSectionArry(a1, a2))

// 7.How to remove a given element from array
const a1 = [1, 2, 3, 4];

function removeElement(a1, index) {
    a1.splice(index, 1);
    return a1;
}
// console.log(removeElement(a1, 1))

function insertEleAtGivenIndex(a1, index, value) {
    a1.splice(index, 0, value);
    return a1;
}

// console.log(insertEleAtGivenIndex(a1, 1, 5))

function removeAndInsertEleAtIndex(a1, index, value) {
    a1.splice(index, 1, value);
    return a1;
}

// console.log(removeAndInsertEleAtIndex(a1, 1, 5))