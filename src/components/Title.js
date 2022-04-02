import React from 'react';
import './Title.css';

const Title = (props) => {
	
	const { id, name, type, status } = props;

	return (
		<div className='title'>
			<span id='title-id'># {id}</span>
			<span id='title-status'><strong>{status.toUpperCase()}</strong></span>
			<span id='title-type-name'>[{type.toUpperCase()}] <strong>{name}</strong></span>
		</div>
	)
}

export default Title;