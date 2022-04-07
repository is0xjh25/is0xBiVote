import React from 'react';
import './Title.css';

const Title = (props) => {
	
	const { info } = props;

	return (
		<div className='title-section'>
			<div className='title'>
				<span id='title-id'># {info.voteID}</span>
				<span id='title-status'><strong>{info.voteStatus.toUpperCase()}</strong></span>
				<span id='title-type-name'>[{info.voteType.toUpperCase()}] <strong>{info.voteName}</strong></span>
			</div>
		</div>
	)
};

export default Title;