import React, { Component } from 'react';
import Board from '../Components/Board.js'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import axios from 'axios';
import { Alert } from 'reactstrap';
import NoteList from '../Components/NoteList.js';
import $ from 'jquery';




import Container from '@material-ui/core/Container'

class Main extends Component {


    constructor(props) {
        super(props);

        this.onCheckCliked = this.onCheckCliked.bind(this);
        this.registerFieldClick = this.registerFieldClick.bind(this);
        this.onCheckWinkClick = this.onCheckWinClick.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.getAllNotes = this.getAllNotes.bind(this);

        this.state = {
            isLoggedin: false,
            topLabels: [],
            leftLabels: [],
            fieldAnswers: [],
            fieldInput: [
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false],
                [false, false, false, false, false]
            ],
            loaded: false,
            field: [],
            gameID: null,
            alertEnabled: false,
            alertMsg: null,
            notes: [],
            userID: props.userID
        }
    }
    componentDidMount() {

    }

    registerFieldClick(params) {
        var tempField = [...this.state.fieldInput]
        tempField[params.xPos][params.yPos] = !tempField[params.xPos][params.yPos]
        this.setState({
            fieldInput: tempField
        })
    }

    setAlert(msg) {
        this.setState({
            alertEnabled: true,
            alertMsg: msg
        })
    }


    getAllNotes() {
        var self = this
        var tempNotes = []
        const headers = {
            'Authorization': 'Bearer ' + this.props.token
        };


        const request = axios({
            method: 'GET',
            url: 'https://localhost:8095/resources/note/' + this.props.userID,
            headers: headers,
        })
        request
            .then(function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    const object = {
                        userID: response.data[i].userID,
                        content: response.data[i].content,
                        noteID: response.data[i].noteID
                    }
                    tempNotes.push(object)
                    self.setState({
                        notes: tempNotes
                    })
                }
            })

    }


    onCheckCliked() {

        var self = this
        console.log("ID" + this.props.userID)
        const request = axios({
            method: 'GET',
            url: 'https://localhost:8095/resources/game/' + this.props.userID
        })

        request
            .then(function (response) {
                console.log(response.data)
                if (response.data !== 'No game found') {
                    self.setState({
                        topLabels: response.data.UpperLabels,
                        leftLabels: response.data.LeftLabels,
                        field: response.data.Playfield,
                        loaded: true,
                        gameID: response.data.gameID
                    })
                    console.log(self.state.topLabels)
                } else {
                    self.setAlert(response.data)
                    self.setState({
                        loaded: false
                    })
                }
            })


    }

    onCheckWinClick() {
        var self = this
        console.log("ID" + this.props.userID)
        const request = axios({
            method: 'POST',
            url: 'https://localhost:8095/resources/usergame',
            data: {
                playerInput: this.state.fieldInput,
                gameField: this.state.field,
                userID: this.props.userID,
                gameID: this.state.gameID
            }
        })

        request
            .then(function (response) {
                console.log(response.data)
                if (response.data.win) {
                    self.setState({
                        loaded: false,
                        fieldAnswers: [],
                        fieldInput: [
                            [false, false, false, false, false],
                            [false, false, false, false, false],
                            [false, false, false, false, false],
                            [false, false, false, false, false],
                            [false, false, false, false, false]
                        ],
                    })
                    self.setAlert("You won!")
                } else {
                    self.setAlert("You lost :(")
                }
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
                                <Board gameField={true} registerFieldClick={this.registerFieldClick} fieldInput={this.state.fieldInput} />
                            </Grid>
                            <Grid container
                                item xs={7}
                                direction="column"
                                alignItems="flex-start">>


                            </Grid>

                        </Grid>
                        : (null)}
                    {this.state.alertEnabled ?
                        (<Alert color="dark">
                            {this.state.alertMsg}
                        </Alert>) : (null)
                    }
                    <Grid
                        container
                    >
                        <Button data-cy={'logout'} variant="contained" color="secondary" onClick={() => this.props.onLoginClicked()}>Log out</Button>
                        <Button data-cy={'getgame'} size="small" variant="outlined" onClick={() => this.onCheckCliked()}>Get game</Button>
                        <Button data-cy={'check'} size="small" variant="outlined" onClick={() => this.onCheckWinClick()}>Check</Button>
                    </Grid>
                    {this.state.userID === null ? (null) :

                        <NoteList notes={this.state.notes} userID={this.state.userID}></NoteList>

                    }
                </Container>



            </div>
        )
    }
}

export default Main;