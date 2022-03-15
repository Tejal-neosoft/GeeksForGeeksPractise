let marks = {}

marks['samiksha'] = 40;
let a = "samiksha", b = "samiksha"
marks[a] = 20;
marks[b] = 20;

console.log(marks)
console.log("after usng symbol")
let sym1 = Symbol('samiksha')
let sym2 = Symbol('samiksha')
marks[sym1] = 40;
marks[sym2] = 50;
console.log(marks)

