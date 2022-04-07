import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Title from './Title.js';
import Post from './Post.js';
import Analysis from './Analysis.js';
import './Result.css';

// 記得拆分...
const demoTitle = {
	voteID: 1,
	name: "Do aliens exists?",
	type: "mystery", 
	status: "progressing" //closed
}

const demoAnalysis = {
	userVote: "Yes",
	startTime: "April 7 2022",
	endTime: "April 8 2022",
	yes: 199,
	no: 50,
	leading: "yes",
	notInterested: 5,
	changeMind: 50,
	inspiredByOthers: 10,
	hardToTell: 4,
	status: "progressing" //closed
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

const Result = () => {
	
	const navigate = useNavigate();
	const { id } = useParams();

	const isValidID = (id) => {
		id = parseInt(id);
		if (isNaN(id)) return false;
		return id < 10;
	};

	useEffect(() => {
		if (!isValidID(id)) navigate('/history');
		// fetch data
		// if expiry status = finish else status = ongoing
	}, []);

	return (
		<div id='result-frame'>
			<Title info={demoTitle}/>
			<div className='main-section'>
				<Analysis info={demoAnalysis}/>
				<Post info={demoPost}/>
			</div>
		</div>
	)
};

export default Result;