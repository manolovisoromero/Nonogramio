import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios';
import https from 'https';




class Login extends Component{


constructor(props){
    super(props);

    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handleUsernameChange = this._handleUsernameChange.bind(this);
    this.loginPost = this.loginPost.bind(this);


    this.state = {
        username: 'Username',
        password: 'Password',
        loginSuccess: false
    }


}

async loginPost(){

    // const agent = new https.Agent({  
    //     rejectUnauthorized: false
    //    });
    
    // const request = await axios({
    //     method: 'post',
    //     url: 'https://localhost:8095/authenticate/login',
    //     httpAgent: agent,
    //     data: {
    //       username: this.state.username,
    //       password: this.state.password
    //     }
    //   })
  
    //   console.log(request.response)

    //   if(this.state.loginSuccess){
    //       this.props.onLoginClicked()
    //   }

    fetch('https://localhost:8095/authenticate/login',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
        })

    })
  
}


_handlePasswordChange(e) {
    this.setState({
        password: e.target.value
    });
    console.log("password",this.state.password)
}

_handleUsernameChange(e) {
    this.setState({
        username: e.target.value
    });
    console.log("username",this.state.username)
}


    render(){
        return(
            <div /*style={{backgroundColor:'#001f3f'}}*/>
                <h1>Username</h1>
                <TextField  value={this.state.username} onChange={this._handleUsernameChange} id="outlined-basic" label="Outlined" variant="outlined" />
                <h1>Password</h1>
                <TextField value={this.state.password} onChange={this._handlePasswordChange} id="outlined-basic" label="Outlined" variant="outlined" />
                <Button onClick={() => this.loginPost()} variant="outlined">Login</Button>
            </div>
        )
    }
}

export default Login;