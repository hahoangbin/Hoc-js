// Bai-97

function Course(name, price) {
    this.name = name
    this.price = price

}

const phpCourse = new Course('PHP', 1000)
const JSCourse = new Course('Javascript', 1200)

class Course {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }

    run() {
        const isSuccess = false
        if (isSuccess) {
            console.log(this.name)
        }
    }
}