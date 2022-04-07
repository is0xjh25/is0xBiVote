import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import VotePick from './VotePick';
import Result from '../result/Result.js';
import './Vote.css';

const demoVote = {
	voteID: 1,
	voteName: "Is the Loch Ness Monster real?",
	voteType: "mystery",
	voteStatus: "progressing",
	endTime: "April 8 2022 00:00:00",
	preStatus: "voteOne"
}

const demoPost = {
	yesPost: 
	[
		{
			postID: 1,
			poster: "yunchi",
			content: "tjhiuqhwuiehqwejnmasndmnsd,mnqjweiquwoeim,asd,.mkqwjeljqweajsdbnuiqhweuiqw eiuhasjdhaksjhduiyquiwye89qwye89qwyeuuashdjasdljkbzxnmcjzx c8asue89qwueiqwuejkashdkjhqwuiwye8qwu",
			upvoteCount: 234,
			upvoted: true
		},
		{
			postID: 2,
			poster: "harry",
			content: "tjhiuqhwuiehqwejnmasndmnsdzxjchiuahsduihqwiuehuiqwhejnaskdjnkjzxnciuuiayeiuqwyheiuqhweihasjkndkjnasdjnqijwhniuqwyeuiyqwiueyiuashdjkashbnmxcbjhqwuiehy89qweyu98qwuy9 ahsdjhqwjehuiqwyeuiqwyhejhasdjkhasiudhi8qwye87qwyekabdjkhaghj",
			upvoteCount: 555,
			upvoted: true
		},
		{
			postID: 3,
			poster: "harry",
			content: "tjhiuqhwuiehqwejnmasndmnsdzxjchiuahsduihqwiuehuiqwhejnaskdjnkjzxnciuuiayeiuqwyheiuqhweihasjkndkjnasdjnqijwhniuqwyeuiyqwiueyiuashdjkashbnmxcbjhqwuiehy89qweyu98qwuy9 ahsdjhqwjehuiqwyeuiqwyhejhasdjkhasiudhi8qwye87qwyekabdjkhaghj",
			upvoteCount: 555,
			upvoted: true
		},
		{
			postID: 4,
			poster: "harry",
			content: "tjhiuqhwuiehqwejnmasndmnsdzxjchiuahsduihqwiuehuiqwhejnaskdjnkjzxnciuuiayeiuqwyheiuqhweihasjkndkjnasdjnqijwhniuqwyeuiyqwiueyiuashdjkashbnmxcbjhqwuiehy89qweyu98qwuy9 ahsdjhqwjehuiqwyeuiqwyhejhasdjkhasiudhi8qwye87qwyekabdjkhaghj",
			upvoteCount: 555,
			upvoted: true
		},
		{
			postID: 5,
			poster: "harry",
			content: "tjhiuqhwuiehqwejnmasndmnsdzxjchiuahsduihqwiuehuiqwhejnaskdjnkjzxnciuuiayeiuqwyheiuqhweihasjkndkjnasdjnqijwhniuqwyeuiyqwiueyiuashdjkashbnmxcbjhqwuiehy89qweyu98qwuy9 ahsdjhqwjehuiqwyeuiqwyhejhasdjkhasiudhi8qwye87qwyekabdjkhaghj",
			upvoteCount: 555,
			upvoted: true
		},
		{
			postID: 6,
			poster: "harry",
			content: "tjhiuqhwuiehqwejnmasndmnsdzxjchiuahsduihqwiuehuiqwhejnaskdjnkjzxnciuuiayeiuqwyheiuqhweihasjkndkjnasdjnqijwhniuqwyeuiyqwiueyiuashdjkashbnmxcbjhqwuiehy89qweyu98qwuy9 ahsdjhqwjehuiqwyeuiqwyhejhasdjkhasiudhi8qwye87qwyekabdjkhaghj",
			upvoteCount: 555,
			upvoted: true
		}
	],
	noPost:
	[
		{
			postID: 3,
			poster: "demo",
			content: "tjhiuqhwuiehqwejnmasndmnsd,mnqjweiquwoeim,asd,.mkqwjeljqweajsdbnuiqhweuiqw eiuhasjdhaksjhduiyquiwye89qwye89qwyeuuashdjasdljkbzxnmcjzx c8asue89qwueiqwuejkashdkjhqwuiwye8qwu",
			upvoteCount: 234,
			upvoted: true
		},
		{
			postID: 4,
			poster: "unknow",
			content: "tjhiuqhwuiehqwejnmasndmnsdzxjchiuahsduihqwiuehuiqwhejnaskdjnkjzxnciuuiayeiuqwyheiuqhweihasjkndkjnasdjnqijwhniuqwyeuiyqwiueyiuashdjkashbnmxcbjhqwuiehy89qweyu98qwuy9 ahsdjhqwjehuiqwyeuiqwyhejhasdjkhasiudhi8qwye87qwyekabdjkhaghj",
			upvoteCount: 555,
			upvoted: false
		}
	],
	ownedPost:
	{
		postID: 2,
		poster: "harry",
		content: "tjhiuqhwuiehqwejnmasndmnsdzxjchiuahsduihqwiuehuiqwhejnaskdjnkjzxnciuuiayeiuqwyheiuqhweihasjkndkjnasdjnqijwhniuqwyeuiyqwiueyiuashdjkashbnmxcbjhqwuiehy89qweyu98qwuy9 ahsdjhqwjehuiqwyeuiqwyhejhasdjkhasiudhi8qwye87qwyekabdjkhaghj",
		upvoteCount: 555,
		upvoted: null
	}
}

const Vote = () => {

	const { id } = useParams();
	const navigate = useNavigate();
	const [page, setPage] = useState('');
	const [vote1, setVote1] = useState('');
	const [vote2, setVote2] = useState('');
	const [post, setPost] = useState('');
	const [dueTime, setDueTime] = useState('');
	const [info, setInfo] = useState({});

	const handleOnSubmit = (e) => {
		if (e.target.name === 'voteOne') {
			if (e.target.value === 'notInterested') {
				//api preStatus: voteOne voteOne: e.target.value voteTwo: e.target.value
				navigate(`/history/${demoVote.voteID}`)
			} else {
				//api preStatus: voteOne voteOne: e.target.value
				setPage('reading');
			}
		} else if (e.target.name === 'reading') {
			setPage('voteTwo');
		} else if (e.target.name === 'voteTwo') {
			//api preStatus: voteTwo voteTwo: e.target.value
			navigate(`/history/${demoVote.voteID}`)
		}
	};

	useEffect(() => {

		// find or create by
		// wrong path
		if (!['world', 'mystery', 'sport', 'entertainment'].includes(id)) {
			navigate('/vote');
		};

		// call api .then

		if (demoVote.preStatus === 'voteTwo') navigate(`/history/${demoVote.voteID}`)

		switch(demoVote.preStatus) {
			case 'start':
				setPage('voteOne');
				break;
			case 'voteOne':
				setPage('reading');
				break;
			default:
				setPage('voteOne');
		}

		setInfo(demoVote);
		
		return () => {
			setPage();
			setVote1();
			setVote2();
			setPost();
			setDueTime();
			setInfo();
		}
	}, []);

	return (
		<>
			{	
				page === 'voteOne' ? (
					<VotePick info={info} status={page} handleOnSubmit={handleOnSubmit}/>
				) : page === 'reading' ? (
					<VotePick info={info} status={page}/>
				) :	page === 'voteTwo' ? (
					<VotePick info={info} status={page} handleOnSubmit={handleOnSubmit}/>
				) : null
			}
		</>
	)
};

export default Vote;