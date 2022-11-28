// BAI 110

/*
    1. Event listener --> OK
    2. JSON --> OK
            - Ứng dụng trong thực tế của JSON?
    3. Promise - Sync ---> OK
               - Async ---> OK
               - Nỗi đau ---> OK
               - Lý thuyết, cách hoạt động --> OK
               - Thực hành, ví dụ --> OK
               - Ứng dụng thực tế của Promise? --> OK
    4. Fetch
               - JSON server: API server (Face)
               - CRUD -> POST
                      -> GET
                      -> PUT
                      -> PATCH
                      -> DELETE

                - Postman 
    5. DOM Location
    6. Local storage
    7. Session torage
    8. Coding convention
    9. Best Practices
    10. Mistakes
    11. Performance
*/

var listcoursesBlock = 
    document.querySelector('#list-courses')

var courseApi = 'http://localhost:3000/courses'

function start() {
    getCourses(renderCourses)
}

start();


function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json()

        })
        .then(callback)
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        Headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function(response) {
            response.json()
        })
        .then(callback)
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        Headers: {'Content-Type': 'application/json'},
    }
    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            response.json()
        })
        .then(function() {
            var courseItem = 
                document.querySelector('.course-item-' + id)

                if (courseItem) {
                    courseItem.remove()
                }
        })
}

function renderCourses(courses) {
    var listcoursesBlock = 
        document.querySelector('#list-courses')
    var html = courses.map(function(course) {
        return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="deleteCourse(${course.id})">Xoá</button>
        </li>
        `
    })
    listcoursesBlock.innerHTML = htmls.join('')

}

function handleCreateForm() {
    var createBtn = document.querySelector('#create')

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value
        var discription = document.querySelector('input[name="description"]').value
        
        var formData = {
            name: name,
            discription: discription,
        }

        createCourse(formData, function() {
            getCourses(renderCourses)
        })
    }
}