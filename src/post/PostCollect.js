import React, { useState, useEffect }from 'react';
import { isEmpty } from 'lodash';
import { BsLightbulbFill } from 'react-icons/bs';
import './Post.css';

const SinglePost = (props) => {
	
	const { type, post} = props;
	const {	id, user_id, vote_id, content, vote_two, poster, upvotes, upvoted } = post;
	const [isUpvoted, setIsUpvoted] = useState();

	const handleOnChange = (e) => {
		if (e.target.name === 'upvote-button-option') {
			if (e.target.value === 'true') {
				setIsUpvoted(false);
				// call api (userID, postID, e.target.value)
			} else if (e.target.value === 'false') {
				setIsUpvoted(true);
				// call api (userID, postID, e.target.value)
			};
		};
	};

	// delete post and refresh
	const handleOnDelete = () => {
	};

	useEffect(() => {
		// initialize
		setIsUpvoted(upvoted);

		return () => {
			setIsUpvoted();
		}
	}, []);

	return (
		<div className='single-post'>
			<div className='single-post-poster' type={type}>
				{
					isEmpty(post) ? (
						<>
							<span>SHOUT OUT LOUD !!!</span>
							<span>
								<button type='submit' className='btn btn-outline-info shadow' onClick={handleOnDelete}>POST</button>
							</span>
						</>
					) : (
						<>
							<span>@{poster}</span>
							<span>
								{upvotes}
								{
									isUpvoted === null ? (
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
					isEmpty(post) ? (
  					<textarea className="form-control" rows="4" id="post-new-post"></textarea>
					) : (
						<p>{content}</p>
					)
				}
			</div>
		</div>
	)
};

const PostCollect = (props) => {
	const { status, type, post } = props;
	return (
		<>
			{	
				type === 'owned' ? (
					<SinglePost type={type} post={post}/>
				) : isEmpty(post) ? (
					<span>NO POSTS FOUND</span>
				) : (
					post.map(e => <SinglePost key={e.id} type={type} post={e}/>)
				)
			}
		</>
	)
};

export default PostCollect;