let myLeads=[] //empty array
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)  //the value on the input field 
    inputEl.value="" //clear input field on click
    renderLeads() 
})
function renderLeads(){
    //an empty listitem array will be re-assigned
    let listitems=""
    for(let i=0;i<myLeads.length;i++){
        // listitems+="<li> <a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a> </li>"
        //we can used template strings to escape use of many + and quotes
        //template strings allows us break the line of code
        //the ${myLeads[i]} is a variable accessing the array
        listitems+=`
        <li> 
        <a target='_blank' href='${myLeads[i]}'> 
         ${myLeads[i]}  
         </a> 
        </li>
        `
    }
    ulEl.innerHTML=listitems
}
