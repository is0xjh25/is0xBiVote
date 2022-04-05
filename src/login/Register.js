import React from 'react';
import { NavLink } from 'react-router-dom';

const Rescue = (props) => {

	const { setPage } = props;
	
	return (
		<div className='login-form'>
			<h2>REGISTER</h2>
			<form>
				<div className='form-group'>
					<label htmlFor='register-email'>email</label>
					<input type='email' className='form-control' aria-describedby='emailHelp' id='register-email'/>
					<small id='emailHelp' className='form-text text-muted'>Please check your email inbox</small>
				</div>
				<div className='form-group'>
					<label htmlFor='register-username'>username</label>
					<input type='text' className='form-control' aria-describedby='usernameHelp' id='register-username'/>
					<small id='usernameHelp' className='form-text text-muted'>Username is unchangeable</small>
				</div>
				<div className='form-group'>
					<label htmlFor='register-password'>password</label>
					<input type='password' className='form-control' aria-describedby='passwordHelp' id='register-password'/>
					<small id='passwordHelp' className='form-text text-muted'>At least 8 characters mixture of letters and numbers</small>
				</div>
				<div className='form-group'>
					<label htmlFor='register-password-confirm'>confirm password</label>
					<input type='password' className='form-control' id='register-password-confirm'/>
				</div>
				<button type='submit' className='btn btn-outline-warning shadow login-submit'>CONFIRM</button>
			</form>
			<div className='login-nav'>
				<NavLink to='/login' onClick={()=>setPage('main')}>{"Login!"}</NavLink>
				<NavLink to='/login' onClick={()=>setPage('rescue')}>{"Forgot Password?"}</NavLink>
			</div>
		</div>
	)
}

export default Rescue;