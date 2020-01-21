import React, { Component } from 'react';


class Note extends Component {

    constructor(props) {
        super(props)

        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onUpdateClick = this.onUpdateClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendUpdateClick = this.sendUpdateClick.bind(this);

        this.state = {
            content: this.props.content,
            noteID: this.props.noteID,
            editingNote: false,
        }
    }

    onDeleteClick() {
        //axios delete call
        this.props.deleteNote(this.state.noteID);
    }

    onUpdateClick(msg) {
        //axios put call
        //<Text into editable field
        this.setState({
            editingNote: true
        })
    }

    sendUpdateClick() {

        this.setState({
            editingNote: false
        })

        this.props.updateNote(this.state.content,this.state.noteID)
        //Update sent

    }

    handleChange(event) {
        this.setState({ content: event.target.value });
    }

    componentDidMount() {
    }


    render() {
        return (
            <div style={{borderStyle: 'ridge', borderColor: '#0D324D',borderRadius: '8px', alignContent: 'center', justifyContent: 'center', backgroundColor:'#fffdd0'}}>

                {this.state.editingNote ?
                    <div>
                        <input
                        data-cy={'editinginput'}
                            value={this.state.content}
                            type="text" name="name"
                            onChange={this.handleChange}
                        />
                        <button data-cy={'updatebutton'}onClick={this.sendUpdateClick}>Update</button>
                    </div>
                    :
                    <p style={{ color:'black'}}
                        onClick={this.onUpdateClick}>
                        {this.state.content}
                    </p>
                }


               

                <button data-cy={'deletebutton'} style={{ borderRadius: "6px" }}onClick={this.onDeleteClick} >Delete</button>
            </div>
        )
    }
}

export default Note;
