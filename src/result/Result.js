import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import NavBar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Title from '../components/Title.js';
import Post from '../post/Post.js';
import Analysis from './Analysis.js';
import { getVote, getVoteRecord } from '../api/Vote.js';
import { checkAuthorized } from '../api/Utilities.js';
import './Result.css';

const Result = () => {

	const { id } = useParams();
	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate();
	const [vote, setVote] = useState({id: '', status: '', category: '', start_time: '', end_tiem: ''});
	const [post, setPost] = useState({yes:[], no:[], owned:{}});
	const [userVote, setUserVote] = useState(null);

	const handleInitialize = () => {
		getVote(id)
		.then(res => {
			if (res.ok) {
				setVote(res.body.vote);
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
			// check logged in
			(async () => {
				const auth =  await checkAuthorized();
				if (auth.login) {
					getVoteRecord(id)
					.then(res => {
						if (res.ok) {
							setUserVote(res.body.vote_record.vote_two);
							enqueueSnackbar(res.body.message, {variant:'success'});
						} else if ([500, 501, 502, 503, 504].includes(res.status)) {
							enqueueSnackbar("server error, please try again later", {variant:'error'});
						} else {
							enqueueSnackbar(res.body.message, {variant:'error'});
						};
					});
				};
			})();
		});
	};

	useEffect(() => {
		// initialize
		handleInitialize();
		
		return () => {
			setPost();
			setVote();
			setUserVote();
		};
	}, []);

	return (
		<>
			<header>
				<NavBar/>
			</header>
			<main>
				<div id='result-frame'>
					<Title vote={vote}/>
					<div className='main-section'>
						<Analysis vote={vote} userVote={userVote}/>
						<Post post={post} ownedFN={true}/>
					</div>
				</div>
			</main>
			<footer>
				<Footer/>
			</footer> 
		</>
	)
};

export default Result;