import React, { useState, useEffect} from 'react';
import { countDown } from '../utilities/Utilities.js';
import Post from '../post/Post.js';
import './Vote.css';

const ReadPost = (props) => {
	
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
		<>
			<div id='vote-read-post-info'>
				<span className='vote-title'><strong>Reading Time</strong></span>
				<span>Clock is ticking...</span>
				<span>{dueTime}</span>
				<button type='submit' className='btn btn-outline-warning shadow' name={status} onClick={handleOnSubmit}>NEXT</button>
			</div>
			<Post info={info} ownedFN={false}/>
		</>
	)
};

export default ReadPost;