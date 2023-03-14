
let arr = [-1, 2, -4, 1, -1, 3, -3, 5]
function findTriplets(arr) {
    let found = false;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    console.log(arr[i]);
                    console.log(arr[j]);
                    console.log(arr[k]);
                    console.log(" ");
                    found = true;
                }
            }
        }
        if (found === false) {
            document.write(" not exist ");
        }
    }
}
findTriplets(arr);
