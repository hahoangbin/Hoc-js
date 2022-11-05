function Validator(options) {

    var selectorRules = {}

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage

        // Lấy ra các rule của selector
        var rules = selectorRules[rule.selector]

        // lặp qua từng rule và kiểm tra nểu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value)
            if (errorMessage) break
        }
                    
            if (errorElement) {
                errorElement.innerText = errorMessage
                inputElement.parentElement.classList.add('invalid')
            } else {
                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid')

            }

            return !errorMessage
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    if (formElement) {
        // khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault()

            var isFormValid = true

            // Lặp qua từng rule và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }
            })

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {

                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        return (values[input.name] = input.value)  && values
                    }, {})
                   
                    options.onSubmit(formValues)
                } else {
                    formElement.submit()
                }
            }

        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElement = formElement.querySelector(rule.selector)
            
            if (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }

                // Xử lý mỗi khi người dùng nhập input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector)            
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }
            }

        })

        console.log(selectorRules)

    }

}

// Nguyên tắc của các rules
// 1. Khi có lỗi => trả ra message lỗi
// 2. Khi không có lỗi => không trả ra cái gì cả
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Vui lòng nhập email'
        }
    }
}

Validator.minlength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không đúng'
        }
    }
}