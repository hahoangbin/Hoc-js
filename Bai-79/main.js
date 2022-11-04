
// Bai 78

// DOM events

// 1. preventDefaulf
// 2. stopPropagation



// var aElements = document.links

// for(var i = 0; i < aElements.length; i++) {
//     aElements[i].onclick = function(e) {

//         if (!e.target.href.startsWith('https://f8.edu.vn'))
//             e.preventDefault()

//         console.log(e.target.href)
//     }
// }

// var ulElement = document.querySelector('ul');

// ulElement.onmousedown = function(e) {
//     e.preventDefaulf();
// }

// ulElement.onclick =
//     function(e) {
//         console.log(e.target);
// }

// document.querySelector('div').onclick =
//     function() {
//         console.log('DIV')
//     }

// document.querySelector('button').onclick =
//     function(e) {
//         e.stopPropagation()
//         console.log('Click me!')
//     }


    // BAI 79

    // 1. DOM Event / Event listtener
    // 2. JSON
    // 3. Fetch
    // 4. DOM location
    // 5. Local storage
    // 6. Session storage 
    // 7. Coding convention
    // 8. Best Practices
    // 9. Mistakes
    // 10. Perfomance
    
    // 1. Xử lý nhiều việc khi một event xảy ra
    // 2. Lắng nghe / Huỷ bỏ lắng nghe -->
    
    
var btn = document.getElementById('btn');
    
// btn.onclick = function () {
//         console.log('viec 1');

//         console.log('viec 2');

//         alert('viec 3');
// }


// setTimeout(() => {
//     btn.onclick = function () {}

// }, 3000)

function viec1() {
    console.log('viec 1');
}
function viec2() {
    console.log('viec 2');
}


btn.addEventListener('click', viec1)
btn.addEventListener('click', viec2)

setTimeout(() => {
    btn.removeEventListener('click', viec1)
}, 3000);