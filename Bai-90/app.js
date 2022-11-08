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

// callBack hell
// Pyramid of doom

// Lý thuyết: Promise được sinh ra để sử lý thao tác bất đồng bộ
//            Để sử dụng Promise sử dụng từ khoá 'new Promise' truyền vào 1 function
// 
// setTimeout(function() {
//     console.log(1)
//     setTimeout(function() {
//         console.log(2)
//         setTimeout(function() {
//             console.log(3)
//             setTimeout(function() {
//                 console.log(4)
//                 setTimeout(function() {
//                     console.log(5)
//                     setTimeout(function() {
//                         console.log(6)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// 2 bước 1. new Promise
//        2. Executor

var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Thành công: resolve()
        // Thất bại: reject()
        resolve(123)
    }
)

promise
    .then(function() {
        console.log('Successully!')
    })
    .catch(function() {
        console.log('Failure!')
    })
    .finally(function() {
        console.log('Done!')
    })