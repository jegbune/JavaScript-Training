let myLeads = [];
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push("www.awesomelead.com")
    alert(myLeads)
})