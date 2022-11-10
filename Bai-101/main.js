// Bai-99
// var course = {
//     name: 'Javascript',
//     price: 1000
// };

// console.log(course)


// function logger(log) {
//     if (typeof log === 'undefined') {
//         log = 'Gia tri mawc dinh'
//     }
//     console.log(log)
// }

// logger(undefined)

// Bai-100
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
// var array1 = ['Javascript', 'PHP', 'Ruby']
// var array2 = ['ReactJS', 'Dart']
// var array3 = ['Abc', 'Center', 'TOT']
// var array4 = [...array1, ...array2, ...array3]

// console.log(array4)

// var object1 = {name: 'Javascript'}
// var object2 = {ege: 1000}

// var object3 = {...object1, ...object2}

var array = ['Javascript', 'PHP', 'Ruby']

function logger(...Rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(Rest[i])
    }
}

logger(...array)