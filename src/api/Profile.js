import { getCookie, setCookie, deleteCookie } from "./Utilities.js";
const BASE_URL = "https://bivote-server.herokuapp.com/api/v1";

// login
function login(username, password) {
	
	const url = `${BASE_URL}/login`;
	const info = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(
			{
				"user": 
				{
					"username": username, 
					"password": password
				}
			}
		)
	};
	
	return fetch(url, info)
	.then(res => {
		return res.json()
		.then(body => {
			if (res.ok) {
				setCookie('token', res.headers.get('Authorization'), 1);
				setCookie('username', body.user.username, 1);
			};
			return {
				ok: res.ok,
				status: res.status,
				body: body
			};
		});
	});
};

// request email for reset passward
function rescue(email) {

	// const info = {
	// 	method: 'POST',
	// 	headers: {'Content-Type': 'application/json'},
	// 	body: JSON.stringify({"email": email})
	// };

	// return new Promise((resolve) => {
	// fetch(BASE_URL + "/user/resetPassword", info)
	// 		.then(res => {
	// 				if(checkAuthorized(res)) {
	// 						return;
	// 				}
	// 				res.json().then(bodyRes=>{resolve(bodyRes);});
	// 		})
	// })
}

// create a new user
function register(username, email, password) {

	const url = `${BASE_URL}/users`;
	const info = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(
			{
				"user":
				{
					"username": username,
					"email": email, 
					"password": password 
				}
			}
		)
	};

	return fetch(url, info)
	.then(res => {
		return res.json()
		.then(body => {
			if (res.ok) {
				setCookie('token', res.headers.get('Authorization'), 1);
				setCookie('username', body.user.username, 1);
			}
			return {
				ok: res.ok,
				status: res.status,
				body: body
			};
		})
	});
}

// get user profile information
function getProfile() {

	const url = `${BASE_URL}/profile`;
	const info = {
		method: 'GET',
		headers: {'Content-Type': 'application/json', 'Authorization': getCookie('token')},
	};

	return fetch(url, info)
	.then(res => {
		return res.json()
		.then(body => {
			return {
				ok: res.ok,
				status: res.status,
				body: body
			};
		})
	});
}

// edit user profile
function editProfile(email, password) {

	const url = `${BASE_URL}/profile`;
	const info = {
		method: 'PATCH',
		headers: {'Content-Type': 'application/json', 'Authorization': getCookie('token')},
		body: JSON.stringify(
			{
				"user":
				{
					"email": email, 
					"password": password 
				}
			}
		)
	};

	return fetch(url, info)
	.then(res => {
		return res.json()
		.then(body => {
			return {
				ok: res.ok,
				status: res.status,
				body: body
			};
		})
	});
}

// logout
function logout() {
	deleteCookie('token');
	deleteCookie('username');
}

export {
	login,
	rescue,
	register,
	getProfile,
	editProfile,
	logout
}
