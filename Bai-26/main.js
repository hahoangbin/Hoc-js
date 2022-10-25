/*
// Tham số hàm javarscript cơ bản

1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private?
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng arguments
    - Gisoi thiệu vòng for
*/

function writeLog() {
    var myString = ''
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}

writeLog('Log 1', 'Log 2', 'Log 3', 4, 5)