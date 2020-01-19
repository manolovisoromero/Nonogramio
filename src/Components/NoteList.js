import React, { Component} from 'react';
import axios from 'axios';
import Note from './Note'
import { makeStyles } from '@material-ui/core/styles';



class NoteList extends Component{


    constructor(props){
        super(props)


        this.state = {
            notes: [],
            userID: props.userID

        }


        this.deleteNote = this.deleteNote.bind(this);
    }

    async getAllNotes(){
        var self = this
        console.log("ID"+this.state.userID)
        var tempNotes = []
        const request = axios({
            method: 'GET',
            url: 'https://localhost:8095/resources/note/' + this.state.userID
        })
    
        await request
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
                    console.log(self.state.notes)
            }})

    }

    deleteNote(noteid){
        var self = this
        const request = axios({
            method: 'DELETE',
            url: 'https://localhost:8095/resources/note/' + noteid,
        })
    
         request
            .then(function (response) {
                this.getAllNotes()
            })
    }

    updateNote(){

    }




    componentDidMount(){
        this.getAllNotes()


    }

    render(){
        if(this.state.userID !== null){        return(
            
            <div style={{width: '40%', height:'20%', overflow: 'scroll'}}>
                {this.state.notes.map((d) => <Note deleteNote={this.deleteNote} key={d.noteID}  noteID={d.noteID} content={d.content}></Note>)}
            </div>
        )}
        else{return null}
    }
}

export default NoteList;


