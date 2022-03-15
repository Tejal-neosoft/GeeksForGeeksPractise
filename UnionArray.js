const doUnion = (a, b) => {
    var object = {};

    for (var i = 0; i <= a.length - 1; i++) {
        object[a[i]] = a[i];
    }


    for (var i = 0; i <= b.length - 1; i++) {
        object[b[i]] = b[i];
    }
    var ret = []

    for (var i in object) {
        if (object.hasOwnProperty(i))
            ret.push(object[i]);
    }

    return ret;
}
let arr1 = [85, 25, 1, 32, 54, 6]
let arr2 = [85, 2]
console.log(doUnion(arr1, arr2))