// Bai-44

// while loop

var myArray = [
    'javascript',
    'PHP',
    'Ruby',
    'Java',
    'avatar',
    'Temo'
]

var i = 0
while (i < myArray.length) {
    console.log(myArray[i])
    i++

}

// Bai-45

// do/while loop

var i = 0
var isSuccess = false

do {
    i++
    console.log('Nap the lan' + i)
    if (true) {
        isSuccess = true
    }

} while (!isSuccess && i <= 3)