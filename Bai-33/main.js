
/*
    Object prototype - Basic

    1. Prototype là gì?
    2. Sử dụng khi nào?
*/

function User(firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    this.getName = function() {
        return `${this.firstName} ${lastName}`
    }
}

User.prototype.className = 'F8'
User.prototype.getClassName = function() {
    return this.className
}

var user = new User('Ha', 'Bin', 'avatar 1')
var user2 = new User('Vu', 'Han', 'avatar 2')


console.log(user.className)
console.log(user2.getClassName())