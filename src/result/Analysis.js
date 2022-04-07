import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Analysis.css';

const Analysis = (props) => {
	
	const { info } = props;
	const navigate = useNavigate();

	return (
		<div className='analysis-section'>
			<div className='analysis-row'>
				<span className='analysis-data-text'>{info.start}</span> to <span className='analysis-data-text'>{info.end}</span>
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
			<div className='analysis-row analysis-data-desktop'>
				<span>Not Interested: <span className='analysis-data-text'>{info.notInterested}</span></span>
				<span>Changed Mind: <span className='analysis-data-text'>{info.changeMind}</span></span>
			</div>
			<div className='analysis-row analysis-data-desktop'>
				<span>Inspired by Others: <span className='analysis-data-text'>{info.inspiredByOthers}</span></span>
				<span>Hard To Tell: <span className='analysis-data-text'>{info.hardToTell}</span></span>
			</div>
			<div className='analysis-row analysis-data-mobile'>
				<span>Not Interested: <span className='analysis-data-text'>{info.notInterested}</span></span>
				<span>Changed Mind: <span className='analysis-data-text'>{info.changeMind}</span></span>
				<span>Inspired by Others: <span className='analysis-data-text'>{info.inspiredByOthers}</span></span>
				<span>Hard To Tell: <span className='analysis-data-text'>{info.hardToTell}</span></span>
			</div>
			<div className='analysis-row'>
				{
					info.status === 'progressing' ? (
						<button type='submit' className='btn btn-outline-warning shadow' onClick={()=>navigate('/')}>HOME</button>
					) : info.status === 'closed' ? (
						<button type='submit' className='btn btn-outline-warning shadow' onClick={()=>navigate('/history')}>BACK</button>
					) : null
				}
			</div>
		</div>
	)
};

export default Analysis;