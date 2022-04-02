import React from 'react';
import './Profile.css';

const Main = (props) => {

	return ( 
		<>
			<div className='profile-left'>
				<div className='profile-section'>
					<label htmlFor="profile-username">username</label>
					<input type="text" id="profile-username" value={props.username} disabled/>
				</div>
				<div className='profile-section'>
					<label htmlFor="profile-email">email</label>
					<input type="email" id="profile-email" value={props.email} disabled/>
				</div>
				<div className='profile-section'>
					<label htmlFor="profile-password">password</label>
					<input type="password" id="profile-password" value={props.password} disabled/>
				</div>
			</div>
			<div id='profile-right-main'>
				<div className='profile-section'>
					Total Upvotes: <span className="text-warning">1155</span>
				</div>
				<div className='profile-section'>
					Total Votes: <span className="text-warning">20</span>
				</div>
				<div className='profile-section'>
					Times Being Majority: <span className="text-warning">9</span>
				</div>
				<div className='profile-section profile-button-set'>
					<button type="submit" className="btn btn-outline-info shadow" id="profile-edit" onClick={()=>props.setPage('edit')}>EDIT</button>
					<button type="submit" className="btn btn-outline-danger shadow" id="profile-logout">LOGOUT</button>
				</div>
			</div>
		</>
	)
}

export default Main;
