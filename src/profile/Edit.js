import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { handleOnValidation } from '../utilities/Utilities.js';
import './Profile.css';

const Edit = (props) => {

	const { setPage, setEmail, setPassword, username, email, password } = props;
	const { enqueueSnackbar } = useSnackbar();
	const [emailTemp, setEmailTemp] = useState('');
	const [passwordTemp, setPasswordTemp] = useState('');
	const [passwordTempTwo, setPasswordTempTwo] = useState('');

	const handleOnChange = (e) => {
		if (e.target.name === 'email') {
			setEmailTemp(e.target.value);
		} else if (e.target.name === 'password') {
			setPasswordTemp(e.target.value);
		} else if (e.target.name === 'passwordTwo') {
			setPasswordTempTwo(e.target.value);
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let check = handleOnValidation('profile', {email: emailTemp, password: passwordTemp, passwordTwo: passwordTempTwo});
		if (!check.valid) {
			enqueueSnackbar(check.message, {variant:'warning'}); 
		} else {
			console.log(email);
			setEmail(emailTemp);
			setPassword(passwordTemp);
			// call api profile(email, password)
			// success or fail
			// success setPage('main'), snackbar
			// fail -> snackbar
		};
	};

	useEffect(() => {
		// initialize
		setEmailTemp(email);
		setPasswordTemp(password);
		setPasswordTempTwo(password);

    return () => {
      setEmailTemp();
      setPasswordTemp();
			setPasswordTempTwo();
    }
  }, [])

	return ( 
		<div id='profile-frame'>
			<div className='profile-left'>
				<div className='profile-section'>
					<label htmlFor='profile-email'>email</label>
					<input name='email' type='email' id='profile-email' value={emailTemp} onChange={handleOnChange}/>
				</div>
				<div className='profile-section'>
					<label htmlFor='profile-password'>password</label>
					<input name='password' type='password' id='profile-password' value={passwordTemp} onChange={handleOnChange}/>
				</div>
				<div className='profile-section'>
					<label htmlFor='profile-password'>confirm password</label>
					<input name='passwordTwo' type='password' id='profile-password' value={passwordTempTwo} onChange={handleOnChange}/>
				</div>
			</div>
			<div id='profile-right-edit'>
				<div className='profile-section'>
					<label htmlFor='profile-username'>username</label>
					<input type='text' id='profile-username' value={username} disabled/>
				</div>
				<div className='profile-section profile-button-set'>
					<button type='submit' className='btn btn-outline-danger shadow' id='profile-discard' onClick={()=>setPage('main')}>DISCARD</button>
					<button type='submit' className='btn btn-outline-success shadow' id='profile-update' onClick={handleSubmit}>UPDATE</button>
				</div>
			</div>
		</div>
	)
};

export default Edit;