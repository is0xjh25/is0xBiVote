import React from 'react';
import NavBar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import './NotFound.css';

const NotFound = () => {
  return (
		<>
			<header>
				<NavBar/>
			</header>
			<main>
				<div id='not-found-frame'>
					<div className='not-found-section'>
						404
					</div>
					<div className='not-found-section'>
						PAGE NOT FOUND
					</div>
					<div className='not-found-section'>
						<a href='/'># Go To Home #</a>
					</div>
				</div>
			</main>
			<footer>
				<Footer/>
			</footer> 
		</>
	)
};

export default NotFound;