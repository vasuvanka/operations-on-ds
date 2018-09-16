// write a function to accept 3 arguments  C + C  which will result as CC
const romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function deromanize(str) {
    if (str == null) return -1;
    var num = romans[str.charAt(0)];
    var pre, curr;

    for (var i = 1; i < str.length; i++) {
        curr = romans[str.charAt(i)];
        pre = romans[str.charAt(i - 1)];
        if (curr <= pre) {
            num += curr;
        } else {
            num = num - pre * 2 + curr;
        }
    }

    return num;
}

function romanize(num) {
    const {
        str
    } = Object.keys(romans).reduce(function (acc, ch) {
        acc.str += ch.repeat(acc.num / romans[ch]);
        acc.num %= romans[ch];
        return acc;
    }, {
        str: '',
        num: num
    });
    return str;
}

function doMath(operand1, operator, operand2) {
    const result = eval(`${deromanize(operand1) + operator + deromanize(operand2)}`)
    return romanize(result);
}

// console.log(doMath('C', '+', 'C'));