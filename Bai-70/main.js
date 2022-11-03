// Bai-69

/*
    1. Element
    2. Attribute
    3. Text
*/

// Bai 70

// DOM Attributes

var headingElement =
    document.querySelector('h1')

    headingElement.title = 'title test'
    headingElement.setAttribute('class', 'data-red')


console.log(headingElement.getAttribute('class'))
alert(headingElement.getAttribute('title'))
console.log(headingElement)

