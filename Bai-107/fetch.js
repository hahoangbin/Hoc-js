/*
    1. Event listener --> OK
    2. JSON --> OK
            - Ứng dụng trong thực tế của JSON?
    3. Promise - Sync ---> OK
               - Async ---> OK
               - Nỗi đau ---> OK
               - Lý thuyết, cách hoạt động --> OK
               - Thực hành, ví dụ --> OK
               - Ứng dụng thực tế của Promise?
    4. Fetch
    5. DOM Location
    6. Local storage
    7. Session torage
    8. Coding convention
    9. Best Practices
    10. Mistakes
    11. Performance
*/

// Font-end: Xây dựng giao diện người dùng
// Back-end: Xây dựng logic xử lý + cơ sở dữ liệu

var postApi = 
    'https://jsonplaceholder.typicode.com/posts'

fetch(postApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        var htmls = posts.map(function(post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>
            `
        })

        var html = htmls.join('')
        document.getElementById('post-block').innerHTML = html
    })
    .catch(function(err) {
        console.log('cos loix !')
    })

