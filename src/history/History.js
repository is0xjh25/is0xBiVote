import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { MdFindInPage } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import NavBar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { searchByDate, searchByKeyword } from '../api/Vote.js';
import 'react-datepicker/dist/react-datepicker.css';
import './History.css';

const History = (props) => {
	
	const { history, setHistory } = props; 
	const { id } = useParams();
	const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
	const [list, setList] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [selected, setSelected] = useState(new Date());
	const [firstVisit, setFirstVisit] = useState(false);

	const handleInitialize = () => {
		setFirstVisit(true);
		if (history.startDate) setStartDate(history.startDate);
		if (history.keyword) setKeyword(history.keyword);
		if (history.list) setList(history.list);
	}

	const handleOnChange = (e) => {
		if (e.target.id === 'history-search-keyword') {
			setKeyword(e.target.value);
		};
	};

	const handleOnSubmit = (e) => {
		if (e.target.name === 'startTime') {
			searchByDate(startDate)
			.then(res => {
				if (res.ok) {
					setList(res.body.history.result)
					setHistory({
						startDate: startDate,
						keyword: null,
						list: res.body.history.result
					});
					enqueueSnackbar(res.body.message, {variant:'success'});
				} else if ([500, 501, 502, 503, 504].includes(res.status)) {
					enqueueSnackbar("SERVER ERROR. Please try again later.", {variant:'error'});
				} else {
					enqueueSnackbar(res.body.message, {variant:'error'});
				};
			});
		} else if (e.target.name === 'keyword') {
			searchByKeyword(keyword)
			.then(res => {
				if (res.ok) {
					console.log(typeof(new Date(res.body.history.result[0].start_time)));
					setList(res.body.history.result)
					setHistory({
						startDate: new Date(),
						keyword: keyword,
						list: res.body.history.result
					});
					enqueueSnackbar(res.body.message, {variant:'success'});
				} else if ([500, 501, 502, 503, 504].includes(res.status)) {
					enqueueSnackbar("SERVER ERROR. Please try again later.", {variant:'error'});
				} else {
					enqueueSnackbar(res.body.message, {variant:'error'});
				};
			});
		};
	};

	useEffect(() => {
		// initialize
		handleInitialize();

    return () => {
      setList([]);
			setKeyword('');
			setStartDate(new Date());
			setSelected(new Date());
			setFirstVisit(true);
    }
  }, []);

	return (
		<>
			<header>
				<NavBar/>
			</header>
			<main>
				<div id='history-frame'>
					<div id='history-search-bar'>
						<div className='history-search-item'>
							<div className='history-search-item-sub'>
								<DatePicker id='history-date-picker' selected={startDate} onChange={(startTime)=>setStartDate(startTime)}/>
							</div>
							<button name='startTime' type='submit' className='btn btn-outline-info shadow' onClick={(e)=> {setFirstVisit(false);handleOnSubmit(e)}}>SEARCH</button>
						</div>
						<div className='history-search-item'>
							<div className='history-search-item-sub'>
								<input type='text' id='history-search-keyword' placeholder='SEARCH' onChange={handleOnChange} value={keyword}/>
							</div>
							<button name='keyword' type='submit' className='btn btn-outline-info shadow' onClick={(e)=> {setFirstVisit(false);handleOnSubmit(e)}}>SEARCH</button>
						</div>
					</div>
					<div id='history-result' className='table-fix-head'>
						{
							list.length !== 0 ? (
								<table className='table'>
									<thead>
										<tr>
											<th className='table-date' scope='col'>DATE</th>
											<th className='table-topic' scope='col'>TOPIC</th>
											<th className='table-detail' scope='col'>DETAIL</th>
										</tr>
									</thead>
									<tbody>
									{list.map(vote => (  
										<tr key={vote.id}>
											<td className='table-date' scope='row'>{new Date(vote.start_time).toDateString().replace(/^\S+\s/,'')}</td>
											<td className='table-topic'>{vote.name}</td>
											<td className='table-detail'><button onClick={()=>navigate(`/history/${vote.id}`)}><MdFindInPage/></button></td>
										</tr>
									))}
									</tbody>
								</table>
							) : !firstVisit ? (
								<div id='history-no-results'>NO RESULTS FOUND.<br/>Please try another date or keyword.</div>
							) : (
								<div id='history-no-results'>History doesn't change the past, <br/>but likely it changes the future...</div>
							)
						}
					</div>
				</div>
			</main>
			<footer>
				<Footer/>
			</footer> 
		</>
  )
};

export default History;