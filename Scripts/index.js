import {navbar} from "../Components/navbar.js"

let header=document.querySelector("#header")
header.innerHTML=navbar()
console.log(navbar())


// let login=document.querySelector("#loginID")


// login.addEventListener("click",function(){
//     window.location.href="login.html"
// })