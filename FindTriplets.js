const triplets = (arr, n) => {
    let found = false;
    arr.sort()
    for (let i = 0; i < n - 1; i++) {
        let left = i + 1;
        let right = n - 2;
        let x = arr[i];
        while (left < right) {
            console.log("in while")
            if (x + arr[left] + arr[right] == 0) {
                console.log("found triplets", x, arr[left], arr[right]);
                found = true
                return 0
            }
            else if (x + arr[left] + arr[right] < 0) {
                left++;
            }
            else {
                right++;
            }
        }
        if (found == false) {
            console.log("No triplets")
            return 1
        }


    }


}
let arr = [60, -65, 5, -21, 8, 93]
console.log("before function")
triplets(arr, 6)
console.log("after function")
