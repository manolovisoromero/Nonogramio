import React, { Component } from 'react';
import './App.css';
import Login from './Screens/Login.js'
import Main from './Screens/Main.js'
import $ from 'jquery';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.onLoginClicked = this.onLoginClicked.bind(this);
    this.setData = this.setData.bind(this);
    this.state = {
      isLoggedin: false,
      authToken: '',
      userID: null
    }
  }


  onLoginClicked = () => { this.setState({ isLoggedin: !this.state.isLoggedin }); }

  onCheckClicked = () => { }

  componentDidMount() {

    // var settings = {
    //   "url": "https://localhost:8095/resources/note/1",
    //   "method": "GET",
    //   "timeout": 0,
    //   "headers": {
    //     "Authorization": "Bearer sdsdsdsd"
    //   },
    // };
    
    // $.ajax(settings).done(function (response) {

    // });
   
  }






  setData(Authtoken, userid) {
    this.setState({
      authToken: Authtoken,
      userID: userid
    })


  }

  render() {

    var { isLoggedin } = this.state;

    if (!isLoggedin) {
      return <div className="loginHolder">
        <Login onLoginClicked={this.onLoginClicked} setData={this.setData}></Login>
      </div>
    }
    else {
      return (
        <Main onLoginClicked={this.onLoginClicked} userID={this.state.userID} token={this.state.authToken}></Main>
      )
    }
    ;
  }
}
