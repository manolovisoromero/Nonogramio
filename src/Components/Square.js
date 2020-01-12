import React, { Component } from 'react';


export default class Square extends Component {
    constructor(props) {
      super(props)
      this.state = {
        fieldcell: props.field,
        value: props.value,
        clas: props.clas,
      }
      this.handleClick = this.handleClick.bind(this);
  
  
    }
  
    componentDidMount() {
  
    }

 
    handleClick() {
      if(this.state.fieldcell){
        if (this.state.clas === 'clickedSquare') {
          this.setState({
            clas: 'square'
          })
        } else {
          this.setState({
            clas: 'clickedSquare'
          })
        }
      }
    }
    render() {
      return (
        <button className={this.state.clas} onClick={this.handleClick} background={this.state.backgroundcolor}>
          {this.state.value !== 0 ? this.state.value : null}
        </button>
      );
    }
  }