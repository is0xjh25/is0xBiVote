import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import './Vote.css';

const VoteEntry = () => {

	const navigate = useNavigate();

	return (
		<>
			<header>
				<NavBar/>
			</header>
			<main>
				<div id='vote-entry-frame'>
					<h2>Let's VOTE</h2>
					<button className='vote-options shadow' id='vote-world' onClick={()=>navigate('/vote/world')}>
						WORLD
					</button>
					<button className='vote-options shadow' id='vote-mystery' onClick={()=>navigate('/vote/mystery')}>
						MYSTERY
					</button>
					<button className='vote-options shadow' id='vote-sport' onClick={()=>navigate('/vote/sport')}>
						SPORT
					</button>
					<button className='vote-options shadow' id='vote-entertainment' onClick={()=>navigate('/vote/entertainment')}>
						ENTERTAINMENT
					</button>
				</div>
			</main>
			<footer>
				<Footer/>
			</footer> 
		</>
	)
};

export default VoteEntry;