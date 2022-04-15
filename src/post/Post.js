import React, { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import PostCollect from './PostCollect';
import './Post.css';

const Post = (props) => {

	const { post, userPost, ownedFN, refresh } = props;
	const[page, setPage] = useState('');
	const[yesPost, setYesPost] = useState([]);
	const[noPost, setNoPost] = useState([]);
	const[ownedPost, setOwnedPost] = useState({});

	const handleOnChange = (e) => {
		if (e.target.name === 'btnradio') {
			setPage(e.target.value);
		};
	};

	useEffect(() => {
		// initialize
		if (!ownedFN) {
			setPage('yes');
		} else {
			setPage('owned');
		}

		setYesPost(post.yes);
		setNoPost(post.no);
		setOwnedPost(post.owned);

		return () => {
			setPage();
			setYesPost();
			setNoPost();
			setOwnedPost();
		};
	}, [post]);

	return (
		<div className='post-section'>
				<div className='btn-group' role='group' aria-label='Basic radio toggle button group' id='post-navigate-bar' onChange={handleOnChange}>
					<span className='post-option'>
						<input type='radio' className='btn-check' name='btnradio' id='btnradio1' autoComplete='off' value='yes'/>
						<span className='text-success'>YES</span>
					</span>
					<span className='post-option'>
						<input type='radio' className='btn-check' name='btnradio' id='btnradio2' autoComplete='off' value='no'/>
						<span className='text-danger'>NO</span>
					</span>
					{
						ownedFN ? (
							<span className='post-option'>
							<input type='radio' className='btn-check' name='btnradio' id='btnradio3' autoComplete='off' value='owned'/>
							<span className='text-info'>OWNED</span>
							</span>
						) : null
					}
			</div>
			<div id='post-main'>
				{
					page === 'yes' ? (
						<PostCollect type={'yes'} post={yesPost} refresh={refresh}/>
					) : page === 'no' ? (
						<PostCollect type={'no'} post={noPost} refresh={refresh}/>
					) : page === 'owned' ? (
						<PostCollect type={'owned'} post={userPost} refresh={refresh}/>
					) : null
				}
			</div>
		</div>
	)
};

export default Post;