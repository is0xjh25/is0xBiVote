import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
		<div id='not-found-frame'>
			<div className='not-found-section'>
				404
			</div>
			<div className='not-found-section'>
				PAGE NOT FOUND
			</div>
			<div className='not-found-section'>
				<a href='/'># Go To Home #</a>
			</div>
		</div>
	)
};

export default NotFound;