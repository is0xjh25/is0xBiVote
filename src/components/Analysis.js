import React from 'react';
import './Analysis.css';

const Analysis = (props) => {
	
	const { info, redirectPage } = props;

	return (
		<div className='analysis-section'>
			<div className='analysis-row'>
				<span className='analysis-data'>{info.start}</span> to <span className='analysis-data'>{info.end}</span>
			</div>
			<div className='analysis-row'>
				<div className='progress'>
					<div className='progress-bar bg-success progress-bar-striped progress-bar-animated' style={{width:`${info.yes/(info.yes+info.no)*100}%`}}>
						{info.yes} YES
					</div>
					<div className='progress-bar bg-danger progress-bar-striped progress-bar-animated' style={{width:`${info.no/(info.yes+info.no)*100}%`}}>
						{info.no} NO
					</div>
				</div>
			</div>
			<div className='analysis-row'>
				<span>Not Interested: <span className='analysis-data'>{info.notInterested}</span></span>
				<span>Changed Mind: <span className='analysis-data'>{info.changeMind}</span></span>
			</div>
			<div className='analysis-row'>
				<span>Inspired by Others: <span className='analysis-data'>{info.inspiredByOthers}</span></span>
				<span>Hard To Tell: <span className='analysis-data'>{info.hardToTell}</span></span>
			</div>
			<div className='analysis-row'>
				<button type='submit' className='btn btn-outline-warning shadow' onClick={()=>redirectPage('main', '/history')}>BACK</button>
			</div>
		</div>
	)
}

export default Analysis;