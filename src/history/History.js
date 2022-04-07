import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { MdFindInPage } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './History.css';

const demoVote = [
	{
		id: 1,
		name: "Do aliens exists?",
		date: "April 8 2022"
	},
	{
		id: 2,
		name: "Is Messi better than Ronaldo?",
		date: "April 8 2022"
	},
	{
		id: 3,
		name: "Cat or Dog?",
		date: "April 8 2022"
	},
	{
		id: 4,
		name: "Earth is flat.",
		date: "April 8 2022"
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
		if (e.target.name === 'date') {
			setHistory({
				startDate: startDate,
				keyword: null,
				list: demoVote
			})
		} else if (e.target.name === 'keyword') {
			setList(list);
			setList(demoVote);
			//注意 set list 要用 then.
			setHistory({
				startDate: new Date(),
				keyword: keyword,
				list: demoVote
			})
		};
	};

	useEffect(() => {

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
		<div id='history-frame'>
			<div id='history-search-bar'>
				<div className='history-search-item'>
					<div className='history-search-item-sub'>
						<DatePicker id='history-date-picker' selected={startDate} onChange={(date)=>setStartDate(date)}/>
					</div>
					<button name='date' type='submit' className='btn btn-outline-info shadow' onClick={(e)=> {setFirstVisit(false);handleOnSubmit(e)}}>SEARCH</button>
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
									<td className='table-date' scope='row'>{vote.date}</td>
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
  )
};

export default History;