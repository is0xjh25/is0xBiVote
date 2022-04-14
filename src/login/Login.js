import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import Favicon from '../images/Bivote-favicon.png';
import Main from './Main.js';
import Register from './Register.js';
import Rescue from './Rescue.js';
import { checkAuthorized } from '../api/Utilities.js';
import './Login.css';

const Login = () => {
	
	const navigate = useNavigate();
	const [page, setPage] = useState('');

	useEffect(() => {
		// check logged in
		(async () => {
			const auth =  await checkAuthorized();
			if (auth.login) navigate('/');
		})();

		// initialize
		setPage('main');
		
		return () => {
			setPage();
		}
	}, []);

	return (
		<main style={{height: '100vh', top:0}}>
			<div id='login-frame'>
				<div id='login-left'>
					<img id='login-logo-image' src={Favicon} alt="BiVote-favicon"/>
				</div>
				<div id='login-right'>
					{
						page === 'main' ? (
							<Main setPage={setPage}/>
						) : page === 'register' ? (
							<Register setPage={setPage}/>
						) : page === 'rescue' ? (
							<Rescue setPage={setPage}/>
						) : null 
					}
				</div>
			</div>
		</main>
  )
};

export default Login;
