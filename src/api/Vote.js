const BASE_URL = process.env.REACT_APP_BASE_URL;

// get a personal vote record on a vote
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
}

// update a personal vote record on a vote
function getVote(voteID, voteOne, voteTwo, status) {

	const url = `${BASE_URL}/vote/${voteID}`;
	const info = {
		method: 'PATCH',
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
	getVote,
	updateVote
}