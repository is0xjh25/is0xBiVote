import React from 'react';
import './Title.css';

const Title = (props) => {
	
	const { vote } = props;

	return (
		<div className='title-section'>
			<div className='title'>
				<span id='title-id'># {vote.id}</span>
				<span id='title-status'><strong>{vote.status.toUpperCase()}</strong></span>
				<span id='title-type-name'>[{vote.category.toUpperCase()}] <strong>{vote.name}</strong></span>
			</div>
		</div>
	)
};

export default Title;