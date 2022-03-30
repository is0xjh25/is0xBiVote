import React, { useState, useEffect } from 'react';
import './Profile.css';

const Edit = (props) => {

	const [emailTemp, setEmailTemp] = useState("");
	const [passwordTemp, setPasswordTemp] = useState("");

	const handleOnChange = (e) => {
		if (e.target.name === "email") {
			setEmailTemp(e.target.value);
		} else if (e.target.name === "password") {
			setPasswordTemp(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.setEmail(emailTemp);
		props.setPassword(passwordTemp);
		props.setPage('main');
	};

	useEffect(() => {
		setEmailTemp(props.email);
		setPasswordTemp(props.password);
    // const cookie= getCookie('token');

    // if (cookie === "") {
    //   enqueueSnackbar("Please login first.",{variant:'warning'});
    //   setUser("");
    // }  else {
    //   setUser(cookie);
    // }

    return () => {
      setEmailTemp("");
      setPasswordTemp("");
    }
  }, [])

	return ( 
		<>
			<div className='profile-left'>
				<div className='profile-section'>
					<label htmlFor="profile-username">username</label>
					<input type="text" id="profile-username" value={props.username} disabled/>
				</div>
				<div className='profile-section'>
					<label htmlFor="profile-email">email</label>
					<input name="email" type="email" id="profile-email" value={emailTemp} onChange={handleOnChange}/>
				</div>
				<div className='profile-section'>
					<label htmlFor="profile-password">password</label>
					<input name="password" type="password" id="profile-password" value={passwordTemp} onChange={handleOnChange}/>
				</div>
			</div>
			<div id='profile-right-edit'>
				<div className='profile-section profile-button-set'>
					<button type="submit" className="btn btn-outline-danger shadow" id="profile-discard" onClick={()=>props.setPage('main')}>DISCARD</button>
					<button type="submit" className="btn btn-outline-success shadow" id="profile-update" onClick={handleSubmit}>UPDATE</button>
				</div>
			</div>
		</>
	)
}

export default Edit;