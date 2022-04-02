import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import { MdFindInPage } from 'react-icons/md';
import './History.css';
import 'react-datepicker/dist/react-datepicker.css';

const Main = (props) => {

	const { redirectPage, handleOnChange, handleOnSubmit, list, startDate, keyword, setStartDate, setKeyword } = props;
	const[firstVisit, setFirstVisit] = useState();

	useEffect(() => {

		// initialize
		setFirstVisit(true);

    // const cookie= getCookie('token');

    // if (cookie === "") {
    //   enqueueSnackbar("Please login first.",{variant:'warning'});
    //   setUser("");
    // }  else {
    //   setUser(cookie);
    // }

    return () => {
      setFirstVisit();
    }
  }, [])
	
	return ( 
		<>
			<div id='history-search-bar'>
				<div className='history-search-item'>
					<div className='history-search-item-sub'>
						<DatePicker id='history-date-picker' selected={startDate} onChange={(date)=>setStartDate(date)}/>
					</div>
					<button name="date" type="submit" className="btn btn-outline-info shadow" onClick={(e)=> {setFirstVisit(false);handleOnSubmit(e)}}>SEARCH</button>
				</div>
				<div className='history-search-item'>
					<div className='history-search-item-sub'>
						<input type="text" id="history-search-keyword" placeholder='SEARCH' onChange={handleOnChange} value={keyword}/>
					</div>
					<button name="keyword" type="submit" className="btn btn-outline-info shadow" onClick={(e)=> {setFirstVisit(false);handleOnSubmit(e)}}>SEARCH</button>
				</div>
			</div>
			<div id='history-result' className='table-fix-head'>
				{
					list.length !== 0 ? (
						<table className="table">
							<thead>
								<tr>
									<th className='table-date' scope="col">DATE</th>
									<th className='table-topic' scope="col">TOPIC</th>
									<th className='table-detail' scope="col">DETAIL</th>
								</tr>
							</thead>
							<tbody>
							{list.map(vote => (  
								<tr key={vote.id}>
									<td className='table-date' scope="row">{vote.date}</td>
									<td className='table-topic'>{vote.name}</td>
									<td className='table-detail'><button onClick={()=>redirectPage('single', `/history/find/${vote.id}`) }><MdFindInPage/></button></td>
								</tr>
								))
							}
							</tbody>
						</table>
					) : !firstVisit ? (
						<div id='history-no-results'>NO RESULTS FOUND.<br/>Please try another date or keyword.</div>
					) : (
						<div id='history-no-results'>History doesn't change the past, <br/>but likely it changes the future...</div>
					)
				}
			</div>
		</>
	)
}

export default Main;
