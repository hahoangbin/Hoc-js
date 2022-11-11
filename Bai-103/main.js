

// Bai-103

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
    12. Modules
*/

// import / export

import {logger2} from './logger.js'
import * as contant from './contant.js'
console.log(contant)

logger('Test Message...',contant.TYPE_ERROR,)

