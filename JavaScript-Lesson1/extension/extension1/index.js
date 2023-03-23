let myLeads = [ ];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
})

function renderLeads() {

    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li><a href='" + myLeads + ".com' target='_blank'> " + myLeads[i] + "</a></li>"
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    } 
    ulEl.innerHTML = listItems
}