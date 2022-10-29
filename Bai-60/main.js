// Bai-60

 //  some: true / false

 Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true
            }
        }
    }
    return false
 }

 var courses = [
    {
        name: 'Javascript',
        coin: 150,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 350,
        isFinish: false,

    },
    {
        name: 'Ruby',
        coin: 650,
        isFinish: false,

    },
 ] 

 var result = courses.some(function(course, index) {
    return course.isFinish
 })

 console.log(result)