
// Bai 71

// Text
// innerText , TextContent

var headingElement =
    document.querySelector('.heading')

    headingElement.innerText = 'New Heading'
    headingElement.textContent = `
    
    

    New Heading
    
    
    
    `
    



console.log(headingElement.innerText)
console.log(headingElement.textContent)