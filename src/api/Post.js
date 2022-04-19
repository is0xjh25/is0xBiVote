import { getCookie } from "./Utilities.js";
const BASE_URL = process.env.REACT_APP_SERVER_URL;

// get post information
function getPost(id) {

	const url = `${BASE_URL}/post/${id}`;
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
}

// create a new post
function newPost(voteID, content) {

	const url = `${BASE_URL}/post/${voteID}`;
	const info = {
		method: 'POST',
		headers: {'Content-Type': 'application/json', 'Authorization': getCookie('token')},
		body: JSON.stringify(
			{
				"post": 
				{
					"content": content, 
				}
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
}

// delete a post
function deletePost(postID) {

	const url = `${BASE_URL}/post/${postID}`;
	const info = {
		method: 'DELETE',
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
}

// upvote a post
function newUpvote(postID) {

	const url = `${BASE_URL}/upvote/${postID}`;
	const info = {
		method: 'POST',
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
}

// upvote a post
function deleteUpvote(postID) {

	const url = `${BASE_URL}/upvote/${postID}`;
	const info = {
		method: 'DELETE',
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
}

export {
	getPost,
	newPost,
	deletePost,
	newUpvote,
	deleteUpvote
}