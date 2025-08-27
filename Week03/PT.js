
function c(...a) {
    console.log(...a)
}

let Sum = (...a) => a.reduce((sum,num) => sum + num,0) 

console.log(Sum())
console.log(Sum(1))
console.log(Sum(1,2))
console.log(Sum(1,2,3))