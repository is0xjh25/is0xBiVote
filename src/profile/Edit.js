import React from 'react';
import './Profile.css';

const Edit = (props) => {

	const { username, email, password, passwordTwo, handleDiscard, handleOnChange, handleSubmit } = props;

	return ( 
		<div id='profile-frame'>
			<div className='profile-left'>
				<div className='profile-section'>
					<label htmlFor='profile-email'>email</label>
					<input name='email' type='email' id='profile-email' value={email} onChange={handleOnChange}/>
				</div>
				<div className='profile-section'>
					<label htmlFor='profile-password'>password</label>
					<input name='password' type='password' id='profile-password' maxLength='32' placeholder={'********'} value={password} onChange={handleOnChange}/>
				</div>
				<div className='profile-section'>
					<label htmlFor='profile-password'>confirm password</label>
					<input name='passwordTwo' type='password' id='profile-password' maxLength='32' placeholder={'********'} value={passwordTwo} onChange={handleOnChange}/>
				</div>
			</div>
			<div id='profile-right-edit'>
				<div className='profile-section'>
					<label htmlFor='profile-username'>username</label>
					<input type='text' id='profile-username' value={username} disabled/>
				</div>
				<div className='profile-section profile-button-set'>
					<button type='submit' className='btn btn-outline-danger shadow' id='profile-discard' onClick={handleDiscard}>DISCARD</button>
					<button type='submit' className='btn btn-outline-success shadow' id='profile-update' onClick={handleSubmit}>UPDATE</button>
				</div>
			</div>
		</div>
	)
};

export default Edit;