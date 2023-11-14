let tbody = document.querySelector(".tbody")
let inpText = document.querySelector(".inpText")
let btnAdd = document.querySelector(".btnAdd")
let dialogEdit = document.querySelector(".dialogEdit")
let inpEditText = document.querySelector(".inpEditText")
let btnEd = document.querySelector(".btnEd")
let title_one = document.querySelector(".title_one")
let time = document.querySelector(".time")
let sort = document.querySelector(".sort")
let one = new Date()
title_one.innerHTML = one

// setInterval(
//     () =>
//         (h1.innerHTML = `<span>${new Date().toDateString()}</span> <span>${new Date().toLocaleTimeString()}</span>`),
//     1000
// );

let two = new Date()
time.innerHTML = `${two.getHours()}:${two.getMinutes()}:${two.getMilliseconds()}`


// sort

sort.onclick = () => {
    todo = todo.sort((a, b) => a.text.localeCompare(b.text));
    get();
};


// data
let data = [
    { id: 1, text: "Welcome to App" },
    { id: 2, text: "Сделать уборку" },
    { id: 3, text: "Отвести братика в садик" },
    { id: 4, text: "Сходить на дополнительные уроки" },
    { id: 5, text: "Сделать уроки" },
    { id: 6, text: "Заниматься спортом" },
    { id: 7, text: "Сходит в магазин" },
]


// get
function get() {
    tbody.innerHTML = ""
    data.forEach((elem) => {

        let tr = document.createElement("tr")

        let id = document.createElement("td")
        id.innerHTML = elem.id


        let text = document.createElement("td")
        text.innerHTML = elem.text


        // btnDel
        let btnDel = document.createElement("button")
        btnDel.innerHTML = "Delete"
        btnDel.classList.add("btnDel")
        btnDel.onclick = () => {
            delUser(elem.id)
        }

        // btnEdit
        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Edit"
        btnEdit.classList.add("btnEdit")
        btnEdit.onclick = () => {
            editUser(elem.id)
        }


        let capBtn = document.createElement("button")
        capBtn.classList.add("cap")
        capBtn.innerHTML = "cap"


        let card = document.createElement("div")
        card.append(btnDel, btnEdit, capBtn)

        let forCard = document.createElement("td")
        forCard.append(card)

        tr.append(id, text, forCard)

        tbody.appendChild(tr)

    })
}
get()



// Delete
function delUser(id) {
    data = data.filter((elem) => {
        return elem.id != id
    })
    get()
}


// btnAdd
btnAdd.onclick = () => {
    let newUser = {
        id: new Date().getMilliseconds(),
        text: inpText.value
    }
    data.push(newUser)
    inpText.value = ""
    get()
}


// Edit
let idx = null
function editUser(id) {
    dialogEdit.showModal()
    let user = data.find((elem) => elem.id)
    inpEditText.value = user.text
    idx = id
}

btnEd.onclick = () => {
    data = data.map((elem) => {
        if (elem.id == idx) {
            elem.text = inpEditText.value
        }
        return elem
    })
    get()
    dialogEdit.close()
}   