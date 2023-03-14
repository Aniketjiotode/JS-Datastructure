function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var arr = new Array(10);
for (i = 0; i < 10; i++) {
    arr[i] = getRndInteger(100, 999)
}
arr.forEach(x => console.log(x))

let secondlargNum = findSecondLargestElem(arr);
console.log(`second largest number=${secondlargNum}`)
let secondSmallNum = findSecondSmallestElem(arr)
console.log(`second smallest number=${secondSmallNum}`)

function findSecondLargestElem(array) {
    let first = array[1], second = array[1];

    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] > first) {
            second = first;
            first = array[i];
        }
        else if (array[i] > second && array[i] != first) {
            second = array[i];
        }
    }
    return second
}
function findSecondSmallestElem(array) {
    let first = array[1], second = array[1];
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] < first) {
            second = first;
            first = array[i];
        }
        else if (array[i] < second && array[i] != first) {
            second = array[i];
        }
    }
    return second
}
console.log("Finding second smallest and Largest number by sorting Array")
console.log("sorted Array")
let sortedarr = sort(arr)
sortedarr.forEach(x => console.log(x))
function sort(arr) {
    let swap = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1; j++) {
            if (arr[i] < arr[j]) {
                swap = arr[i]
                arr[i] = arr[j]
                arr[j] = swap
            }
        }
    }
    return arr
}
console.log(`second largest number=${sortedarr[8]}`)
console.log(`second smallest number=${sortedarr[1]}`)