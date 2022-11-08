/*
    1. Event listener --> OK
    2. JSON --> OK
    3. Promise - Sync
               - Async
               - Nỗi đau
               - Lý thuyết, cách hoạt động 
               - Thực hành, ví dụ
    4. Fetch
    5. DOM Location
    6. Local storage
    7. Session torage
    8. Coding convention
    9. Best Practices
    10. Mistakes
    11. Performance
*/


// callBack hell
setTimeout(function() {
    console.log(1)
    setTimeout(function() {
        console.log(2)
        setTimeout(function() {
            console.log(3)
            setTimeout(function() {
                console.log(4)
                setTimeout(function() {
                    console.log(5)
                    setTimeout(function() {
                        console.log(6)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)