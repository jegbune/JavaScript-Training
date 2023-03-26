let myLeads = [];

// myLeads = JSON.parse(myLeads);

// myLeads.push("www.epicLead.com","www.jerxpress.com")
// myLeads = JSON.stringify(myLeads);


// myLeads = JSON.stringify(myLeads)

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.epiclead.com")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLead", "www.examplelead.com ")
// localStorage.setItem ("my name", "Jeremiah")
// let  = localStorage.getItem("my name");
// alert(myLead)
// alert(localStorage.getItem("myLeads"))

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {

    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>
                <a href='${myLeads}.com' target='_blank'> 
                    ${myLeads[i]}
                </a>
            </li>`
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    } 
    ulEl.innerHTML = listItems
}