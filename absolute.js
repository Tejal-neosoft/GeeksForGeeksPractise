let num1 = 28.3;
let num2 = 19.8;

const equal = (n1, n2, e) => {
    console.log(Math.abs(n2 - n1))
    console.log(Math.abs(n2 - n1) < e)
}
equal(num1, num2, 9.2) 