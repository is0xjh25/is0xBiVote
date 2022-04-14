import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { login } from '../api/Profile.js';
import { handleOnValidation } from '../utilities/Utilities.js';

const Main = (props) => {
	
	const { setPage } = props;
	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();
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
			login(username, password)
			.then(res => {
				if (res.ok) {
					enqueueSnackbar(res.body.message, {variant:'success'});
					navigate('/'); 
				} else if ([500, 501, 502, 503, 504].includes(res.status)) {
					enqueueSnackbar("server error, please try again later", {variant:'error'});
				} else {
					enqueueSnackbar(res.body.message, {variant:'error'});
				};
			});
		};
	};

	useEffect(() => {
		// initialize
		setUsername('');
		setPassword();
		
		return () => {
			setUsername();
			setPassword();
		};
	}, []);

	return (
		<>
			<div className='login-section'>
				<h2>LOGIN</h2>
			</div>
			<div className='login-section'>
				<label htmlFor='main-username'>username</label>
				<input type='text' id='main-username' name='username' maxLength='12' onChange={handleOnChange}/>
			</div>
			<div className='login-section'>
				<label htmlFor='main-password'>password</label>
				<input type='password'id='main-password' name='password' maxLength='32' onChange={handleOnChange}/>
			</div>
			<div className='login-section'>
				<button className='btn btn-outline-warning shadow login-submit' onClick={handleOnSubmit}>CONFIRM</button>
			</div>
			<div className='login-section login-nav'>
				<NavLink to='/login' onClick={()=>setPage('rescue')}>{"Forgot Password?"}</NavLink>
				<NavLink to='/login' onClick={()=>setPage('register')}>{"New Voter!"}</NavLink>
			</div>
		</>
	)
};

export default Main;