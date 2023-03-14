
let n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0, n6 = 0
let i = 0
while ((n1 < 10) && (n2 < 10) && (n3 < 10) && (n4 < 10) && (n5 < 10) && (n6 < 10)) {

    dienum = (Math.floor(Math.random() * 6) + 1)
    switch (dienum) {
        case 1:
            n1++;
            break;
        case 2:
            n2++;
            break;
        case 3:
            n3++;
            break;
        case 4:
            n4++;
            break;
        case 5:
            n5++;
            break;
        case 6:
            n6++;
            break;
    }

}
let rolldie = new Map()
rolldie.set(1, n1)
rolldie.set(2, n2)
rolldie.set(3, n3)
rolldie.set(4, n4)
rolldie.set(5, n5)
rolldie.set(6, n6)

let text = "";
let max = 0;
let min = 10;
let maxNum;
let minNum;
rolldie.forEach(function (value, key) {
    console.log(`key:${key}  value:${value}`)
    if (value > max) {
        max = value
        maxNum = key
    }
    if (value < min) {
        min = value
        minNum = key
    }
})
console.log(`Maximum times repeated number = ${maxNum}`)
console.log(`Minimum times repeated number = ${minNum}`)



