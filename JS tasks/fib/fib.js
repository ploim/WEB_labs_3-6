function fibb(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    let a = 0;
    let b = 1;
    let c = 0;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}

// 0 1 1 2 3 5 8 13 21 34 55 89 144 ...
console.log(fibb(0))
console.log(fibb(1))

console.log(fibb(5))
console.log(fibb(10))
console.log(fibb(9))
console.log(fibb(11))