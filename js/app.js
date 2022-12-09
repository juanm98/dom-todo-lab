const inputElement = document.querySelector("#cool")
const buttonElement = document.querySelector("#submit-button")
const ulElement = document.querySelector("todo-list")
const inputEl = document.querySelector("input")


buttonElement.addEventListener("click", function(evt) {
    const li = document.createElement("li")
    li.textContent = inputEl.value
    document.querySelector("ul")
    const ulEl = document.querySelector('ul')
    ulEl.appendChild(li)
    inputEl.value = ''
})