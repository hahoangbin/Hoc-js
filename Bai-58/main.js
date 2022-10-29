// Bai-58

 //  filter
 
 Array.prototype.filter2 = function(callback) {
    var output = []

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result) {
                output.push(this[index])
            }
        }
    }
    return output
 }

 var courses = [
    {
        name: 'Javascript',
        coin: 150,
    },
    {
        name: 'PHP',
        coin: 350,
    },
    {
        name: 'Ruby',
        coin: 650,
    },
 ] 
var filterCourses = courses.filter2(function(course) {
    return course.coin > 300
})

console.log(filterCourses)