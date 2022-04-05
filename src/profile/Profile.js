import React, { useState, useEffect } from 'react';
import Main from './Main';
import Edit from './Edit';
import './Profile.css';

const Profile = () => {
	
	const [page, setPage] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		
		setPage('main');
		setUsername("is0xjh25")
		setEmail("is0.jimhsiao@gmail.com");
		setPassword("123");
		
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
  }, [])

	return (
		<>
			{ 
				page === 'main' ? (
					<Main setPage={setPage} username={username} email={email} password={password}/> 
				) : ( 
					<Edit setPage={setPage} setEmail={setEmail} setPassword={setPassword} username={username} email={email} password={password}/> 
				)
			}
		</>
  );
}

export default Profile;
