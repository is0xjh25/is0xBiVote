import Cookies from 'js-cookie';

const ACCOUNT = "token";

// set cookie when login
function setCookie(name, value, days) {
	Cookies.set(`${name}`, `${value}`, { expires: days }, { secure: true }, { SameSite: 'None' })
	return name;
}

function getCookie(name) {
	const cookie = Cookies.get(`${name}`);
	if (cookie) return cookie;
  return "";
}

// deletes the token of the user
function deleteCookie(name) {
    Cookies.remove(`${name}`);
}

// check if a user is not logged in, and redirects to login page
function checkAuthorized() {
    
	const user = getCookie(ACCOUNT);
   
	if (user) {
      return user;
    } else {
      return "";
    }
}

export {
	setCookie,
	getCookie,
	deleteCookie,
	checkAuthorized,
}