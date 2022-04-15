/* Validation */
const handleOnValidation = (type, info) => {

  let formIsValid = true;
  let alertMessage = "";
  let check = {};

  switch(type) {
    case 'main':
      if (!info.password) {
        alertMessage = "password cannot be empty";
        formIsValid = false;
      } else if (!info.username) {
        alertMessage = "username cannot be empty";
        formIsValid = false;
      };
      break;

    case 'rescue':
      check = emailValidation(info.email);
      if (!check.valid) {
        alertMessage = check.message;
        formIsValid = false;
      } 
      break;

    case 'register':
      check = passwordValidation(info.password, info.passwordTwo);
      if (!check.valid) {
        alertMessage = check.message;
        formIsValid = false;
      }
      check = usernameValidation(info.username);
      if (!check.valid) {
        alertMessage = check.message;
        formIsValid = false;
      }  
      check = emailValidation(info.email);
      if (!check.valid) {
        alertMessage = check.message;
        formIsValid = false;
      } 
      break;

    case 'profile':
      if (info.email === info.oldEmail && !info.password && !info.passwordTwo) {
        alertMessage = "nothing is changed";
        formIsValid = false;
        break;
      } else if (info.email !== info.oldEmail && !info.password && !info.passwordTwo){
        check = emailValidation(info.email);
        if (!check.valid) {
          alertMessage = check.message;
          formIsValid = false;
        }
        break;
      } else {
        check = passwordValidation(info.password, info.passwordTwo);
        if (!check.valid) {
          alertMessage = check.message;
          formIsValid = false;
        }
        check = emailValidation(info.email);
        if (!check.valid) {
          alertMessage = check.message;
          formIsValid = false;
        }
        break;
      }
      break;

    default:
      break;
  }
  
  return {valid: formIsValid, message: alertMessage};
};

function usernameValidation (u) {
  
  if (!u) {
    return {valid: false, message: "username cannot be empty"};
  } else if (typeof u !== 'undefined') {
    let regex = /^[A-Za-z\d,-]{1,12}$/;
    if (!regex.test(u)) {
      return {valid: false, message: "username should have not greater than 12 characters without special character except '-'"}; 
    } 
  }

  return {valid: true, message: "valid username"};
}

function emailValidation (e) {
  
  if (!e) {
    return {valid: false, message: "email cannot be empty"};
  } else if (typeof e !== 'undefined') {
    let regex = /[\w+\-.]+@[a-z\d]+(\.[a-z\d]+)*\.[a-z]+/;
    if (!regex.test(e)) {
      return {valid: false, message: "invalid email"}; 
    }
  }

  return {valid: true, message: "valid email"};
}

function passwordValidation (p1, p2) {

  if (!p1) {
    return {valid: false, message: "password cannot be empty"};
  } else if (!p2) {
    return {valid: false, message: "password needs to be confirmed"};
  } else if (typeof p1 !== 'undefined' && typeof p2 !== 'undefined') {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/;
    if (!regex.test(p1)) {
      return {valid: false, message: "password needs to between 8 to 32 characters mixture of letters and numbers"};
    } else if ( p1 !== p2) {
      return {valid: false, message: "password do not match"};
    };
  };

  return {valid: true, message: "valid password"};
}

/* Timer */
function countDown(endTime) {
  
	let now = new Date().getTime();
  let distance = new Date(endTime).getTime() - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) return 'Vote is CLOSED';
 	return days + "D " + hours + "H "+ minutes + "M " + seconds + "S ";
};

/* Convert UTC time */
function  dateTimeHandler (isoString) {
  let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  let utc = (new Date(isoString)).toUTCString();
  return months[(new Date(utc).getMonth())] + " " + ordinal_suffix_of(new Date(utc).getDate()) + " . " + new Date(utc).getFullYear();
}

/* Helpler function */
function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
}

export {
  handleOnValidation,
	countDown,
  dateTimeHandler
};