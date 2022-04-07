import React, { useState, useEffect} from 'react';
import { countDown } from '../utilities/Utilities.js';
import Title from '../components/Title.js';
import './Vote.css';

const VotePick = (props) => {
	
	const { info, status, handleOnSubmit} = props;
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
		<div id='vote-pick-frame'>
			<Title info={info}/>
			<div id='vote-pick-desktop' className='main-section'>
				<div className='vote-pick-section' name='yes'>
					<button type='submit' className='btn btn-outline-success shadow' name={status} value={'yes'} onClick={handleOnSubmit}>YES</button>
				</div>
				<div className='vote-pick-section' name='info'>
					{
						status === 'voteOne' ? (
							<span><strong>1st VOTE</strong></span>
						) : status === 'voteTwo' ? (
							<span>2nd VOTE</span>
						) : null
					}
					<span>Time Remaining...</span>
					<span>{dueTime}</span>
					<span className='vote-pick-sub-button-set'>
						<button type='submit' className='' name={status} value={'noIdea'}>no idea</button>
						<button type='submit' className='' name={status} value={'notInterested'} onClick={handleOnSubmit}>not interested</button>
					</span>
				</div>
				<div className='vote-pick-section' name='no'>
					<button type='submit' className='btn btn-outline-danger shadow' name={status} value={'no'}>NO</button>
				</div>
			</div>
			<div id='vote-pick-mobile' className='main-section'>
				<div className='vote-pick-main-button-set'>
					<button type='submit' className='btn btn-outline-success shadow' name={status} value={'yes'} onClick={handleOnSubmit}>YES</button>
					<button type='submit' className='btn btn-outline-danger shadow' name={status} value={'no'}>NO</button>
				</div>
				<div className='vote-pick-section' name='info'>
					{
						status === 'voteOne' ? (
							<span><strong>1st VOTE</strong></span>
						) : status === 'voteTwo' ? (
							<span>2nd VOTE</span>
						) : null
					}
					<span>Time Remaining...</span>
					<span>{dueTime}</span>
					<span className='vote-pick-sub-button-set'>
						<button type='submit' className='' name={status} value={'noIdea'}>no idea</button>
						<button type='submit' className='' name={status} value={'notInterested'} onClick={handleOnSubmit}>not interested</button>
					</span>
				</div>
			</div>
		</div>
	)
};

export default VotePick;