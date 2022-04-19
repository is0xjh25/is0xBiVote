import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { rescue } from '../api/Profile.js';
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
			rescue(email)
			.then(res => {
				if (res.ok) {
					enqueueSnackbar(res.body.message, {variant:'success'});
					setPage('main');
				} else if ([500, 501, 502, 503, 504].includes(res.status)) {
					enqueueSnackbar("SERVER ERROR. Please try again later.", {variant:'error'});
				} else {
					enqueueSnackbar(res.body.message, {variant:'error'});
				};
			});
		};
	};

	useEffect(() => {
		return () => {
			setEmail();
		}
	}, []);
	
	return (
		<>
			<div className='login-section'>
				<h2>FORGOT PASSWORD</h2>
			</div>
			<div className='login-section'>
				<label htmlFor='rescue-email'>email</label>
				<input type='email' aria-describedby='emailHelp' id='rescue-email' name='email' onChange={handleOnChange}/>
				<small id='emailHelp' className='form-text text-muted'>Verification will be sent to the inbox</small>
			</div>
			<div className='login-section'>
				<button type='submit' className='btn btn-outline-warning shadow login-submit' onClick={handleOnSubmit}>CONFIRM</button>
			</div>
			<div className='login-section login-nav'>
				<NavLink to='/login' onClick={()=>setPage('main')}>{"Login!"}</NavLink>
				<NavLink to='/login' onClick={()=>setPage('register')}>{"New Voter!"}</NavLink>
			</div>
		</>
	)
};

export default Rescue;