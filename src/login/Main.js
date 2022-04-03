import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = (props) => {
	return (
		<div className='login-form'>
			<h2>LOGIN</h2>
			<form>
				<div className='form-group'>
					<label htmlFor='main-username'>username</label>
					<input type='text' className='form-control' id='main-username'/>
				</div>
				<div className='form-group'>
					<label htmlFor='main-password'>password</label>
					<input type='password' className='form-control' id='main-password'/>
				</div>
				<button type='submit' className='btn btn-outline-warning shadow login-submit'>CONFIRM</button>
			</form>
			<div className='login-nav'>
				<NavLink to='/login' onClick={()=>props.setPage('rescue')}>{"Forgot Password?"}</NavLink>
				<NavLink to='/login' onClick={()=>props.setPage('register')}>{"New Voter!"}</NavLink>
			</div>
		</div>
	)
}

export default Main;