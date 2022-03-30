import React from 'react';
import { NavLink } from 'react-router-dom';

const Main = (props) => {
	return (
		<div class='login-form'>
			<h1>LOGIN</h1>
			<form>
				<div class="form-group">
					<label for="main-username">username</label>
					<input type="text" class="form-control" id="main-username"/>
				</div>
				<div class="form-group">
					<label for="main-password">password</label>
					<input type="password" class="form-control" id="main-password"/>
				</div>
				<button type="submit" class="btn btn-outline-warning shadow login-submit">CONFIRM</button>
			</form>
			<div class='login-nav'>
				<NavLink to='/login' onClick={()=>props.setPage('rescue')}>
					{"Forgot Password?"}
				</NavLink>
				<NavLink to='/login' onClick={()=>props.setPage('register')}>
					{"New Voter!"}
				</NavLink>
			</div>
		</div>
	)
}

export default Main;