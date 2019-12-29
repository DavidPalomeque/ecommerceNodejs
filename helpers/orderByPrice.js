const orderingFunctions = {}

orderingFunctions.highToLow = (a , b) => {
    if (a.price < b.price) return 1
    if (a.price > b.price) return -1
    return 0
}

orderingFunctions.lowToHigh = (a , b) => {
    if (a.price > b.price) return 1
    if (a.price < b.price) return -1
    return 0
}

module.exports = orderingFunctions