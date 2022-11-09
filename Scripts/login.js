import { navbar } from "../Components/navbar.js";

let navbar_div = document.getElementById('header');
navbar_div.innerHTML=navbar();

// login function
class User {
    constructor() {

    }

    validateUsername(username) {
        return username.includes('@') ? false : true;
    }

    validatePassword(password) {
        return password.length >= 8 ? true : false;
    }

    async singUp(n, e, u, p, m, d) {
        let isValidated = this.validateUsername(u) && this.validatePassword(p);

        if (isValidated) {
            this.name = n;
            this.email = e;
            this.username = u;
            this.password = p;
            this.mobile = m;
            this.description = d;
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

    async login(u, p) {
        console.log(u, p);

        const login_data = {
            username: u,
            password: p,
        }

        const login_api = `https://masai-api-mocker.herokuapp.com/auth/login`;

        const response = await fetch(login_api, {
            method: 'POST',
            body: JSON.stringify(login_data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        console.log('login data: ', data);
        if(data.error='false'){
            alert('LOGIN SUCCESSFUL');
        }
        return data
    }
}


let user = new User();

const Login = async () => {
    const login_form = document.getElementById('login-info');

    let input_username = login_form.username.value;
    let input_password = login_form.password.value;
    let { token } = await user.login(input_username, input_password);
    getProfile(input_username, token);


};


const getProfile = async (username, token) => {
   console.log('getting the profile :', username)
   console.log('getting the profile :',token);
    let api_Link = `https://masai-api-mocker.herokuapp.com/user/${username}`

    let response = await fetch(api_Link, {
        method:'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    });

    let data = await response.json();
    console.log('get profile data :', data);
    window.location.href='index.html';

}

let login_btn = document.getElementById('login');
login_btn.addEventListener('click',Login);