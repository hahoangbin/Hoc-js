/*
    1. Let, const  --> OK
    2. Template literals --> OK
    3. Multi-line string --> OK
    4. Arrow function đặt--> OK
    5. Classes --> OK
    6. Enhanced object literals
    7. Default parameter values
    8. Destructuring
    9. Rest parameter
    10. Spread
    11. Tagged template litera
    12. Modules
*/
    
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

// var name = 'Javascript'
// var price = 1000

// var course = {
//     name,
//     price,
//     getName: function() {
//         return name
//     }
// }
// console.log(course.getName())

var fiedName = 'name'
var fiedPrice = 'price'

const course = {
    name: 'Javascript',
    [fiedName]: 'PHP',
    [fiedPrice]: 1000
}

console.log(course)
