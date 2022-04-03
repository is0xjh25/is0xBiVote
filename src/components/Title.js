import React from 'react';
import './Title.css';

const Title = (props) => {
	
	const { info } = props;

	return (
		<div className='title-section'>
			<div className='title'>
				<span id='title-id'># {info.id}</span>
				<span id='title-status'><strong>{info.status.toUpperCase()}</strong></span>
				<span id='title-type-name'>[{info.type.toUpperCase()}] <strong>{info.name}</strong></span>
			</div>
		</div>
	)
}

export default Title;