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
            // use this in case of cors error =  https://cors-anywhere.herokuapp.com/corsdemo
            const register_api = `https://masai-api-mocker.herokuapp.com/auth/register`;

            const response = await fetch(register_api, {
                method: 'POST',
                body: JSON.stringify(this),
                // headers is the dahi sakkar which is given to us from mother when we go for exams
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data_response = await response.json();
            console.log('data: ', data_response);

        }
    }

    // async login(u, p) {
    //     console.log(u, p);

    //     const login_data = {
    //         username: u,
    //         password: p,
    //     }

    //     const login_api = `https://masai-api-mocker.herokuapp.com/auth/login`;

    //     const response = await fetch(login_api, {
    //         method: 'POST',
    //         body: JSON.stringify(login_data),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     });
    //     const data = await response.json();
    //     console.log('login data: ', data);
    //     return data
    // }
}


let user = new User();


const Register = () => {

    // const reg_form = document.getElementById('reg_form');

    // let name = reg_form.name.value;
    // let email = reg_form.email.value;
    // let username = reg_form.username.value;
    // let password = reg_form.password.value;
    // let mobile = reg_form.mobile.value;
    // let description = reg_form.description.value;
    // let more = reg_form.more.value;

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

// const Login = async () => {
//     const login_form = document.getElementById('login-info');

//     let input_username = login_form.username.value;
//     let input_password = login_form.password.value;
//     //console.log(input_username, input_password);
//     let { token } = await user.login(input_username, input_password);

//     getProfile(input_username, token);

// };


// const getProfile = async (username, token) => {
//    console.log('getting the profile :', username)
//    console.log('getting the profile :',token);
//     let api_Link = `https://masai-api-mocker.herokuapp.com/user/${username}`

//     let response = await fetch(api_Link, {
//         method:'GET',
//         headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//         }
//     });

//     let data = await response.json();
//     console.log('get profile data :', data);

// }

let button = document.getElementById('btn');
button.addEventListener('click',Register);