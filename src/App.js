import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './home/Home.js';
import Profile from './profile/Profile.js';
import History from './history/History.js';
import Login from './login/Login.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state= { 
      user: "is0xjh25",
    };
  }

  // componentDidMount() {
  //   this.setUser(checkAuthorized());
  // }

  componentWillUnmount() {
    this.setUser("");
  }

  setUser = (u) => {
    this.setState({user: u});
  }

  setSearchBar = (b) => {
    this.setState({searchBar: b});
  }

  render() {
    return (
      <>
        { window.location.pathname!=='/login' ? <header><NavBar user={this.state.user}/> </header>: null}
        <Router>
          { window.location.pathname!=='/login' ?
            <main>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/profile' element={<Profile/>}/>
                <Route exact path='/history' element={<History/>}/>
                <Route exact path='/history/find/:id' element={<History/>}/>
                <Route path='/vote' element={<Home/>}/>
              </Routes>
            </main>
          :
            <main style={{height: "100vh", top:0}}>
              <Routes>
                <Route exact path='/login' element={<Login />} />
              </Routes>
            </main>
          }
        </Router>
        { window.location.pathname!=='/login' ? <footer><Footer/></footer>: null}
      </>
    );
  }
}

export default App;
