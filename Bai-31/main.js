
// Object trong Javascript
var emailKey = 'email'
var myInfo = {
    name: 'Ha Bin',
    age: 23,
    address: 'Phu Tho, VN',
    [emailKey]: 'hahoangbin999@gmail.com',
    getName: function() {
        return this.name;
    }
}

console.log(myInfo.getName())