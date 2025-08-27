
function c(...a) {
    console.log(...a)
}

function item(items, maxbox) {
    if (items == 0) return items
    if (maxbox == 0) return 'Items per box must be greater than zero.'
    if (items / maxbox !== 0) {
        return Math.ceil(items / maxbox)
    }

}

c(item(10, 3))
c(item(25, 5))
c(item(0, 5))
c(item(10, 10))
c(item(10, 0))