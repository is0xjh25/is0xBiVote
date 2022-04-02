import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import Main from './Main.js';
import Single from './Single.js';
import './History.css';

const History = () => {
	
	const [page, setPage] = useState();
	const [list, setList] = useState();
	const [keyword, setKeyword] = useState();
	const [startDate, setStartDate] = useState();
	const [selected, setSelected] = useState();
  const navigate = useNavigate();
	const { id } = useParams();

	const demoVote = [
		{
			id: 1,
			name: "Do aliens exists?",
			date: "12/03/2021"
		},
		{
			id: 2,
			name: "Is Messi better than Ronaldo?",
			date: "11/03/2021"
		},
		{
			id: 3,
			name: "Cat or Dog?",
			date: "12/02/2021"
		},
		{
			id: 4,
			name: "Earth is flat.",
			date: "11/01/2021"
		},
		{
			id: 5,
			name: "Pinapple on piazza?",
			date: "12/03/2020"
		},
		{
			id: 4,
			name: "Earth is flat.",
			date: "11/01/2021"
		},
		{
			id: 4,
			name: "Earth is flat.",
			date: "11/01/2021"
		},
		{
			id: 4,
			name: "Earth is flat.",
			date: "11/01/2021"
		},
		{
			id: 4,
			name: "Earth is flat.",
			date: "11/01/2021"
		},
		{
			id: 4,
			name: "Earth is flat.",
			date: "11/01/2021"
		},
		{
			id: 4,
			name: "Earth is flat.",
			date: "11/01/2021"
		},
	]

	const redirectPage = (page, url) => {
		navigate(url);
		setPage(page);
	};

	const handleOnChange = (e) => {
		if (e.target.id === 'history-search-keyword') {
			setKeyword(e.target.value);
		}
	};

	const handleOnSubmit = (e) => {
		if (e.target.name === 'date') {
			;
		} else if (e.target.name === 'keyword') {
			setList(demoVote);
			;
		}
	};

	const isValidID = (id) => {
		id = parseInt(id);
		if (id === NaN) return false;
		return id < 10;
	};

	useEffect(() => {

		if (id === undefined) {
			setPage('main');
		} else if (!isValidID(id)) {
			redirectPage('main', '/history');
		} else {
			setSelected(id);
			alert(id);
			setPage('single');
		}

		// initialize
		setKeyword("");
		setStartDate(new Date());
		setList([]);

    // const cookie= getCookie('token');

    // if (cookie === "") {
    //   enqueueSnackbar("Please login first.",{variant:'warning'});
    //   setUser("");
    // }  else {
    //   setUser(cookie);
    // }

    return () => {
      setPage();
      setList();
			setKeyword();
			setStartDate();
			setSelected();
    }
  }, [])

	return (
		<div id='history-frame'>
			{
				page === 'main' ? 
				<Main redirectPage={redirectPage} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} list={list} startDate={startDate} keyword={keyword} setStartDate={setStartDate} setKeyword={setKeyword}/> 
				: 
				<Single redirectPage={redirectPage}/> 
			}
		</div>
  );
}

export default History;