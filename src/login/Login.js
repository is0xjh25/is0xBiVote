import React, { useState } from 'react';
import Favicon from '../images/Bivote-favicon.png';
import Main from './Main.js';
import Register from './Register.js';
import Rescue from './Rescue.js';
import './Login.css';

const Login = () => {
	
	const [page, setPage] = useState('main');

	return (
	<div id='login-frame'>
		<div id='login-left'>
			<img id='login-logo-image' src={Favicon} alt="BiVote-favicon"/>
		</div>
		<div id='login-right'>
			{page === 'main' ? (
					<Main setPage={setPage}/>
				) : page === 'register' ? (
					<Register setPage={setPage}/>
				) : page === 'rescue' ? (
					<Rescue setPage={setPage}/>
				) : null 
			}
		</div>
		<div id='login-bot'>
			Developed by - is0xjh25
		</div>
	</div>
  );
}

export default Login;
