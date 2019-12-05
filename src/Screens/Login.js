import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div>
                <h1>User</h1>
                <h1>Pass</h1>
                <button onClick={() => this.props.onLoginClicked()}> Login</button>
            </div>
        )
    }
}

export default Login;