import React, { Component, Fragment,useEffect,useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
// import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from './actions/shared'
import Home from './components/Home'
// import Nav from './components/Nav'
// import PageNotFound from './components/PageNotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import  AdaptiveWithDetector  from './components/AdaptiveWithDetector';

import './index.css'
import './font.css'
 



class App extends Component {
  //load initial data
  
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  
  }
 

  render() {
    return (
      <Router>

        <Fragment>    
            <Home/>
        </Fragment>
      </Router>

    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    loggedIn: authedUser !== null
  }
}
export default connect(mapStateToProps)(App)

