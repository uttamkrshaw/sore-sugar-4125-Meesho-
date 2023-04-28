import { navbar  } from "../Components/navbar.js";
import { dropdown  } from "../Components/dropdown.js";
let navbar_div = document.getElementById('header');
navbar_div.innerHTML=navbar();

document.getElementById("logo").onclick=()=>{
    window.location.href="index.html" 
}


const Login = async () => {
    const login_form = document.getElementById('login-info');

    let input_username = login_form.username.value;
    let input_password = login_form.password.value;
    getProfile(input_username, input_password);


};


const getProfile = async (username, password) => {

    let response = await fetch(`http://localhost:3000/userdata`)
    let data = await response.json();
    let userdata = data.filter((element) => { return element.username == username && element.password == password})
    if (userdata.length>0) {
        alert('Login Successful')
        localStorage.setItem('login_data',JSON.stringify(data));
        window.location.href='search.html';
    } else {
        alert('Enter Correct Credentials')
    }
    

}

let login_btn = document.getElementById('login');
login_btn.addEventListener('click',Login);