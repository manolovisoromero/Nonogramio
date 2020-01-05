import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



class Login extends Component{
    render(){
        return(
            <div style={{backgroundColor:'#001f3f'}}>
                <h1>Username</h1>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <h1>Password</h1>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Button onClick={() => this.props.onLoginClicked()} variant="outlined">Login</Button>
            </div>
        )
    }
}

export default Login;