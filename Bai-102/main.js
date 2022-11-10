

// Bai-102

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


function hightlight([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
    .join('')
}

var brand = 'F8'
var course = 'Javascript'

const html = hightlight`Học lập trình ${course} tại ${brand} !`

console.log(html)