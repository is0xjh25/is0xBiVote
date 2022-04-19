import React, { useState, useEffect }from 'react';
import { useParams } from 'react-router';
import { useSnackbar } from 'notistack';
import { isEmpty } from 'lodash';
import { BsLightbulbFill } from 'react-icons/bs';
import { getPost, newPost, deletePost, newUpvote, deleteUpvote } from '../api/Post.js';
import './Post.css';

const SinglePost = (props) => {
	
	const { postID, type, authorized, refresh } = props;
	const { id } = useParams();
	const { enqueueSnackbar } = useSnackbar();
	const [post, setPost] = useState({});
	const [content, setContent] = useState("");
	const [upvotes, setUpvotes] = useState(0);
	const [isUpvoted, setIsUpvoted] = useState(false);

	const handleInitialize = () => {
		if (postID) {
			getPost(postID)
			.then(res => {
				if (res.ok) {
					setPost(res.body.post);
					setContent(res.body.contetn);
					setUpvotes(res.body.post.upvotes);
					setIsUpvoted(res.body.post.upvoted);
				} else if ([500, 501, 502, 503, 504].includes(res.status)) {
					enqueueSnackbar("SERVER ERROR. Please try again later.", {variant:'error'});
				} else {
					enqueueSnackbar(res.body.message, {variant:'error'});
				};
			});
		}
	};

	const handleOnChange = (e) => {
		if (e.target.name === 'upvote-button-option' && authorized) {
			if (e.target.value === 'true') {
				setIsUpvoted(false);
				setUpvotes(upvotes => upvotes - 1);
				deleteUpvote(post.id)
				.then(res => {
					if (res.ok) {
						;
					} else if ([500, 501, 502, 503, 504].includes(res.status)) {
						enqueueSnackbar("SERVER ERROR. Please try again later.", {variant:'error'});
					} else {
						enqueueSnackbar(res.body.message, {variant:'error'});
					};
				});
			} else if (e.target.value === 'false') {
				setIsUpvoted(true);
				setUpvotes(upvotes => upvotes + 1);
				newUpvote(post.id)
				.then(res => {
					if (res.ok) {
						;
					} else if ([500, 501, 502, 503, 504].includes(res.status)) {
						enqueueSnackbar("SERVER ERROR. Please try again later.", {variant:'error'});
					} else {
						enqueueSnackbar(res.body.message, {variant:'error'});
					};
				});
			};
		} else if (e.target.name === 'post-content') {
			setContent(e.target.value);
		};
	};

	// post new content for current user
	const handleOnPost = () => {
		if (content === "") {
			enqueueSnackbar("Write down something before you post.", {variant:'warning'});
		} else {
			newPost(id, content)
			.then(res => {
				if (res.ok) {
					refresh();
					enqueueSnackbar(res.body.message, {variant:'success'});
				} else if ([500, 501, 502, 503, 504].includes(res.status)) {
					enqueueSnackbar("SERVER ERROR. Please try again later.", {variant:'error'});
				} else {
					enqueueSnackbar(res.body.message, {variant:'error'});
				};
			});
		};
	};

	// delete post and refresh
	const handleOnDelete = () => {
		deletePost(id)
		.then(res => {
			if (res.ok) {
				refresh();
				enqueueSnackbar(res.body.message, {variant:'success'});
			} else if ([500, 501, 502, 503, 504].includes(res.status)) {
				enqueueSnackbar("SERVER ERROR. Please try again later.", {variant:'error'});
			} else {
				enqueueSnackbar(res.body.message, {variant:'error'});
			};
		});
	};

	useEffect(() => {
		// initialize
		handleInitialize();
		
		return () => {
			setContent("");
			setUpvotes(0);
			setIsUpvoted(false);
		};
	}, []);

	return (
		<div className='single-post'>
			<div className='single-post-poster' type={type}>
				{
					isEmpty(post) && type === 'owned' ? (
						<>
							<span>SHOUT OUT LOUD !!!</span>
							<span>
								<button type='submit' className='btn btn-outline-warning shadow' onClick={handleOnPost}>POST</button>
							</span>
						</>
					) : (
						<>
							<span>@{post.poster}</span>
							<span>
								{upvotes}
								{
									!authorized ? (
										<button className='upvote-button' disabled>
											<BsLightbulbFill className='upvote-button-icon' type='disabled'/>
										</button> 
									) : isUpvoted ? (
										<button className='upvote-button' name='upvote-button-option' value='true' onClick={handleOnChange}>
											<BsLightbulbFill className='upvote-button-icon' type='yes'/>
										</button>
									) : (
										<button className='upvote-button' name='upvote-button-option' value='false' onClick={handleOnChange}>
											<BsLightbulbFill className='upvote-button-icon' type='no'/>
										</button>
									)
								} 
							</span>
							{
								type === 'owned' && !isEmpty(post) ? (
									<span>
										<button type='submit' className='btn btn-outline-danger shadow' onClick={handleOnDelete}>DELETE</button>
									</span>
								) : null
							}
						</>
					)
				}			
			</div>
			<div className='single-post-content'>
				{
					isEmpty(post) && type === 'owned' ? (
  					<textarea className="form-control" rows="4" id="post-new-post" name='post-content' onChange={handleOnChange}></textarea>
					) : (
						<p>{post.content}</p>
					)
				}
			</div>
		</div>
	)
};

const PostCollect = (props) => {
	const { type, post, authorized, refresh } = props;
	return (
		<>
			{	
				type === 'owned' ? (
					<SinglePost type={type} postID={post} authorized={authorized} refresh={refresh}/>
				) : isEmpty(post) ? (
					<span>NO POSTS FOUND</span>
				) : (
					post.map(e => <SinglePost key={e} postID={e} type={type} authorized={authorized} refresh={refresh}/>)
				)
			}
		</>
	)
};

export default PostCollect;