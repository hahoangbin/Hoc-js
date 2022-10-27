// Bai-53

// includes method

// var title = 'Responsive web design'
// console.log(title.includes('we', 10))

// var courses = ['Javascript', 'PHP', 'Dart']
// 3 + -1
// console.log(courses.includes('Javascript', -1))


//Bai-54

/*
Math object
    - Math.PI
    - Math.round()
    - Math.abs()
    - Math.ceil()
    - Math.floor()
    - Math.random()
    - Math.min()
    - Math.max()
*/
console.log(Math.PI)                // lấy số thập phân chi tiết
console.log(Math.round(1.53))       // làm tròn
console.log(Math.abs(-44))          // giá trị tuyệt đối
console.log(Math.ceil(5.200002))    // làm tròn lên
console.log(Math.floor(5.90009))    // làm tròn dưới
console.log(Math.random(121))       // số thập phân ngẫu nhiên nhở hơn 1
console.log(Math.min())             // lấy ra số nhỏ nhất
console.log(Math.max())             // lấy ra số lớn nhất

var random = Math.floor(Math.random() * 100)

if (random < 50) {
    console.log('cường hoá thành công!')
}

var bonus = [
    '10coin',
    '20coin',
    '30coin',
    '40coin',
]
console.log(bonus)
