
function c(...a) {
    console.log(...a)
}

const Bank = [
    { price: 20, amount: 5 },
    { price: 100, amount: 2 },
    { price: 500, amount: 4 },
]

let total = 0

Bank.forEach(value => {
    const subTotal = value.price * value.amount
    c(`${value.price}:`, subTotal)
    total += subTotal
})

console.log("Total:", total)
