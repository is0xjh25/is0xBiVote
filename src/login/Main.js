import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { handleOnValidation } from '../utilities/Utilities.js';
import { login } from  '../api/Login.js';

const Main = (props) => {
	
	const { setPage } = props;
	const navigate = useNavigate();
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
			let ok;
			login(username, password)
			.then(res => {
				ok = res.ok;
				return res.json();
			}).then(json => {
				if (ok) {
					enqueueSnackbar(json.success, {variant:'success'});
					navigate('/');
				} else {
					enqueueSnackbar(json.error, {variant:'error'});
				};
			})
		};
	};

	useEffect(() => {
		return () => {
			setUsername();
			setPassword();
		}
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