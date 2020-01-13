import React, { Component } from 'react';
import './App.css';
import Login from './Screens/Login.js'
import Main from './Screens/Main.js'

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
