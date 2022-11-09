// Bai-91

/*
    1. Event listener --> OK
    2. JSON --> OK
    3. Promise - Sync ---> OK
               - Async ---> OK
               - Nỗi đau ---> OK
               - Lý thuyết, cách hoạt động 
               - Thực hành, ví dụ
    4. Fetch
    5. DOM Location
    6. Local storage
    7. Session torage
    8. Coding convention
    9. Best Practices
    10. Mistakes
    11. Performance
*/

// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms)
//     });
// }

// sleep(1000)
//     .then(function() {
//         console.log(1)
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(2)
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(3)
//         return new Promise(function(resolve, reject) {
//             reject('Co loi!')
//         })
//     })
//     .then(function() {
//         console.log(4)
//         return sleep(1000)
//     })
//     .then(function() {
//         console.log(5)
//         return sleep(1000)
//     })
//     .catch(function(err) {
//         console.log(err)
//     })

    // Bai-92

    // 1. Promise.resolve
    // 2. Promise.reject
    // 3. Promise.all

    // var promise = Promise.reject('result')

    // promise
    //     .then(function(result) {
    //         console.log('result: ', result)
    //     })
    //     .catch(function(err) {
    //         console.log('err: ', err)
    //     })

// var promise1 = new Promise(
//     function(resolve) {
//         setTimeout(function() {
//             resolve([1])
//         }, 2000)
//     }
// )
// var promise2 = new Promise(
//     function(resolve) {
//         setTimeout(function() {
//             resolve([2, 3, 4])
//         }, 5000)
//     }
// )

// Promise.all([promise1, promise2])
//     .then(function(result) {
//         console.log(result)
//     })

// Bai-93

/*
    1. Let, const
    2. Template literals
    3. Multi-line string
    4. Arrow function
    5. Classes
    6. Default parameter values
    7. Destructuring
    8. Rest parameter
    9. Spread
    10. Enhanced object literals
    11. Tagged template literal
    12. Modules
*/
    