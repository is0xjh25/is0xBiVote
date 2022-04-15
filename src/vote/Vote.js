import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import NavBar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Title from '../components/Title.js';
import VotePick from './VotePick';
import ReadPost from './ReadPost';
import { getVote, getVoteRecord, updateVoteRecord } from '../api/Vote.js';
import { checkAuthorized } from '../api/Utilities.js';
import './Vote.css';

const Vote = () => {

	const { id } = useParams();
	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();
	const [page, setPage] = useState('');
	const [vote1, setVote1] = useState('');
	const [vote2, setVote2] = useState('');
	const [endTime, setEndTime] = useState('');
	const [info, setInfo] = useState({id: '', status: '', category: '', start_time: '', end_tiem: ''});
	const [post, setPost] = useState({yes:[], no:[], owned:{}});
	const [record, setRecord] = useState({id: '', user_id: '', vote_id: '', vote_one: '', vote_two: '', status: ''});

	const handleInitialize = () => {
		getVote(id)
		.then(res => {
			if (res.ok) {
				setInfo(res.body.vote);
				setPost(res.body.post);
				enqueueSnackbar(res.body.message, {variant:'success'});
				return res;
			} else if ([500, 501, 502, 503, 504].includes(res.status)) {
				enqueueSnackbar("server error, please try again later", {variant:'error'});
			} else {
				enqueueSnackbar(res.body.message, {variant:'error'});
			};
		})
		.then(info => {
			console.log(info);
			// check logged in
			(async () => {
				const auth =  await checkAuthorized();
				if (auth.login) {
					getVoteRecord(id)
					.then(res => {
						if (res.ok) {
							setRecord(res.body.vote_record);
							// set page
							if (res.body.vote_record.status === 'vote_two') navigate(`/history/${info.body.vote.id}`);
							switch(res.body.vote_record.status) {
								case 'start':
									setPage('voteOne');
									break;
								case 'vote_one':
									setPage('reading');
									break;
								default:
									setPage('voteOne');
							}
							enqueueSnackbar(res.body.message, {variant:'success'});
						} else if ([500, 501, 502, 503, 504].includes(res.status)) {
							enqueueSnackbar("server error, please try again later", {variant:'error'});
						} else {
							enqueueSnackbar(res.body.message, {variant:'error'});
						};
					});
				} else {
					navigate(`/history/${info.body.vote.id}`)
				}
			})();
		});
	}

	const handleOnSubmit = (e) => {
		if (e.target.name === 'voteOne') {
			if (e.target.value === 'not_interested') {
				updateVoteRecord({id: info.id, data: {vote_one: 'not_interested', vote_two: 'not_interested', status:'vote_two'}})
				.then(res => {
					if (res.ok) {
						navigate(`/history/${info.id}`);
						enqueueSnackbar(res.body.message, {variant:'success'});
					} else if ([500, 501, 502, 503, 504].includes(res.status)) {
						enqueueSnackbar("server error, please try again later", {variant:'error'});
					} else {
						enqueueSnackbar(res.body.message, {variant:'error'});
					};
				});
			} else {
				updateVoteRecord({id: info.id, data: {vote_one: e.target.value, status:'vote_one'}})
				.then(res => {
					if (res.ok) {
						setPage('reading');
						enqueueSnackbar(res.body.message, {variant:'success'});
					} else if ([500, 501, 502, 503, 504].includes(res.status)) {
						enqueueSnackbar("server error, please try again later", {variant:'error'});
					} else {
						enqueueSnackbar(res.body.message, {variant:'error'});
					};
				});
			};
		} else if (e.target.name === 'reading') {
			setPage('voteTwo');
		} else if (e.target.name === 'voteTwo') {
			updateVoteRecord({id: info.id, data: {vote_two: e.target.value, status:'vote_two'}})
			.then(res => {
				if (res.ok) {
					navigate(`/history/${info.id}`)
					enqueueSnackbar(res.body.message, {variant:'success'});
				} else if ([500, 501, 502, 503, 504].includes(res.status)) {
					enqueueSnackbar("server error, please try again later", {variant:'error'});
				} else {
					enqueueSnackbar(res.body.message, {variant:'error'});
				};
			});
		};
	};

	useEffect(() => {
		// initialize
		handleInitialize();
		
		return () => {
			setPage();
			setVote1();
			setVote2();
			setPost();
			setEndTime();
			setInfo();
		};
	}, []);

	return (
		<>
			<header>
				<NavBar/>
			</header>
			<main>
				<div id='vote-frame'>
					<Title info={info}/>
					<div className='main-section'>
						{	
							page === 'voteOne' ? (
								<VotePick info={info} status={page} handleOnSubmit={handleOnSubmit}/>
							) : page === 'reading' ? (
								<ReadPost info={info} post={post} status={page} handleOnSubmit={handleOnSubmit}/>
							) :	page === 'voteTwo' ? (
								<VotePick info={info} status={page} handleOnSubmit={handleOnSubmit}/>
							) : null
						}
					</div>
				</div>
			</main>
			<footer>
				<Footer/>
			</footer> 
		</>
	)
};

export default Vote;