// Bai-49 

/*
    Array methods:
        forEach()
        every()
        some()
        find()
        fillter()
        map()
        reduce()
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0,
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0,
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400,
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500,
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 220,
    },
    {
        id: 9,
        name: 'Ruby',
        coin: 10,
    },
]

// courses.forEach(function(course, index) {
//     console.log(index, course)
// })

// var isFree = courses.every(function(course, index) {
//     console.log(index)
//     return course.coin === 0;
// })
// console.log(isFree)

// var isFree = courses.some(function(course, index) {
//     console.log(index)
//     return course.coin === 0;
// })
// console.log(isFree)


// var course = courses.filter(function(course, index) {
//     return course.name === 'Ruby'
// })
// console.log(course)



// Bai-50

// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250,
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0,
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0,
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400,
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500,
//     },
//     {
//         id: 6,
//         name: 'Ruby',
//         coin: 220,
//     },
//     {
//         id: 9,
//         name: 'Ruby',
//         coin: 10,
//     },
// ]
// function courseHandler(course, index) {
//     console.log(course);
//     return course.name
// }
// var newCourses = courses.map(courseHandler);

// console.log(newCourses)

// Bai-51

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0,
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0,
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400,
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500,
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 220,
    },
    {
        id: 9,
        name: 'Ruby',
        coin: 10,
    },
]

var totalCoin = courses.reduce((a, b) =>
     a + b.coin, 0 )
console.log(totalCoin)
