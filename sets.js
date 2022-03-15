const mySet1 = new Set([1, 2, 3, 4, 5])
const mySet2 = new Set([3, 4, 5, 6])
console.log(mySet1)
console.log(mySet2)
function isSuperset(mySet1, mySet2) {
    for (let elem of mySet2) {
        console.log(elem)
        if (!mySet1.has(elem)) {
            return false
        }
    }
    return true

}
console.log(isSuperset(mySet1, mySet2))

// in and of difference

function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}
const setA = new Set([1, 2, 3, 4])
const setB = new Set([2, 3, 4])


console.log(isSuperset(setA, setB))