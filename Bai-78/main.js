
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

document.querySelector('div').onclick =
    function() {
        console.log('DIV')
    }

document.querySelector('button').onclick =
    function(e) {
        e.stopPropagation()
        console.log('Click me!')
    }