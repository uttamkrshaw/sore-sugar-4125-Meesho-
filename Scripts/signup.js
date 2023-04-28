import {navbar} from "../Components/navbar.js";

let head = document.getElementById("header");

head.innerHTML = navbar();

const singUp = async (name, email, username, password, mobile, description, address, pin_code, city) => {
    let userdata = {
        name: name,
        email: email,
        username: username,
        password: password,
        mobile: mobile,
        description: description,
        address: address,
        pin_code: pin_code,
        city: city
    }
        
        try {
            let response = await fetch(`https://zara-umk6.onrender.com/userdata`, {
            method: "POST",
            body: JSON.stringify(userdata),
            headers: {
            "Content-Type": "application/json"
                }
            })
            //response = await response.json()
            location.replace("./login.html")
        } catch (error) {
            console.log(error);
        }
    }

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


    if (password == check_password && email.includes('@') && password.length >= 6 && check_password.length >= 6) {
        singUp(name, email, username, password, mobile, description, address, pin_code, city);
    } else if (password !== check_password) {
        alert('The password and confirmation password do not match.')
    } else if (email.includes('@') === false) {
        alert('Pls Enter Correct Email Id')
    } else if (password.length < 6 || check_password.length < 6) {
        alert('you have to enter at least 6 digit password!')
    }
};

let button = document.getElementById('btn');
button.addEventListener('click', Register);
