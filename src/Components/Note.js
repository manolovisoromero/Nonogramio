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
        //Update sent

    }

    handleChange(event) {
        this.setState({ content: event.target.value });
    }

    componentDidMount() {
    }


    render() {
        return (
            <div>

                {this.state.editingNote ?
                    <div>
                        <input
                            value={this.state.content}
                            type="text" name="name"
                            onChange={this.handleChange}
                        />
                        <button onClick={this.sendUpdateClick}>Update</button>
                    </div>
                    :
                    <p
                        onClick={this.onUpdateClick}>
                        {this.state.content}
                    </p>
                }


                {this.state.noteID}

                <button onClick={this.onDeleteClick} >Delete</button>
            </div>
        )
    }
}

export default Note;
