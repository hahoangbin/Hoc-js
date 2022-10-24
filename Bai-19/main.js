// Bai-18
// TOÁN TỬ SO SÁNH - P2

// Bai-19
// Hiểu hơn về câu lệnh điều kiện
// Và phép so sánh

/*
    0
    ''
    null
    undefined
    NaN
    false
*/

var a = 1
var b = 2

var result = null && 'A' && 'B' && 'C'

console.log('result', result)

if (result) {
    console.log('DIEU KIEN DUNG')
} else {
    console.log('DIEU KIEN SAI')
}