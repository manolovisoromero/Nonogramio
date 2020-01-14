import React, { Component } from 'react';
import Board from '../Components/Board.js'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import axios from 'axios';

import Container from '@material-ui/core/Container'

class Main extends Component {


    constructor(props) {
        super(props);

        this.onCheckCliked = this.onCheckCliked.bind(this);
        this.registerFieldClick = this.registerFieldClick.bind(this);


        this.state = {
            isLoggedin: false,
            topLabels: [],
            leftLabels: [],
            fieldAnswers: [],
            fieldInput: [
            [false,false,false,false,false],
            [false,false,false,false,false],
            [false,false,false,false,false],
            [false,false,false,false,false],
            [false,false,false,false,false]
            ],
            loaded: false

        }


    }


    componentDidMount() {

    }

    registerFieldClick(params){
        var tempField = [...this.state.fieldInput]
        tempField[params.xPos][params.yPos] = !tempField[params.xPos][params.yPos]
        this.setState({
            fieldInput: tempField
        })
      }
    
    onCheckCliked(){
        var self = this
        console.log("ID"+this.props.userID)
        const request = axios({
            method: 'GET',
            url: 'https://localhost:8095/resources/cors3/' + this.props.userID
        })
    
        request
            .then(function (response) {
                console.log(response.data)
                self.setState({
                    topLabels: response.data.UpperLabels,
                    leftLabels: response.data.LeftLabels,
                    field: response.data.PlayField,
                    loaded: true
                })
                console.log(self.state.topLabels)
            })
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <header className="App-header">
                        <h1 className="h1tag">Nonogram.io~</h1>
                    </header>
                    {this.state.loaded ? 
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end"
                    >
                        <Grid
                            container
                            item xs={3}
                            direction="column"
                            justify="flex-end"
                            alignItems="flex-end">
                            <Board topLabels={this.state.leftLabels} gameField={false} />
                        </Grid>
                        <Grid
                            container
                            item xs={7}
                            direction="column"
                            alignItems="flex-start">
                            <Board topLabels={this.state.topLabels} gameField={false} />
                            <Board gameField={true} registerFieldClick={this.registerFieldClick} fieldInput={this.state.fieldInput}/>
                        </Grid>
                    </Grid>
                    : (null)}
                    <Grid
                        container
                    >
                        <Button variant="contained" color="secondary" onClick={() => this.props.onLoginClicked()}>Back</Button>
                        <Button size="small" variant="outlined" onClick={() => this.onCheckCliked()}>Check</Button>

                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Main;