import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { countDown } from '../utilities/Utilities.js';
import './Result.css';

const Analysis = (props) => {
	
	const { info } = props;
	const navigate = useNavigate();
	const [dueTime, setDueTime] = useState('');

	useEffect(() => {
		
		const interval = setInterval(() => {
			setDueTime(countDown(info.endTime));
		}, 1000);

		return () => {
			clearInterval(interval);
			setDueTime();
		}
	}, []);

	return (
		<div className='analysis-section'>
			{
				info.voteStatus === 'closed' ? (
					<>
						<div className='analysis-row'>
							<span className='analysis-data-text'>{info.startTime}</span> to <span className='analysis-data-text'>{info.endTime}</span>
						</div>
						<div className='analysis-row analysis-data-desktop'>
							<span>Your Vote: <span className='analysis-data-text'>{info.userVote.toUpperCase()}</span></span>
						</div>
						<div className='analysis-row'>
							<div className='progress'>
								<div className='progress-bar bg-success progress-bar-striped progress-bar-animated' style={{width:`${info.yes/(info.yes+info.no)*100}%`}}>
									{info.yes} YES
								</div>
								<div className='progress-bar bg-danger progress-bar-striped progress-bar-animated' style={{width:`${info.no/(info.yes+info.no)*100}%`}}>
									{info.no} NO
								</div>
							</div>
						</div>
						<div className='analysis-row analysis-data-desktop'>
							<span>Not Interested: <span className='analysis-data-text'>{info.notInterested}</span></span>
							<span>Changed Mind: <span className='analysis-data-text'>{info.changeMind}</span></span>
						</div>
						<div className='analysis-row analysis-data-desktop'>
							<span>Inspired by Others: <span className='analysis-data-text'>{info.inspiredByOthers}</span></span>
							<span>Hard To Tell: <span className='analysis-data-text'>{info.hardToTell}</span></span>
						</div>
						<div className='analysis-row analysis-data-mobile'>
							<span>Not Interested: <span className='analysis-data-text'>{info.notInterested}</span></span>
							<span>Changed Mind: <span className='analysis-data-text'>{info.changeMind}</span></span>
							<span>Inspired by Others: <span className='analysis-data-text'>{info.inspiredByOthers}</span></span>
							<span>Hard To Tell: <span className='analysis-data-text'>{info.hardToTell}</span></span>
						</div>
					</>
				) : info.voteStatus === 'progressing' ? (
					<>
						<div className='analysis-row'>
							<span className='analysis-data-text'>{info.startTime}</span> to <span className='analysis-data-text'>{info.endTime}</span>
						</div>
						<div className='analysis-row'>
							<span>Time Remaining: <span className='analysis-data-text'>{dueTime}</span></span>
						</div>
						<div className='analysis-row analysis-data-desktop'>
							<span>Your Vote: <span className='analysis-data-text'>{info.userVote.toUpperCase()}</span></span>
						</div>
						<div className='analysis-row'>
							<span>Leading Side: <span className='analysis-data-text'>{info.leading.toUpperCase()}</span></span>
						</div>
						<div className='analysis-row'>
							<div className='progress'>
								<div className='progress-bar bg-success progress-bar-striped progress-bar-animated' style={{width:`${info.yes/(info.yes+info.no)*100}%`}}>
									{info.yes} YES
								</div>
								<div className='progress-bar bg-danger progress-bar-striped progress-bar-animated' style={{width:`${info.no/(info.yes+info.no)*100}%`}}>
									{info.no} NO
								</div>
							</div>
						</div>
					</>
				) : null
			}
			<div className='analysis-row'>
				{
					info.voteStatus === 'progressing' ? (
						<button type='submit' className='btn btn-outline-warning shadow' onClick={()=>navigate('/vote')}>MENU</button>
					) : info.voteStatus === 'closed' ? (
						<button type='submit' className='btn btn-outline-warning shadow' onClick={()=>navigate('/history')}>BACK</button>
					) : null
				}
			</div>
		</div>
	)
};

export default Analysis;