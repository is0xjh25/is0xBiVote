import React, { useState, useEffect }from 'react';
import { isEmpty } from 'lodash';
import { BsLightbulbFill } from 'react-icons/bs';
import './PostCollect.css';

const SinglePost = (props) => {
	
	const { type, info} = props;
	const {	postID, poster, content, upvoteCount, upvoted } = info;
	const [isUpvoted, setIsUpvoted] = useState();

	const handleOnChange = (e) => {
		if (e.target.name === 'upvote-button-option') {
			if (e.target.value === 'true') {
				setIsUpvoted(false);
				// call api (userID, postID, e.target.value)
			} else if (e.target.value === 'false') {
				setIsUpvoted(true);
				// call api (userID, postID, e.target.value)
			}
		}
	}

	// delete post and refresh
	const handleOnDelete = () => {
	}

	useEffect(() => {
		setIsUpvoted(upvoted);

		return () => {
			setIsUpvoted();
		}
	}, []);

	return (
		<div className='single-post'>
			<div className='single-post-poster' type={type}>
				{
					isEmpty(info) ? (
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
								{upvoteCount}
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
								type === 'owned' && !isEmpty(info) ? (
									<span>
										<button type='submit' className='btn btn-outline-danger shadow' onClick={handleOnDelete}>DELETE</button>
									</span>
								) : (
									null
								)
							}
						</>
					)
				}			
			</div>
			<div className='single-post-content'>
				{
					isEmpty(info) ? (
  					<textarea className="form-control" rows="4" id="post-new-post"></textarea>
					) : (
						<p>{content}</p>
					)
				}
			</div>
		</div>
	)
}

const PostCollect = (props) => {
	const { status, type, info } = props;
	return (
		<>
			{	
				type === 'owned' ? (
					<SinglePost type={type} info={info}/>
				) : isEmpty(info) ? (
					<p>NO POSTS FOUND</p>
				) : (
					info.map(e => <SinglePost key={e.postID} type={type} info={e}/>)
				)
			}
		</>
	)
};

export default PostCollect;