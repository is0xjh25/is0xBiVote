import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import Result from '../result/Result.js';
import './VoteEntry.css';

const demoVote = {
	voteID: 1,
	voteName: "Is the Loch Ness Monster real?",
	voteType: "mystery",
	endTime: "April 8 2022 00:00:00",
	preStatus: "voteTwo"
}

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

		if (demoVote.preStatus === 'voteTwo') navigate(`/history/${demoVote.voteID}`)

		switch(demoVote.preStatus) {
			case 'start':
				setPage('voteOne');
				break;
			case 'voteOne':
				setPage('reading');
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
			{
 				page === 'result' ? (
					<Result/>
				) : null
			}
		</>
	)
};

export default Vote;