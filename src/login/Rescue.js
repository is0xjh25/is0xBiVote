import React from 'react';
import { NavLink } from 'react-router-dom';

const Rescue = (props) => {
	return (
		<div className='login-form'>
			<h2>FORGOT PASSWORD</h2>
			<form>
				<div className='form-group'>
					<label htmlFor='rescue-email'>email</label>
					<input type='email' className='form-control' aria-describedby='emailHelp' id='rescue-email'/>
					<small id='emailHelp' className='form-text text-muted'>Please check your email inbox</small>
				</div>
				<button type='submit' className='btn btn-outline-warning shadow login-submit'>CONFIRM</button>
			</form>
			<div className='login-nav'>
				<NavLink to='/login' onClick={()=>props.setPage('main')}>{"Login!"}</NavLink>
				<NavLink to='/login' onClick={()=>props.setPage('register')}>{"New Voter!"}</NavLink>
			</div>
		</div>
	)
}

export default Rescue;