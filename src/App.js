import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './home/Home';
import Login from './login/Login';

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
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Home />} />
                <Route path='/history' element={<Home />} />
                <Route path='/vote' element={<Home />} />
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
