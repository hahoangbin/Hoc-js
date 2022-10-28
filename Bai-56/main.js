// Bai-55
// callback?

// là hàm (function) được truyền qua đối số
// khi gọi hàm khác

// 1. Là hàm 
// 2. Được truyền qua đối số 

// function myFunction(param) {
//     if (typeof param === 'function') {

//         param('Hoc lap trinh')
//     }
// }

// function myCallback(value) {
//     console.log('value: ', value)
// }

// myFunction(myCallback) 

// Bai 56

// callback - phan 2

// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi lại ( trong hàm nhận đối số)

var courses = [
    'Javascript',
    'PHP',
    'Ruby',
]

var htmls = courses.map2(function(course) {
    return `<h2>${course}</h2>`
})

console.log(htmls.join(''))

