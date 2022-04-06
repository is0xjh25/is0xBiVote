import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './home/Home.js';
import Profile from './profile/Profile.js';
import History from './history/History.js';
import Result from './result/Result.js';
import Login from './login/Login.js';
import VoteEntry from './vote/VoteEntry.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state= { 
      user: null,
      history: {
        startDate: null,
        keyword: null,
        list: null,
      }
    };
  }
  
 componentDidMount() {
    // this.setUser(checkAuthorized());
    this.setUser("1234567890");
  }

  componentWillUnmount() {
    this.setUser("");
  }

  setHistory = (data) => {
    this.setState({history: data});
  }

  setUser = (u) => {
    this.setState({user: u});
  }

  render() {
    return (
      <>
        { window.location.pathname !== '/login' ? <header><NavBar user={this.state.user}/></header> : null }
        <Router>
          { 
            window.location.pathname !== '/login' ? (
              <main>
                <Routes>
                  <Route exact path='/' element={<Home/>}/>
                  <Route exact path='/profile' element={<Profile/>}/>
                  <Route exact path='/history' element={<History history={this.state.history} setHistory={this.setHistory}/>}/>
                  <Route exact path='/history/:id' element={<Result/>}/>
                  <Route exact path='/vote' element={<VoteEntry/>}/>
                </Routes>
              </main>
            ) : (
              <main style={{height: '100vh', top:0}}>
                <Routes>
                  <Route exact path='/login' element={<Login/>} />
                </Routes>
              </main>
            )
          }
        </Router>
        { window.location.pathname !== '/login' ? <footer><Footer/></footer> : null }
      </>
    );
  }
};

export default App;