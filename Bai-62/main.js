// Bai-61

 //  every: true / false

//  Array.prototype.every2 = function(callback) {
//     var output = true
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index,)
//             if (!result) {
//                 output = false
//                 break
//             }
//         }
//     }
//     return output
//  }

//  var courses = [
//     {
//         name: 'Javascript',
//         coin: 560,
//         isFinish: true,
//     },
//     {
//         name: 'PHP',
//         coin: 400,
//         isFinish: true,
//     },
//     {
//         name: 'Ruby',
//         coin: 800,
//         isFinish: true,
//     },
//     {
//         name: 'CSS',
//         coin: 680,
//         isFinish: true,
//     }
//  ]

//  var result = courses.every2(function(course, index, index) {
//     return course.coin > 500
//  })

//  console.log(result)


// Bai 62

// 1. Xác định điểm dừng
// 2. Logic => Tạo ra điểm dừng

// function countDown(num) {
//     if (num > 0) {
//         console.log(num)
//         return countDown(num-1)
//     }
//     return num
// }

// countDown(6)

// function loop(start, end, cb) {
//     if (start < end) {
//         cb(start)
//         return loop(start + 1, end, cb)
//     }
// }

// var array = ['Javascript', 'PHP', 'Ruby']

// loop(0, array.length, function(index) {
//     console.log(array[index])
// })

function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1)

    }
    return 1
}

console.log(giaiThua(6))