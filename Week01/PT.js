function c(...a) {
    console.log(...a)
}



let arr = ["Apple", "Iphone", "Santi", "Armor", "Boom"]

let newarr = arr.map(s => s.toUpperCase().split("").sort())
c(newarr)