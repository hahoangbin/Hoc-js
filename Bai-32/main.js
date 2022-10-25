
// Object constructor - Xây dựng đối tượng

var User = function(firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    this.getName = function() {
        return `${this.firstName} ${lastName}`
    }
}

var author = new User('Ha', 'Bin', 'avatar')
var user = new User('Vu', 'Han', 'avatar')

author.title = 'Chia sẻ tại F8'
user.comment = 'liệu có khoá asp.net k ad'

console.log(author)
console.log(user)