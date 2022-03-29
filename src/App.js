import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

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
        <div id='navbar'>
          <NavBar user={this.state.user} />
        </div>
        <div id='main'>
          main
        </div>
        {/* <Router>
        <div id='main'>
          main
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </Router> */}
        <div id='footer'>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
