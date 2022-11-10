/*
    1. Let, const  --> OK
    2. Template literals --> OK
    3. Multi-line string --> OK
    4. Arrow function đặt--> OK
    5. Classes --> OK
    6. Enhanced object literals --> OK
    7. Default parameter values --> OK
    8. Destructuring --> OK
    9. Rest parameter --> OK
    10. Spread --> OK
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
var array1 = ['Javascript', 'PHP', 'Ruby']
var array2 = ['ReactJS', 'Dart']
var array3 = ['Abc', 'Center', 'TOT']
var array4 = [[...array1], [...array2], [...array3]]

console.log(array4)