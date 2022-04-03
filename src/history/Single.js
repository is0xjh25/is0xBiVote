import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Title from '../components/Title.js';
import Analysis from '../components/Analysis.js';
import './History.css';

const demoTitle = {
	id: 1,
	name: "Do aliens exists?",
	type: "mystery", 
	status: "final"
}

const demoAnalysis = {
	userVote: "Yes",
	start: "12/12/2021",
	end: "19/12/2021",
	yes: 199,
	no: 50,
	notInterested: 5,
	changeMind: 50,
	inspiredByOthers: 10,
	hardToTell: 4
}

const Single = (props) => {
	
	const { redirectPage } = props;
	const { id } = useParams();

	return (
		<div id='history-frame'>
			<Title info={demoTitle}/>
			<div className='main-section'>
				<div className='post-section'>
				</div>
				<Analysis info={demoAnalysis} redirectPage={redirectPage}/>
			</div>
		</div>
	)
}

export default Single;