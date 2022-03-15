function add(fn) {
    return function (s) {
        var gg = s + ' is Best';
        fn(gg);
    }
}
// Decorated function
function print(s) {
    console.log(s)
}
// Calling "add" 
var g = add(print);
g('GFG');

// undefined and  null
// for each and map
// cloned