
// Bai-104

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
    11. Tagged template litera --> OK
    12. Modules --> OK
    13. Optional chaining ( ? / . )
*/

// 13. Optional chaining ( ? / . )

const obj = {
    name: 'alice',
    cat1: {
        name: 'dinah',
        cat2: {
            name: 'dinah',
            cat3: {
                name: 'dinah'
            }
        }
    }
}


if (obj.cat1?.cat2?.cat3) {
    console.log(obj.cat1.cat2.cat3.name)
}