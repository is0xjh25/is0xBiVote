import React from 'react';
import './Profile.css';

const Main = (props) => {

	const { setPage, username, email, statistics, handleLogout } = props;

	return ( 
		<div id='profile-frame'>
			<div className='profile-left'>
				<div className='profile-section'>
					<label htmlFor='profile-username'>username</label>
					<input type='text' id='profile-username' value={username} disabled/>
				</div>
				<div className='profile-section'>
					<label htmlFor='profile-email'>email</label>
					<input type='email' id='profile-email' value={email} disabled/>
				</div>
				<div className='profile-section'>
					<label htmlFor='profile-password'>password</label>
					<input type='password' id='profile-password' value={"********"} disabled/>
				</div>
			</div>
			<div id='profile-right-main'>
				<div className='profile-section'>
					Total Votes: <span className='text-warning'>{statistics.total_votes}</span>
				</div>
				<div className='profile-section'>
					Times Being Majority: <span className='text-warning'>{statistics.being_majority}</span>
				</div>
				<div className='profile-section'>
					Total Upvotes: <span className='text-warning'>{statistics.total_upvotes}</span>
				</div>
				<div className='profile-section profile-button-set'>
					<button type='submit' className='btn btn-outline-info shadow' id='profile-edit' onClick={()=>setPage('edit')}>EDIT</button>
					<button type='submit' className='btn btn-outline-danger shadow' id='profile-logout' onClick={handleLogout}>LOGOUT</button>
				</div>
			</div>
		</div>
	)
};

export default Main;