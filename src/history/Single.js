import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Title from '../components/Title.js';
import './History.css';

const Single = (props) => {
	const { redirectPage } = props;
	const { id } = useParams();


	return (
		<>
		<div className='title-section'>
			<Title id={id} name={"Do aliens exists?"} type={"mystery"} status={"final"}/>
		</div>
		<div className='main-section'>
			<div className='post-section'>
			</div>
			<div className='info-section'>
			</div>
		</div>
		{/* <button onClick={()=>redirectPage('main', '/history')}>BACK</button> */}
		</>
	)
}

export default Single;