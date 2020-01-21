import React, { Component } from 'react';


export default class Square extends Component {
    constructor(props) {
      super(props)
      this.state = {
        fieldcell: props.field,
        value: props.value,
        class: props.class,
        xPos: props.xPos,
        yPos: props.yPos,
        clicked: props.clicked
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleRegisterFieldClick = this.handleRegisterFieldClick.bind(this);
    }

    handleClick() {
      if(this.state.fieldcell){
        if (this.props.clicked) {
          this.setState({
            class: 'square'
          })
        } else {
          this.setState({
            class: 'clickedSquare'
          })
        }
      }
    }

    handleRegisterFieldClick(){
      if(this.state.fieldcell){
        this.handleClick()
        var params = { 
          xPos: this.state.xPos,
          yPos: this.state.yPos
        }
        this.props.registerFieldClick(params)
      }
    }

    render() {

      return (
        <button data-cy={this.state.fieldcell ?  this.state.xPos.toString() + this.state.yPos.toString() : (null) } className={this.state.class} onClick={this.handleRegisterFieldClick}  background={this.state.backgroundcolor}>
          {this.state.value !== 0 ? this.state.value : null}
        </button>
      );
    }
  }