let tbody = document.querySelector(".tbody")
let inpText = document.querySelector(".inpText")
let btnAdd = document.querySelector(".btnAdd")
let dialogEdit = document.querySelector(".dialogEdit")
let inpEditText = document.querySelector(".inpEditText")
let btnEd = document.querySelector(".btnEd")
let dialogInfo = document.querySelector(".dialogInfo")
let infoText = document.querySelector(".infoText")
let card_info = document.querySelector("card_info")
let closer = document.querySelector(".closer")
let sort = document.querySelector(".sort")
let time = document.querySelector(".time")
let title_one = document.querySelector(".title_one")
let remove = document.querySelector(".remove")



// title_date
setInterval(() => title_one.innerHTML = new Date(), 0)

// time
setInterval(() => time.innerHTML = `${new Date().getHours()} : ${new Date().getMinutes()} :${new Date().getSeconds()}`)

// sort
sort.onclick = () => {
    data = data.sort((a, b) => a.text.localeCompare(b.text));
    get();
};


// data
let data = [
    { id: 1, text: "Welcome to App" },
    { id: 2, text: "Apple" },
    { id: 3, text: "Computer" },
    { id: 4, text: "Table" },
    { id: 5, text: "TV" },
    { id: 6, text: "Bag" },
    { id: 7, text: "Shop" },
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
            setTimeout(() => {
                delUser(elem.id)
            }, 2000)
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
        capBtn.onclick = () => {
            dialogInfo.showModal()
            infoText.innerHTML = elem.text
        }

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
        id: data.length + 1,
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


closer.onclick = () => {
    dialogInfo.close()
}