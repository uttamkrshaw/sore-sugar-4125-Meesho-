import {navbar} from "../Components/navbar.js";

let head=document.getElementById("header");

head.innerHTML=navbar();
//console.log(navbar())

class User {
    constructor() {

    }

    validateUsername(username) {
        return username.includes('@') ? false : true;
    }

    validatePassword(password) {
        return password.length >= 8 ? true : false;
    }

    async singUp(name, email, username, password, mobile, description,address,pin_code,city) {
        let isValidated = this.validateUsername(username) && this.validatePassword(password);

        if (isValidated) {
            this.name = name;
            this.email = email;
            this.username = username;
            this.password = password;
            this.mobile = mobile;
            this.description = description;
            this.address =address;
            this.pincode=pin_code;
            this.city=city;
            const register_api = `https://masai-api-mocker.herokuapp.com/auth/register`;

            const response = await fetch(register_api, {
                method: 'POST',
                body: JSON.stringify(this),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data_response = await response.json();
            console.log('data: ', data_response);

        }
    }
}


let user = new User();


const Register = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let address = document.getElementById('address').value;
    let mobile = document.getElementById('telephone').value;
    let description = document.getElementById('option').value
    let pin_code = document.getElementById('pincode').value;
    let city = document.getElementById('city').value;
    let check_password = document.getElementById('repeat-assword').value;

    if(password == check_password){
        user.singUp(name, email, username, password, mobile, description,address,pin_code,city);
        console.log('user: ', user);
    }else{
        alert('CHECK YOUR PASSWORD !')
    }

   
};

let button = document.getElementById('btn');
button.addEventListener('click',Register);