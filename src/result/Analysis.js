import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { countDown, dateTimeHandler } from '../utilities/Utilities.js';
import './Result.css';

const Analysis = (props) => {
	
	const { vote, userVote } = props;
	const navigate = useNavigate();
	const [endTime, setEndTime] = useState('');

	useEffect(() => {
		// for counting down
		const interval = setInterval(() => {
			setEndTime(countDown(vote.end_time));
		}, 1000);

		return () => {
			clearInterval(interval);
			setEndTime('');
		};
	}, [vote]);

	return (
		<div className='analysis-section'>
			{
				vote.status === 'closed' ? (
					<>
						<div className='analysis-row'>
							<span className='analysis-data-text'>{dateTimeHandler(vote.start_time)}</span> to <span className='analysis-data-text'>{dateTimeHandler(vote.end_time)}</span>
						</div>
						<div className='analysis-row'>
							<span>Your Vote: <span className='analysis-data-text'>{userVote !== null ? userVote.toUpperCase().replace('_', ' ') : "No Record"}</span></span>
						</div>
						<div className='analysis-row'>
							<div className='progress'>
								<div className='progress-bar bg-success progress-bar-striped progress-bar-animated' style={{width:`${vote.statistics.yes/(vote.statistics.yes+vote.statistics.no)*100}%`}}>
									{vote.yes} YES
								</div>
								<div className='progress-bar bg-danger progress-bar-striped progress-bar-animated' style={{width:`${vote.statistics.no/(vote.statistics.yes+vote.statistics.no)*100}%`}}>
									{vote.no} NO
								</div>
							</div>
						</div>
						<div className='analysis-row analysis-data-desktop'>
							<span>Not Interested: <span className='analysis-data-text'>{vote.statistics.not_interested}</span></span>
							<span>Changed Mind: <span className='analysis-data-text'>{vote.statistics.change_mind}</span></span>
						</div>
						<div className='analysis-row analysis-data-desktop'>
							<span>Inspired by Others: <span className='analysis-data-text'>{vote.statistics.inspired_by_others}</span></span>
							<span>Hard To Tell: <span className='analysis-data-text'>{vote.statistics.hard_to_tell}</span></span>
						</div>
						<div className='analysis-row analysis-data-mobile'>
							<span>Not Interested: <span className='analysis-data-text'>{vote.statistics.not_interested}</span></span>
							<span>Changed Mind: <span className='analysis-data-text'>{vote.statistics.change_mind}</span></span>
							<span>Inspired by Others: <span className='analysis-data-text'>{vote.statistics.inspired_by_others}</span></span>
							<span>Hard To Tell: <span className='analysis-data-text'>{vote.statistics.hard_to_tell}</span></span>
						</div>
					</>
				) : vote.status === 'progressing' ? (
					<>
						<div className='analysis-row'>
							<span className='analysis-data-text'>{dateTimeHandler(vote.start_time)}</span> to <span className='analysis-data-text'>{dateTimeHandler(vote.end_time)}</span>
						</div>
						<div className='analysis-row'>
							<span>Time Remaining: <span className='analysis-data-text'>{endTime}</span></span>
						</div>
						<div className='analysis-row'>
							<span>Your Vote: <span className='analysis-data-text'>{userVote !== null ? userVote.toUpperCase().replace('_', ' ') : "No Record"}</span></span>
						</div>
						<div className='analysis-row'>
							<span>Leading Side: <span className='analysis-data-text'>{vote.statistics.leading.toUpperCase()}</span></span>
						</div>
						<div className='analysis-row'>
							<div className='progress'>
								<div className='progress-bar bg-success progress-bar-striped progress-bar-animated' style={{width:`${vote.statistics.yes/(vote.statistics.yes+vote.statistics.no)*100}%`}}>
									{vote.statistics.yes} YES
								</div>
								<div className='progress-bar bg-danger progress-bar-striped progress-bar-animated' style={{width:`${vote.statistics.no/(vote.statistics.yes+vote.statistics.no)*100}%`}}>
									{vote.statistics.no} NO
								</div>
							</div>
						</div>
					</>
				) : null
			}
			<div className='analysis-row'>
				{
					vote.status === 'progressing' ? (
						<button type='submit' className='btn btn-outline-warning shadow' onClick={()=>navigate('/vote')}>MENU</button>
					) : vote.status === 'closed' ? (
						<button type='submit' className='btn btn-outline-warning shadow' onClick={()=>navigate('/history')}>BACK</button>
					) : null
				}
			</div>
		</div>
	)
};

export default Analysis;