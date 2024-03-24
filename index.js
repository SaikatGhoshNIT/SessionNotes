function addSession(){
    const body = document.body
    const note = document.querySelector("#noteInput")
    const list = document.querySelector(".list")

    const item = document.createElement("div")
    const itemText = document.createElement("p")
    const removeButton = document.createElement("button")

    itemText.innerText = note.value
    removeButton.classList.add("remove")

    item.appendChild(itemText)
    item.appendChild(removeButton)

    list.appendChild(item)

    note.value=""

    removeButton.addEventListener("click", ()=>{
        list.removeChild(item)
    })
}