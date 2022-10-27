// Bai-52

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
// var i = 0
// var totalCoin = courses.reduce(function(total, course,) {
//     i++
//     return total + course.coin
// } , 0 )

// console.log(totalCoin)

// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem)
// }, [])
// console.log(flatArray)

// Lấy ra các khoá học đưa vào một mảng mới
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]

var newCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses)
}, [])

// console.log(newCourses)

var htmls = newCourses.map(function(course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
})
console.log(htmls.join(''))