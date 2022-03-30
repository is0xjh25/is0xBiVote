import React from 'react';
import Logo from '../images/Bivote-logo.png';
import { MdHowToVote, MdHistoryEdu, MdAccountBox } from 'react-icons/md';
import { CgDarkMode } from 'react-icons/cg';
import './Navbar.css';

const NavBar = (props) => {
  return (
	<div id='navbar-frame'>
		<div id='navbar-left'>
			<a id='navbar-logo' href="#">
				<img id='navbar-logo-image' src={Logo} alt="BiVote-logo"/>
				<span id='navbar-logo-text'>
					<span>B</span>
					<span>i</span>
					Vote
				</span>
			</a>
		</div>
		<div id='navbar-right'>
			<div class='navbar-link' style={{flex: 2}}>
				<a href="#">
					VOTE
					<MdHowToVote/>
				</a>
			</div>
			<div class='navbar-link'>
				<a href="#">
					HISTORY
					<MdHistoryEdu/>
				</a>
			</div>
			<div class='navbar-link'>
				<a href="#">
					{props.user}
					<MdAccountBox/>				
				</a>
			</div>
			<div class='navbar-link' style={{flex: 1, textAlign: "center"}}>
				<a href="#">
					<CgDarkMode />				
				</a>
			</div>
		</div>
	</div>
  );
}

export default NavBar;
