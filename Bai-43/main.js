// Bai-42

// For/in loop

// var myInfo = {
//     name: 'Ha Bin',
//     age: 23,
//     address:'Ha Noi, VN',
// }

// for (var key in myInfo) {
//     console.log(myInfo[key])
// }

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Java',

// ]
// for (var key in languages) {
//     console.log(languages[key])
// }

// Bai-43

// For/of loop

var myInfo = {
    name: 'Ha Bin',
    age: 23
}

for (var value of Object.values(myInfo)) {
        console.log(value)
    }