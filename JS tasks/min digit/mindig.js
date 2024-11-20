function MinDigit(x) {
    if (x === 0) return 0;
    if (x % 1 != 0) return "Число должно быть целым!";
    if (x < 0) x*= -1; // отриц. числа также являются целыми

    let mdig = Infinity;

    while (x > 0) {
        let ld = x%10; //last digit
        if (ld < mdig) mdig = ld;
        x = (x - x%10)/10; 
    }

    return mdig;
}

console.log(MinDigit(10))
console.log(MinDigit(1023456789))
console.log(MinDigit(-123456789))
console.log(MinDigit(82659994))
console.log(MinDigit(68))

console.log(MinDigit(0))
console.log(MinDigit(1.5))