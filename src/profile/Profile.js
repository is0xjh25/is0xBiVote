import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import NavBar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Main from './Main';
import Edit from './Edit';
import { checkAuthorized } from '../api/Utilities.js';
import './Profile.css';

const Profile = () => {
	
	const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
	const [page, setPage] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
		setUsername("is0xjh25")
		setEmail("is0.jimhsiao@gmail.com");
		setPassword("*********");
		
    // const cookie= getCookie('token');

    // if (cookie === "") {
    //   enqueueSnackbar("Please login first.",{variant:'warning'});
    //   setUser("");
    // }  else {
    //   setUser(cookie);
    // }

    return () => {
      setPage();
      setUsername();
      setEmail();
      setPassword();
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
						<Main setPage={setPage} username={username} email={email} password={password}/> 
					) : ( 
						<Edit setPage={setPage} setEmail={setEmail} setPassword={setPassword} username={username} email={email} password={password}/> 
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
