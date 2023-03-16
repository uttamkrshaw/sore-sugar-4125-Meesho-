import {navbar} from "../Components/navbar.js"

let header=document.querySelector("#header")
header.innerHTML=navbar()
//console.log(navbar());

import { dropdown  } from "../Components/dropdown.js";
let dropdownbtn=document.querySelector("#threedot")
dropdownbtn.innerHTML=dropdown()