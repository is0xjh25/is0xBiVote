import React from 'react';
import { NavLink } from 'react-router-dom';

const Rescue = (props) => {
	return (
		<div class='login-form'>
			<h1>REGISTER</h1>
			<form>
				<div class="form-group">
					<label for="register-email">email</label>
					<input type="email" class="form-control" aria-describedby="emailHelp" id="register-email"/>
					<small id="emailHelp" class="form-text text-muted">Please check your email inbox</small>
				</div>
				<div class="form-group">
					<label for="register-username">username</label>
					<input type="text" class="form-control" aria-describedby="usernameHelp" id="register-username"/>
					<small id="usernameHelp" class="form-text text-muted">Username is unchangeable</small>
				</div>
				<div class="form-group">
					<label for="register-password">password</label>
					<input type="password" class="form-control" aria-describedby="passwordHelp" id="register-password"/>
					<small id="passwordHelp" class="form-text text-muted">At least 8 characters mixture of letters and numbers</small>
				</div>
				<div class="form-group">
					<label for="register-password-confirm">confirm password</label>
					<input type="password" class="form-control" id="register-password-confirm"/>
				</div>
				<button type="submit" class="btn btn-outline-warning shadow login-submit">CONFIRM</button>
			</form>
			<div class='login-nav'>
				<NavLink to='/login' onClick={()=>props.setPage('main')}>
					{"Login!"}
				</NavLink>
				<NavLink to='/login' onClick={()=>props.setPage('rescue')}>
					{"Forgot Password?"}
				</NavLink>
			</div>
		</div>
	)
}

export default Rescue;