const inputElement = document.querySelector("#cool")
const buttonElement = document.querySelector("#submit-button")
const ulElement = document.querySelector("todo-list")


buttonElement.addEventListener("click", function(evt) {
    const li = document.createElement("li")
    const inputEl = document.querySelector("input")
    li.textContent = inputEl.value
    document.querySelector("ul")
    const ulEl = document.querySelector('ul')
    ulEl.appendChild(li)
})