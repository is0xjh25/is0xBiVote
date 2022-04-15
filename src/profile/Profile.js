import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import NavBar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Main from './Main';
import Edit from './Edit';
import { getProfile, editProfile, logout } from '../api/Profile.js';
import { checkAuthorized } from '../api/Utilities.js';
import { handleOnValidation } from '../utilities/Utilities.js';
import './Profile.css';

const Profile = () => {
	
	const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
	const [page, setPage] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [oldEmail, setOldEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordTwo, setPasswordTwo] = useState('');
	const [statistics, setStatistics] = useState({});

	const handleInitialize = () => {
		getProfile()
		.then(res => {
			if (res.ok) {
				setUsername(res.body.user.username);
				setEmail(res.body.user.email);
				setOldEmail(res.body.user.email);
				setPassword("");
				setPasswordTwo("");
				setStatistics(res.body.user.statistics);
			} else if (res.status === 403) {
				navigate('/login');
				enqueueSnackbar(res.body.message, {variant:'warning'});
			} else if ([500, 501, 502, 503, 504].includes(res.status)) {
				enqueueSnackbar("server error, please try again later", {variant:'error'});
			} else {
				enqueueSnackbar(res.body.message, {variant:'error'});
			};
		});
	}

	const handleOnChange = (e) => {
		if (e.target.name === 'email') {
			setEmail(e.target.value);
		} else if (e.target.name === 'password') {
			setPassword(e.target.value);
		} else if (e.target.name === 'passwordTwo') {
			setPasswordTwo(e.target.value);
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let check = handleOnValidation('profile', {email: email, oldEmail: oldEmail, password: password, passwordTwo: passwordTwo});
		if (!check.valid) {
			enqueueSnackbar(check.message, {variant:'warning'}); 
		} else {
			editProfile(email, password)
			.then(res => {
				if (res.ok) {
					setPage('main');
					setUsername(res.body.user.username);
					setEmail(res.body.user.email);
					setPassword("");
					setPasswordTwo("");
					enqueueSnackbar(res.body.message, {variant:'success'});
				} else if (res.status === 403) {
					navigate('/login');
					enqueueSnackbar(res.body.message, {variant:'warning'});
				} else if ([500, 501, 502, 503, 504].includes(res.status)) {
					enqueueSnackbar("server error, please try again later", {variant:'error'});
				} else {
					enqueueSnackbar(res.body.message, {variant:'error'});
				};
		});
		};
	};

	const handleDiscard = () => {
		setPage('main');
		handleInitialize();
	};

	const handleLogout = () => {
		logout();
		navigate('/login');
		enqueueSnackbar("logout successfully", {variant:'success'}); 
	};

	useEffect(() => {
		// check logged in
		(async () => {
			const auth =  await checkAuthorized();
			if (!auth.login) {
				navigate('/login');
				enqueueSnackbar(auth.message, {variant:'warning'});
			}; 
		})();

		// initialize
		setPage('main');
		handleInitialize();

    return () => {
      setPage();
      setUsername();
      setEmail();
			setOldEmail();
      setPassword();
      setPasswordTwo();
			setStatistics();
    }
  }, []);

	return (
		<>
			<header>
				<NavBar/>
			</header>
			<main>
				{ 
					page === 'main' ? (
						<Main setPage={setPage} username={username} email={email} password={password} statistics={statistics} handleLogout={handleLogout}/> 
					) : ( 
						<Edit setPage={setPage} username={username} email={email} password={password} passwordTwo={passwordTwo} handleDiscard={handleDiscard} handleOnChange={handleOnChange} handleSubmit={handleSubmit}/> 
					)
				}
			</main>
			<footer>
				<Footer/>
			</footer> 
		</>
  )
};

export default Profile;
