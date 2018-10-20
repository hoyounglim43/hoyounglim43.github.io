var styles = require("./styles.css");
var swal = require('sweetalert2')


var addListButtonTag = document.querySelector(".addListButton")
var todoListTag = document.querySelector(".todoList")

var addSectionButtonTag = document.querySelector(".addReviewButton")

addListButtonTag.addEventListener("click", (event) => {
    event.preventDefault()

    swal({
        title: 'New Todo Item',
        html:
            '<input id="newTodoList" class="swal2-input" placeholder="Add todo list item">',
        inputPlaceholder: 'Todo Task',
        showCancelButton: true,
        preConfirm: () => {

            var listItemtag = document.createElement("li")
            listItemtag.innerHTML = document.querySelector("#newTodoList").value
            todoListTag.appendChild(listItemtag)

        }
    })

})

addSectionButtonTag.addEventListener("click", (event) => {
    event.preventDefault()


    swal({
        title: 'New Review',
        html:
            '<input class="swal2-input" type="text" placeholder="Title">' +
            '<textarea class="swal2-textarea" placeholder="Content">',
        focusConfirm: false,
        showCancelButton: true
    })

})