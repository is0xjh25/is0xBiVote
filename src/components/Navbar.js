import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { MdHowToVote, MdHistoryEdu, MdAccountBox } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import { logout } from '../api/Profile.js';
import { getCookie } from '../api/Utilities.js';
import Logo from '../images/bivote-logo.png';
import './Navbar.css';

const NavBar = () => {
	
	const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
	const[username, setUsername] = useState('');

	const handleLogout = () => {
		if (getCookie('token') || getCookie('username')) enqueueSnackbar("Log out successfully.", {variant:'success'}); 
		logout();
		navigate('/login');
	};

	useEffect(() => {
		// initialize
		let name = getCookie('username');
		if (name === '') name = 'Guest';
		setUsername(name);

		return () => {
			setUsername('');
		};
	}, []);

  return (
		<div id='navbar-frame'>
			<div id='navbar-left'>
				<button id='navbar-logo' onClick={()=>navigate('/')}>
					<img id='navbar-logo-image' src={Logo} alt="BiVote-logo"/>
					<span id='navbar-logo-text'>
						<span>B</span>
						<span>i</span>
						Vote
					</span>
				</button>
			</div>
			<div id='navbar-right'>
				<span id='navbar-title'>
					<span>B</span>
					<span>i</span>
					Vote
				</span>
				<div className='navbar-link'>
					<button onClick={()=>navigate('/vote')}>
						VOTE
						<MdHowToVote/>
					</button>
				</div>
				<div className='navbar-link'>
					<button onClick={()=>navigate('/history')}>
						HISTORY
						<MdHistoryEdu/>
					</button>
				</div>
				<div className='navbar-link'>
					<button onClick={()=>navigate('/profile')}>
						{username}
						<MdAccountBox/>				
					</button>
				</div>
				<div className='navbar-link'>
					<button onClick={()=>handleLogout()}>
						<FaSignOutAlt/>
					</button>
				</div>
			</div>
			<div id='navbar-dropdown' className='dropdown'>
				<button className='btn btn-primary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
					<AiOutlineMenu/>
				</button>
				<div className='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuButton'>
					<button className='dropdown-item dropdown-selection' onClick={()=>navigate('/vote')}><MdHowToVote/>VOTE</button>
					<button className='dropdown-item dropdown-selection' onClick={()=>navigate('/history')}><MdHistoryEdu/>HISTORY</button>
					<button className='dropdown-item dropdown-selection' onClick={()=>navigate('/profile')}><MdAccountBox/>{username}</button>
					<button className='dropdown-item dropdown-selection' onClick={()=>handleLogout()}><FaSignOutAlt/>LOGOUT</button>
				</div>
			</div>
		</div>
  );
};

export default NavBar;
