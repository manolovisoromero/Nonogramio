import React, { Component } from 'react';
import './App.css';
import Login from './Screens/Login.js'

import Board from './Components/Board.js'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'




export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
      topLabels: [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, '1', null, '1', null],
        ['2', '1', null, '1', '1'],
        ['1', '1', '2', '1', '1']
      ],
      leftLabels: [
        [null, null, null, null, '1'],
        [null, null, null, null, '2'],
        [null, null, null, '1', '1'],
        [null, null, null, null, '1'],
        [null, null, null, '3', '1']
      ],
      fieldPressed: [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ]
    }
  }


  onLoginClicked = () => {
    this.setState({ isLoggedin: !this.state.isLoggedin });
  }


  componentDidMount() {
    // fetch('https://localhost:8095/login/game')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res[1])

    //   });

  }

  render() {

    var { isLoggedin } = this.state;

    if (!isLoggedin) {
      return <Login onLoginClicked={this.onLoginClicked}></Login>
    }
    else {
      return (
        <div className="App">
          <Container>
            <header className="App-header">
              <h1 className="h1tag">Nonogram.io~</h1>
            </header>
            <Grid
              container 
              flex-direction="row"             
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">
                <Board topLabels={this.state.topLabels} gameField={false} />
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">
                <Board topLabels={this.state.leftLabels} gameField={false} />

                <Board gameField={true} />
              </Grid>
              <Grid>
                <button onClick={() => this.onLoginClicked()}>Back</button>

              </Grid>

            </Grid>

          </Container>
        </div>
      )

    }

    ;
  }
}
