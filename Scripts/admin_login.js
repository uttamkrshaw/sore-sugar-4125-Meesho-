class User {
    constructor() {
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
        return data
    }
}


let user = new User();

const Login = async () => {
    const login_form = document.getElementById('login_form');
    let input_username = login_form.username.value;
    let input_password = login_form.password.value;
    //console.log(input_username, input_password);
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
    // setting up the data in local storage to retrive it for further access
    localStorage.setItem('admin_data',JSON.stringify(data));
}

let login_btn = document.getElementById('submit');
login_btn.addEventListener('click',Login);
