function gcd(a, b) {
    let bn, divider; //biggest number
    if (a > b) bn = a; else bn = b;
    for (let i = 2; i < bn; i++) {
        if (a % i === 0 && b % i === 0) divider = i;
    }

    return divider;
}

console.log(gcd(100, 16))
console.log(gcd(100, 20))
console.log(gcd(16, 256))
console.log(gcd(100, 256))