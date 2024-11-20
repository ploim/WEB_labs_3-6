function poww(x, y) {
    if (y === 0) return 1;
    if (y < 0) return "Степень должна быть больше 0!";
    if (y%1 != 0) return "Степень должна быть натуральным числом!";

    let result = x**y;

    return result;
}

console.log(poww(2, 0))
console.log(poww(2, 2))
console.log(poww(3, 3))
console.log(poww(10, 4))

console.log(poww(2, -1))
console.log(poww(2, 1.5))