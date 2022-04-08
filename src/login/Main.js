import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { handleOnValidation } from '../utilities/Utilities.js';
import { NavLink } from 'react-router-dom';

const Main = (props) => {
	
	const { setPage } = props;
	const { enqueueSnackbar } = useSnackbar();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleOnChange = (e) => {
		if (e.target.name === 'username') {
			setUsername(e.target.value);
		} else if (e.target.name === 'password') {
			setPassword(e.target.value);
		};
  };

	const handleOnSubmit = (e) => {
		e.preventDefault();
		let check = handleOnValidation('main', {username: username, password: password});
		if (!check.valid) {
			enqueueSnackbar(check.message, {variant:'warning'}); 
		} else {
			console.log(password);
			// call api login(username, password)
			// success or fail
			// success -> store token, navigate('/home')
			// fail -> snackbar
		};
	};

	useEffect(() => {
		return () => {
			setUsername();
			setPassword();
		}
	}, []);

	return (
		<div className='login-form'>
			<h2>LOGIN</h2>
			<div className='form-group'>
				<label htmlFor='main-username'>username</label>
				<input type='text' className='form-control' id='main-username' name='username' onChange={handleOnChange}/>
			</div>
			<div className='form-group'>
				<label htmlFor='main-password'>password</label>
				<input type='password' className='form-control' id='main-password' name='password' onChange={handleOnChange}/>
			</div>
			<button className='btn btn-outline-warning shadow login-submit' onClick={handleOnSubmit}>CONFIRM</button>
			<div className='login-nav'>
				<NavLink to='/login' onClick={()=>setPage('rescue')}>{"Forgot Password?"}</NavLink>
				<NavLink to='/login' onClick={()=>setPage('register')}>{"New Voter!"}</NavLink>
			</div>
		</div>
	)
};

export default Main;