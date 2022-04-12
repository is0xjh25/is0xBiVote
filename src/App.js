import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home/Home.js';
import Profile from './profile/Profile.js';
import History from './history/History.js';
import Result from './result/Result.js';
import Login from './login/Login.js';
import VoteEntry from './vote/VoteEntry.js';
import Vote from './vote/Vote.js';
import NotFound from './components/NotFound.js'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      user: null,
      history: {
        startDate: null,
        keyword: null,
        list: null,
      }
    }
  };
  
 componentDidMount() {
    // this.setUser(checkAuthorized());
    this.setUser("123456789012");
  };

  componentWillUnmount() {
    this.setUser("");
  };

  setHistory = (data) => {
    this.setState({history: data});
  };

  setUser = (u) => {
    this.setState({user: u});
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/history' element={<History history={this.state.history} setHistory={this.setHistory}/>}/>
          <Route exact path='/history/:id' element={<Result/>}/>
          <Route exact path='/vote' element={<VoteEntry/>}/>
          <Route exact path='/vote/:id' element={<Vote/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    );
  };
};

// <main style={{height: '100vh', top:0}}>


export default App;