import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import NavBar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { getWeeklyVotes } from '../api/Vote.js';
import './Vote.css';

const VoteEntry = () => {

	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const [votes, setVotes] = useState('');

	const handleInitialize = () => {
		getWeeklyVotes()
		.then(res => {
			if (res.ok) {
				enqueueSnackbar(res.body.message, {variant:'success'});
				setVotes(res.body.vote_entries);
			} else if ([500, 501, 502, 503, 504].includes(res.status)) {
				enqueueSnackbar("server error, please try again later", {variant:'error'});
			} else {
				enqueueSnackbar(res.body.message, {variant:'error'});
			};
		});
	}
	
	useEffect(() => {
		// initialize
		handleInitialize();

		return () => {
			setVotes();
		};
	}, []);

	return (
		<>
			<header>
				<NavBar/>
			</header>
			<main>
				<div id='vote-entry-frame'>
					<h2>Let's VOTE</h2>
					<button className='vote-options shadow' id='vote-world' onClick={()=>navigate(`/vote/${votes.world}`)}>
						WORLD
					</button>
					<button className='vote-options shadow' id='vote-mystery' onClick={()=>navigate(`/vote/${votes.mystery}`)}>
						MYSTERY
					</button>
					<button className='vote-options shadow' id='vote-sport' onClick={()=>navigate(`/vote/${votes.sport}`)}>
						SPORT
					</button>
					<button className='vote-options shadow' id='vote-entertainment' onClick={()=>navigate(`/vote/${votes.entertainment}`)}>
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