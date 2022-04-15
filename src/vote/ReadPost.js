import React, { useState, useEffect} from 'react';
import { countDown } from '../utilities/Utilities.js';
import Post from '../post/Post.js';
import './Vote.css';

const ReadPost = (props) => {
	
	const { vote, post, status, handleOnSubmit } = props;
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
		<>
			<div id='vote-read-post-info'>
				<span className='vote-title'><strong>Reading Time</strong></span>
				<span>Clock is ticking...</span>
				<span>{endTime}</span>
				<button type='submit' className='btn btn-outline-warning shadow' name={status} onClick={handleOnSubmit}>NEXT</button>
			</div>
			<Post post={post} ownedFN={false}/>
		</>
	)
};

export default ReadPost;