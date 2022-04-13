import { getCookie, setCookie, deleteCookie, checkAuthorized } from "./Utilities.js";
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Login page signin
function login(username, password) {
	
	const url = `${BASE_URL}/login`;
	const info = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({"user": {"username": username, "password": password}})
	};
	
	return fetch(url, info)
	.then(res => {
		if (res.ok) setCookie('token', res.headers.get('Authorization'), 1);
		return res.json()
		.then(body => {
			if (res.ok) setCookie('username', body.user.username, 1);
			return {
				ok: res.ok,
				status: res.status,
				body: body
			}
		})
	})
};

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
	deleteCookie('token');
}

export {
	login,
	rescue,
	register,
	logout
}
