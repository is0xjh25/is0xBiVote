import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { handleOnValidation } from '../utilities/Utilities.js';
import { NavLink } from 'react-router-dom';

const Rescue = (props) => {
	
	const { setPage } = props;
	const { enqueueSnackbar } = useSnackbar();
	const [email, setEmail] = useState('');

	const handleOnChange = (e) => {
		if (e.target.name === 'email') {
			setEmail(e.target.value);
		};
  };

	const handleOnSubmit = (e) => {
		e.preventDefault();
		let check = handleOnValidation('rescue', {email: email});
		if (!check.valid) {
			enqueueSnackbar(check.message, {variant:'warning'}); 
		} else {
			console.log(email);
			// call api rescue(email)
			// success or fail
			// success setPage('login'), snackbar
			// fail -> snackbar
		};
	};

	useEffect(() => {
		return () => {
			setEmail();
		}
	}, []);
	
	return (
		<div className='login-form'>
			<h2>FORGOT PASSWORD</h2>
			<div className='form-group'>
				<label htmlFor='rescue-email'>email</label>
				<input type='email' className='form-control' aria-describedby='emailHelp' id='rescue-email' name='email' onChange={handleOnChange}/>
				<small id='emailHelp' className='form-text text-muted'>Verification will be sent to the inbox</small>
			</div>
			<button type='submit' className='btn btn-outline-warning shadow login-submit' onClick={handleOnSubmit}>CONFIRM</button>
			<div className='login-nav'>
				<NavLink to='/login' onClick={()=>setPage('main')}>{"Login!"}</NavLink>
				<NavLink to='/login' onClick={()=>setPage('register')}>{"New Voter!"}</NavLink>
			</div>
		</div>
	)
};

export default Rescue;