/*
Giới thiệu một số hàm built-in
    1. Alert
    2. Console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval
*/

// console.log('day la 1 dong log')

// var fullName = 'Ha Ngoc Duong'

// console.log(fullName)


confirm('Xac nhan ban du tuoi!');
prompt('Xac nhan ban du tuoi!');

// setTimeout(function() {
//     alert('Thong bao')
// }, 1000)

setInterval(function() {
    console.log('Day la log' + Math.random)
}, 3000)