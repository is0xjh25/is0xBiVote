import { getCookie } from "./Utilities.js";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function getWeeklyVotes() {
	
	const url = `${BASE_URL}/vote-entries`;
	const info = {
		method: 'GET',
		headers: {'Content-Type': 'application/json'},
	};

	return fetch(url, info)
	.then(res => {
		return res.json()
		.then(body => {
			return {
				ok: res.ok,
				status: res.status,
				body: body
			};
		})
	});	
};

// get vote information
function getVote(voteID) {

	const url = `${BASE_URL}/vote/${voteID}`;
	const info = {
		method: 'GET',
		headers: {'Content-Type': 'application/json', 'Authorization': getCookie('token')},
	};

	return fetch(url, info)
	.then(res => {
		return res.json()
		.then(body => {
			return {
				ok: res.ok,
				status: res.status,
				body: body
			};
		})
	});
};

// get a personal vote record on a vote
function getVoteRecord(voteID) {

	const url = `${BASE_URL}/user-vote/${voteID}`;
	const info = {
		method: 'GET',
		headers: {'Content-Type': 'application/json', 'Authorization': getCookie('token')},
	};

	return fetch(url, info)
	.then(res => {
		return res.json()
		.then(body => {
			return {
				ok: res.ok,
				status: res.status,
				body: body
			};
		})
	});
};

// update a personal vote record on a vote
function updateVoteRecord(req) {

	const url = `${BASE_URL}/user-vote/${req.id}`;
	const info = {
		method: 'PATCH',
		headers: {'Content-Type': 'application/json', 'Authorization': getCookie('token')},
		body: JSON.stringify(
			{
				"vote_record": req.data
			}
		)
	};

	return fetch(url, info)
	.then(res => {
		return res.json()
		.then(body => {
			return {
				ok: res.ok,
				status: res.status,
				body: body
			};
		})
	});
};

export {
	getWeeklyVotes,
	getVote,
	getVoteRecord,
	updateVoteRecord
};