
// Bai 76

// DOM events

// 1. Attribute events
// 2. Assign event using the element node

// var h1ElementS = 
//     document.querySelectorAll('h1')

// for (var i = 0; i < h1ElementS.length; i++) {
//     h1ElementS[i].onclick = function(e) {
//         console.log(e.target)
//     }
// }


// BAI 77

// DOM events

// 1. Input / select
// 2. Key up / down

// var InputElement =
//     document.querySelector('select')

//     InputElement.onchange = function(e) {
//         console.log(e.target.value)
//     }

// var InputElement =
//     document.querySelector('input[type="text"]')

//     InputElement.onkeyup = function(e) {
//         console.log(e.which) 
//         switch(e.which) {
//             case 8:
//                 console.log('exit')
//                 break
//         }

//     }


document.onkeypress = function(e) {
    switch(e.which) {
        case 8:
            console.log('exit');
            break;
        case 12:
            console.log('SEND');
            break;
    }
}