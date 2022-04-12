import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { MdFindInPage } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import NavBar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import 'react-datepicker/dist/react-datepicker.css';
import './History.css';

const demoVote = [
	{
		voteID: 1,
		voteName: "Do aliens exists?",
		startTime: "April 8 2022"
	},
	{
		voteID: 2,
		voteName: "Is Messi better than Ronaldo?",
		startTime: "April 8 2022"
	},
	{
		voteID: 3,
		voteName: "Cat or Dog?",
		startTime: "April 8 2022"
	},
	{
		voteID: 4,
		voteName: "Earth is flat.",
		startTime: "April 8 2022"
	},
]

const History = (props) => {
	
	const { history, setHistory } = props; 
	const { id } = useParams();
  const navigate = useNavigate();
	const [list, setList] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [selected, setSelected] = useState(new Date());
	const [firstVisit, setFirstVisit] = useState(false);

	const handleOnChange = (e) => {
		if (e.target.id === 'history-search-keyword') {
			setKeyword(e.target.value);
		};
	};

	const handleOnSubmit = (e) => {
		if (e.target.name === 'startTime') {
			// call api
			setHistory({
				startDate: startDate,
				keyword: null,
				list: demoVote
			})
		} else if (e.target.name === 'keyword') {
			// call api 注意 set list 要用 then 和 demoVote
			setList(demoVote);
			setHistory({
				startDate: new Date(),
				keyword: keyword,
				list: demoVote
			})
		};
	};

	useEffect(() => {
		// initialize
		setFirstVisit(true);
		
		if (history.startDate) setStartDate(history.startDate);
		if (history.keyword) setKeyword(history.keyword);
		if (history.list) setList(history.list);

    return () => {
      setList();
			setKeyword();
			setStartDate();
			setSelected();
			setFirstVisit();
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
										<tr key={vote.voteID}>
											<td className='table-date' scope='row'>{vote.startTime}</td>
											<td className='table-topic'>{vote.voteName}</td>
											<td className='table-detail'><button onClick={()=>navigate(`/history/${vote.voteID}`)}><MdFindInPage/></button></td>
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