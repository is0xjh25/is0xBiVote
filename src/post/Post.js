import React, { useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import PostCollect from './PostCollect';
import './Post.css';

const Post = (props) => {

	const { info, ownedFN } = props;
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
		
		setPage('yes');
		setYesPost(info.yesPost);
		setNoPost(info.noPost);
		setOwnedPost(info.ownedPost);

		return () => {
			setPage();
			setYesPost();
			setNoPost();
			setOwnedPost();
		};
	}, []);

	return (
		<div className='post-section'>
				<div className='btn-group' role='group' aria-label='Basic radio toggle button group' id='post-navigate-bar' onChange={handleOnChange}>
					<span className='post-option'>
						<input type='radio' className='btn-check' name='btnradio' id='btnradio1' autoComplete='off' value='yes' defaultChecked/>
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
						<PostCollect type={'yes'} info={yesPost}/>
					) : page === 'no' ? (
						<PostCollect type={'no'} info={noPost}/>
					) : page === 'owned' ? (
						<PostCollect type={'owned'} info={ownedPost}/>
					) : null
				}
			</div>
		</div>
	)
};

export default Post;