Array.prototype.reduce2 = function (callback, resulf) {
    let i = 0
    if (arguments.length < 2) {
        i = 1 
        resulf = this[0]
    }
    for (; i < this.length; i++) {
        resulf = callback(resulf, this[i], i, this)
    }
    return resulf
}

const numbers = [1, 2, 3, 4, 5]

const resulf = numbers.reduce2((total, number, index, array) => {
    return total +  number
}, 100)

console.log(resulf)