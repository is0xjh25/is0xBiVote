import Cookies from 'js-cookie';
const BASE_URL = process.env.REACT_APP_BASE_URL;

// set cookie when login
function setCookie(name, value, days) {
	if (name == 'token') {
		Cookies.set(`${name}`, "Bearer " + `${value}`, { expires: days }, { secure: true }, { SameSite: 'None' });
	} else {
		Cookies.set(`${name}`, `${value}`, { expires: days }, { secure: true }, { SameSite: 'None' });
	};
	return name;
};

function getCookie(name) {
	const cookie = Cookies.get(`${name}`);
	if (cookie) return cookie;
  return "";
};

// deletes the token of the user
function deleteCookie(name) {
  Cookies.remove(`${name}`);
};

// check if a user is not logged in, and redirects to login page
function checkAuthorized() {
    
	const token = getCookie('token');
   
	if (token) {
		
		const url = `${BASE_URL}/profile`;
		const info = {
			method: 'GET',
			headers: {'Content-Type': 'application/json', 'Authorization': token},
		};

		return fetch(url, info)
		.then(res => {
			if (res.ok) {
				return {login: true, message: "already login"};
			} else {
				return {login: false, message: "please login first"};
			};
		});
	} else {
		return {login: false, message: "please login first"};
	};
};

export {
	setCookie,
	getCookie,
	deleteCookie,
	checkAuthorized
};