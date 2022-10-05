/** BAI-13
 * 
 * Toán tử so sánh
 * 
 * Toán tử
 * ==       -->     Bằng
 * !=       -->     Không bằng
 *  >       -->     Lớn hơn
 *  <       -->     Nhỏ hơn
 * >=       -->     Lớn hơn hoặc bằng
 * <=       -->     Nhỏ hơn hoặc bằng
 * 
 */

var a = 1
var b = 2
if (a < b) {
    console.log('Dieu kien dung!')
} else {
    console.log('Dieu kien sai!')
}

/** BAI-14
 * 
 * Boolean
 */

var isSuccess = true
console.log(isSuccess)

/**BAI-15
 *  If - else
 */

/*
6 giá trị:  
    - 0
    - false
    - "" _ '' chuỗi rỗng
    - undefined
    - NaN
    - null
*/
 

var isSuccess = 1 < 2

if (isSuccess) {
    console.log('DIEU KIEN DUNG')
} else {
    console.log('DIEU KIEN SAI')
}