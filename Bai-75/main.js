
// Bai 74

// DOM Style

// var boxElement =
//     document.querySelector('.box');

// boxElement.style.while = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgrounColor = 'red';

// Object.assign(boxElement.style, {
//     while: '100px',
//     height: '200px',
//     backgrounColor: 'red',
// })

// console.log(boxElement.style.backgrounColor)

// Bai 75

// classList property

// add
// contains
// remove
// toggle

var boxElement =
    document.querySelector('.box')

boxElement.classList.add('red')

boxElement.classList.remove('box')

setInterval(() => {
    boxElement.classList.toggle('red')

}, 100)

// console.log(boxElement.classList.contains('red'))