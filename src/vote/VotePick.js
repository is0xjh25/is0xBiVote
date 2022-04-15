import React, { useState, useEffect} from 'react';
import { countDown } from '../utilities/Utilities.js';
import './Vote.css';

const VotePick = (props) => {
	
	const { info, status, handleOnSubmit} = props;
	const [dueTime, setDueTime] = useState('');

	useEffect(() => {
		// for counting time
		const interval = setInterval(() => {
			setDueTime(countDown(info.end_time));
		}, 1000);

		return () => {
			clearInterval(interval);
			setDueTime();
		};
	}, []);

	return (
		<>
			<div id='vote-pick-desktop'>
				<div className='vote-pick-section' name='yes'>
					<button type='submit' className='btn btn-outline-success shadow' name={status} value={'yes'} onClick={handleOnSubmit}>YES</button>
				</div>
				<div className='vote-pick-section' name='info'>
					{
						status === 'voteOne' ? (
							<span className='vote-title'><strong>1st VOTE</strong></span>
						) : status === 'voteTwo' ? (
							<span className='vote-title'><strong>2nd VOTE</strong></span>
						) : null
					}
					<span>Clock is ticking...</span>
					<span>{dueTime}</span>
					<span className='vote-pick-sub-button-set'>
						<button type='submit' name={status} value={'no_opinion'} onClick={handleOnSubmit}>no idea</button>
						{
							status === 'voteOne' ? (
								<button type='submit' name={status} value={'not_interested'} onClick={handleOnSubmit}>not interested</button>
							) : null
						}
					</span>
				</div>
				<div className='vote-pick-section' name='no'>
					<button type='submit' className='btn btn-outline-danger shadow' name={status} value={'no'} onClick={handleOnSubmit}>NO</button>
				</div>
			</div>
			<div id='vote-pick-mobile'>
				<div className='vote-pick-main-button-set'>
					<button type='submit' className='btn btn-outline-success shadow' name={status} value={'yes'} onClick={handleOnSubmit}>YES</button>
					<button type='submit' className='btn btn-outline-danger shadow' name={status} value={'no'} onClick={handleOnSubmit}>NO</button>
				</div>
				<div className='vote-pick-section' name='info'>
					{
						status === 'voteOne' ? (
							<span className='vote-title'><strong>1st VOTE</strong></span>
						) : status === 'voteTwo' ? (
							<span className='vote-title'>2nd VOTE</span>
						) : null
					}
					<span>Clock is ticking...</span>
					<span>{dueTime}</span>
					<span className='vote-pick-sub-button-set'>
						<button type='submit' name={status} value={'no_opinion'} onClick={handleOnSubmit}>no idea</button>
						<button type='submit' name={status} value={'not_interested'} onClick={handleOnSubmit}>not interested</button>
					</span>
				</div>
			</div>
		</>
	)
};

export default VotePick;