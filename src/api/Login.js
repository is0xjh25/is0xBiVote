import { getCookie, setCookie, checkAuthorized } from "./Utilities.js";
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Login page signin
function login(username, password) {
	const info = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({"user": {"username": username, "password": password}})
	};

	return fetch(`${BASE_URL}/login`, info)
	.then(res => {
		// console.log(res.headers.get('Authorization'));
		if (res.ok) {
			setCookie('token', res.headers.get('Authorization'), 1);
		};
		return res;
	})
}

// Request email for reset passward
function rescue(email) {

    const info = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"email": email})
    };

    return new Promise((resolve) => {
    fetch(BASE_URL + "/user/resetPassword", info)
        .then(res => {
            if(checkAuthorized(res)) {
                return;
            }
            res.json().then(bodyRes=>{resolve(bodyRes);});
        })
    })
}

// Sign up as a new member
function register(email, password, firstName, lastName, phone) {

    const info = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Origin': process.env.ORIGIN_URL},
        body: JSON.stringify({
            "email": email, 
            "password": password, 
            "first_name": firstName, 
            "last_name": lastName, 
            "phone": phone
        })
    };

    return new Promise((resolve) => {
        fetch(BASE_URL + "/user", info)
        .then(res => {
            if(checkAuthorized(res)) {
                return;
            }
            res.json().then(bodyRes=>{resolve(bodyRes);});
        })
    })
}

// Logout
function logout() {

    const info = {
        method: 'POST',
        headers: {'Authorization': getCookie('token')},
    };

    return new Promise((resolve) => {
        fetch(BASE_URL + "/user/logout", info)
        .then(res => {
            if(checkAuthorized(res)) {
                return;
            }
            res.json().then(bodyRes=>{resolve(bodyRes);});
        })
    })
}

function handleVerify() {
    const info = {
        method: 'POST',
        headers: {'Authorization': getCookie('token')},
    };

    return new Promise((resolve) => {
        fetch(BASE_URL + "/user/verify", info)
        .then(res => {
            if(checkAuthorized(res)) {
                return;
            }
            res.json().then(bodyRes=>{resolve(bodyRes);});
        })
    })
}

export {
    login,
    rescue,
    register,
    logout,
    handleVerify
}
