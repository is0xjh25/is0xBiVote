import React, { useState, useEffect} from 'react';
import Post from '../post/Post.js';
import { checkAuthorized } from '../api/Utilities.js';
import { countDown } from '../utilities/Utilities.js';
import './Vote.css';

const ReadPost = (props) => {
	
	const { vote, post, status, handleOnSubmit } = props;
	const [authorized, setAuthorized] = useState(false);
	const [endTime, setEndTime] = useState('');

	useEffect(() => {
		// check logged in
		(async () => {
			const auth =  await checkAuthorized();
			if (auth.login) {
				setAuthorized(true);
			} else {
				setAuthorized(false);
			};
		})();

		// for counting down
		const interval = setInterval(() => {
			setEndTime(countDown(vote.end_time));
		}, 1000);

		return () => {
			clearInterval(interval);
			setEndTime('');
			setAuthorized(false);
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
			<Post post={post} ownedFN={false} authorized={authorized}/>
		</>
	);
};

export default ReadPost;