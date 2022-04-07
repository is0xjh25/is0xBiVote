import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import './VoteEntry.css';

const demoVote = {
	voteName: "Is the Loch Ness Monster real?",
	voteType: "mystery",
	end: "2022-04-08 00:00:01",
	preStatus: "start"
};

const Vote = () => {

	const { id } = useParams();
	const navigate = useNavigate();
	const [page, setPage] = useState('');
	const [vote1, setVote1] = useState('');
	const [vote2, setVote2] = useState('');
	const [post, setPost] = useState('');
	const [nowStatus, setNowStatus] = useState('');
	const [dueTime, setDueTime] = useState('');

	useEffect(() => {

		// wrong path
		if (!['world', 'mystery', 'sport', 'entertainment'].includes(id)) {
			navigate('/vote');
		};

		// call api .then
		switch(demoVote.preStatus) {
			case 'start':
				setPage('voteOne');
				break;
			case 'voteOne':
				setPage('reading');
				break;
			case 'voteTwo':
				setPage('result');
				break;
			default:
				setPage('voteOne');
		}
		
		return () => {
			setPage();
			setVote1();
			setVote2();
			setPost();
			setNowStatus();
			setDueTime();
		}
	}, []);


	return (
		<>
			{/* {
				page === 'voteOne' ? (

				) : page === 'reading' ? (

				) : page === 'voteTwo' ? (

				) : page === 'result' ? (

				) : null
			} */}
		</>
	)
};

export default Vote;