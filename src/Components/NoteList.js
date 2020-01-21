import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note'
import { makeStyles } from '@material-ui/core/styles';



class NoteList extends Component {

    constructor(props) {
        super(props)


        this.state = {
            notes: [],
            userID: props.userID,
            postNoteContent: '',
            maxNotesReached: false,
            authToken: null,
            renderlist: false
        }

        this.deleteNote = this.deleteNote.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postNote = this.postNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
    }

    async getAllNotes() {
        var self = this
        console.log("ID" + this.state.userID)
        var tempNotes = []
        const request = axios({
            method: 'GET',
            url: 'https://localhost:8095/resources/note/' + this.state.userID
        })

        await request
            .then(function (response) {
                console.log(response.data.length)
                if (response.data.length > 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        const object = {
                            userID: response.data[i].userID,
                            content: response.data[i].content,
                            noteID: response.data[i].noteID
                        }
                        tempNotes.push(object)
                        self.setState({
                            renderlist: true,
                            notes: tempNotes,
                            maxNotesReached: (response.data.length === 5)
                        })

                    }
                } else {
                    self.setState({
                        renderlist: false
                    })
                }
            })


    }




    async deleteNote(noteid) {
        var self = this;
        const request = axios({
            method: 'DELETE',
            url: 'https://localhost:8095/resources/note/' + noteid,
            headers: {
                'content-type': 'text/plain',
            },
        })

        await request
            .then(function (response) {
                if (response.status === 202) {
                    self.getAllNotes()
                }
            })

    }

    async updateNote(contentt, noteID) {

        var self = this
        const request = axios({
            method: 'PUT',
            url: 'https://localhost:8095/resources/note',
            headers: {
                'content-type': 'application/json',
            },
            data: {
                noteID: noteID,
                content: contentt
            }
        })
        await request
            .then(function (response) {
                if (response.status === 202) {
                    self.getAllNotes();
                }
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    handleChange(event) {
        this.setState({ postNoteContent: event.target.value });
    }


    async postNote() {

        var self = this
        const request = axios({
            method: 'POST',
            url: 'https://localhost:8095/resources/note/',

            data: {
                userID: self.state.userID,
                content: self.state.postNoteContent
            }
        })
        await request
            .then(function (response) {
                if (response.status === 202) {
                    self.getAllNotes();
                }
            })

    }





    componentDidMount() {
        this.getAllNotes()
    }

    render() {
        if (this.state.userID !== null) {
            return (

                <div style={{ width: '40%', height: '250px', overflow: 'auto', alignContent: 'center', justifyContent: 'center' }}>
                    <p style={{ color: 'white', fontSize: "20" }}>Notes:</p>

                    {this.state.renderlist ?  this.state.notes.map((d) => <Note deleteNote={this.deleteNote} updateNote={this.updateNote} key={d.noteID} noteID={d.noteID} content={d.content}></Note>) 
                        : null}


                    <div>

                        <p style={{ color: 'white' }}>
                            Add a new note:
                        </p>
                        <input
                            data-cy={'newnoteinput'}
                            value={this.state.postNoteContent}
                            type="text" name="name"
                            onChange={this.handleChange}
                        />

                        <button data-cy={'newnotebutton'} disabled={this.state.maxNotesReached} onClick={this.postNote}>
                            {this.state.maxNotesReached ? 'MAX NOTES REACHED' : 'POST IT'
                            }
                        </button>
                    </div>

                </div>
            )
        }
        else { return null }
    }
}

export default NoteList;


