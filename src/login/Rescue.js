import React from 'react';
import { NavLink } from 'react-router-dom';

const Rescue = (props) => {
	return (
		<div class='login-form'>
			<h2>FORGOT PASSWORD</h2>
			<form>
				<div class="form-group">
					<label for="rescue-email">email</label>
					<input type="email" class="form-control" aria-describedby="emailHelp" id="rescue-email"/>
					<small id="emailHelp" class="form-text text-muted">Please check your email inbox</small>
				</div>
				<button type="submit" class="btn btn-outline-warning shadow login-submit">CONFIRM</button>
			</form>
			<div class='login-nav'>
				<NavLink to='/login' onClick={()=>props.setPage('main')}>
					{"Login!"}
				</NavLink>
				<NavLink to='/login' onClick={()=>props.setPage('register')}>
					{"New Voter!"}
				</NavLink>
			</div>
		</div>
	)
}

export default Rescue;