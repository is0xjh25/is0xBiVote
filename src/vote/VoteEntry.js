import React from 'react';
import './VoteEntry.css';

const Vote = () => {
	return (
		<div id='vote-entry-frame'>
			<h2>Let's VOTE</h2>
			<button className='vote-options shadow' id='vote-world'>
				WORLD
			</button>
			<button className='vote-options shadow' id='vote-mystery'>
				MYSTERY
			</button>
			<button className='vote-options shadow' id='vote-sport'>
				SPORT
			</button>
			<button className='vote-options shadow' id='vote-entertainment'>
				ENTERTAINMENT
			</button>
		</div>
	)
}

export default Vote;