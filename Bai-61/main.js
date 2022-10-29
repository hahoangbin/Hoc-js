// Bai-61

 //  every: true / false

 Array.prototype.every2 = function(callback) {
    var output = true

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var rusult = callback(this[index], index, this)
            if (!result) {
                output = false
                break
            }
        }
    }
    return output
 }

 var courses = [
    {
        name: 'Javascript',
        coin: 1500,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 3500,
        isFinish: true,

    },
    {
        name: 'Ruby',
        coin: 6500,
        isFinish: false,

    },
 ] 

 var result = courses.every2(function(course, index, array) {
    return course.coin > 1000;
 })

 console.log(result)