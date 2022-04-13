import React, { useState, useEffect } from 'react';
import { MdHowToVote, MdHistoryEdu, MdAccountBox } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg';
import { getCookie } from '../api/Utilities.js';
import Logo from '../images/Bivote-logo.png';
import './Navbar.css';

const NavBar = () => {
	
	const[username, setUsername] = useState('')

	useEffect(() => {
		setUsername(getCookie('username'));

		return () => {
			setUsername();
		};
	}, [])

  return (
		<div id='navbar-frame'>
			<div id='navbar-left'>
				<a id='navbar-logo' href='/'>
					<img id='navbar-logo-image' src={Logo} alt="BiVote-logo"/>
					<span id='navbar-logo-text'>
						<span>B</span>
						<span>i</span>
						Vote
					</span>
				</a>
			</div>
			<div id='navbar-right'>
				<span id='navbar-title'>
					<span>B</span>
					<span>i</span>
					Vote
				</span>
				<div className='navbar-link' style={{flex: 3, textAlign: 'end'}}>
					<a href='/profile'>
						{username}
						<MdAccountBox/>				
					</a>
				</div>
				<div className='navbar-link'>
					<a href='/vote'>
						VOTE
						<MdHowToVote/>
					</a>
				</div>
				<div className='navbar-link'>
					<a href='/history'>
						HISTORY
						<MdHistoryEdu/>
					</a>
				</div>
				<div className='navbar-link' style={{flex: 1, textAlign: 'center'}}>
					<a href='#'>
						<CgDarkMode/>				
					</a>
				</div>
			</div>
			<div id='navbar-dropdown' className='dropdown'>
				<button className='btn btn-primary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
					<AiOutlineMenu/>
				</button>
				<div className='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuButton'>
					<a className='dropdown-item' href='#'>MODE<CgDarkMode/></a>
					<a className='dropdown-item' href='/vote'>VOTE<MdHowToVote/></a>
					<a className='dropdown-item' href='/history'>HISTORY<MdHistoryEdu/></a>
					<a className='dropdown-item' href='/profile'>{username}<MdAccountBox/></a>
				</div>
			</div>
		</div>
  )
};

export default NavBar;
