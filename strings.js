// 1) How to Print duplicate characters from String?

function RemoveDuplicateChars(s) {
    s = s.replace(' ', '').split('');
    let obj = {};
    s.forEach(c => {
        obj[c] = (obj[c] || 0) + 1;
    });
    return Object.keys(obj).join('');
}

// console.log(RemoveDuplicateChars("hello world"))

// 2) How to check if two Strings are anagrams of each other?  anagram means a word formed by other word , rasp => spar

function checkAnagrams(s1, s2) {
    if (s1.length !== s2.length)
        return false;
    s1 = s1.split('');
    s2 = s2.split('');
    let s1Obj = {};
    s1.forEach(c => {
        s1Obj[c] = (s1Obj[c] || 0) + 1;
    });
    let s2Obj = {};
    s2.forEach(c => {
        s2Obj[c] = (s2Obj[c] || 0) + 1;
    });

    return compareObjects(s1Obj, s2Obj);
}

function compareObjects(o1, o2) {
    if (Object.keys(o1).length !== Object.keys(o2).length) {
        return false;
    }
    for (const key in o1) {
        if (o1.hasOwnProperty(key)) {
            if (o1[key] !== o2[key]) {
                return false;
            }
        }
    }
    for (const key in o2) {
        if (o2.hasOwnProperty(key)) {
            if (o1[key] !== o2[key]) {
                return false;
            }
        }
    }
    return true;
}

// console.log(checkAnagrams("vasu", "vsau"));

// 3) Compare Objects upto one level 
// const obj1 = {
//     name: 'vasu'
// };
// const obj2 = {
//     name: 'vasu'
// };

// console.log(compareObjects(obj1, obj2));

// 4) 3) How to program to print first non repeated character from String?

function printNonRepeatedChars(s) {
    let obj = {};
    s.split('').forEach(k => obj[k] = (obj[k] || 0) + 1);
    return Object.keys(obj).filter(k => obj[k] === 1).join('');
}

// console.log(printNonRepeatedChars('vasuvaaa'));

// 4) How to reverse String in Java using Iteration and Recursion?

function reverse(s) {
    return s.split('').reverse().join('');
}

function reverseRecursive(s, rs = '') {
    if (s.length === 0) {
        return rs;
    }
    const sub = s.split().pop();
    return reverse(s, rs + sub);
}
// console.log(reverse('vasu'));
// console.log(reverseRecursive('vasu'));

// 5) How to check if a String contains only digits?

function checkForDigits(s) {
    const num = [];
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (Number(element)) {
            num.push(element);
        }
    }
    if (num.length === 0) {
        return false;
    } else {
        return num.join(',');
    }
}

// console.log(checkForDigits("hello123"));

// 6) How to find duplicate characters in a String?

function findDuplicateChars(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        const e = s[i];
        obj[e] = (obj[e] || 0) + 1;
    }
    s = '';
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] > 1) {
                s += key;
            }
        }
    }
    return s;
}

// console.log(findDuplicateChars('vasuuv'))

// 7) How to count number of vowels and consonants in a String?

function findVowelsAndConsonants(s) {
    s = s.replace(' ', '');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let v = 0;
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            ++v;
        } else {
            ++c;
        }
    }
    return {
        vowels: v,
        consonants: c
    };
}

// console.log(findVowelsAndConsonants('vasu vanka'))

// 9) How to replace each given character to other e.g. blank with %20?

function encodeString(s) {
    return escape(s);
}

// console.log(encodeString('vasu vanka'))

// 10) How to find all permutations of String?

function permutationsOfString(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i = 0; i < string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue; // skip it this time

        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
        for (var subPermutation of permutationsOfString(remainingString))
            permutations.push(char + subPermutation);

    }
    return permutations;
}

// console.log(permutationsOfString('abcd'));

// 11) How to reverse words in a sentence without using library method?

function reverseWordsOfString(s) {
    s = s.split(' ');
    return s.reverse().join(' ');
}

// console.log(reverseWordsOfString('hello world'))

// 12) How to check if String is Palindrome?

function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}

// console.log(isPalindrome('aba'))

// 13) How  to return highest occurred character in a String?
function getHighestRepeatedChar(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        const e = s[i];
        obj[e] = (obj[e] || 0) + 1;
    }
    let k = Object.keys(obj)[0];
    let hobj = {
        key: k,
        value: obj[k]
    }
    for (const key in obj) {
        if (obj[key] > hobj.value) {
            hobj.key = key;
            hobj.value = obj[key]
        }
    }

    return hobj;
}

// console.log(getHighestRepeatedChar('heeeeeeeeeeeeeeeeeloooooooo'));

// 14) Write a program to remove a given characters from String ?

function removeCharFromStringUsingBuiltInMethods(s, c) {
    const a = new RegExp(c, "g");
    return s.replace(a, '');
}

function removeCharFromString(s, c) {
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            s.splice(i, 1);
        }
    }

    return s.join('');
}

// console.log(removeCharFromStringUsingBuiltInMethods('vasuvanka', 'v'))
// console.log(removeCharFromString('vasuvanka', 'v'))

// 15) How to sort String on their length ?

function sortStringArray(strs) {
    return strs.sort((a, b) => {
        return a.length > b.length;
    })
}

// const str = [
//     'vasu',
//     'vanka',
//     'a'
// ]

// console.log(sortStringArray(str));