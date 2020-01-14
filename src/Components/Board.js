import React, { Component } from 'react';

import Square from './Square.js'
import Grid from '@material-ui/core/Grid'



export default class Board extends Component {
    constructor(props) {
      super(props)

      this.fieldClicked= this.fieldClicked.bind(this);
      this.state = {
        field: props.gameField,
        fieldPressed: [
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
        fieldInput: props.fieldInput,
        topLabels: props.topLabels
  
      }
    }
  
    componentDidMount() {
    }
  
  
    rendersquare(i) {
      return <Square field={true} clas={'square'} />
    }

    fieldClicked(x,y){    this.setState(prevState => ({
      fieldPressed: {
          ...prevState.fieldPressed,
          [prevState.fieldPressed[x][y]]: true,
      },
  }));


    }
  
  
  
    render() {
  
      if (!this.state.field) {
  
        return (
          <Grid >
            {this.state.fieldPressed.map((value1, index1) => {
              return <div className="board-row" display="inline-block" key={index1}>
                {this.state.fieldPressed[index1].map((value2, index2) => {
                  return <Square clas={'labelSquare'}  key={index2} value={this.state.topLabels[index1][index2]} registerFieldClick={this.props.registerFieldClick} xPos={index1} yPos={index2} ></Square>
                })}
              </div>
            })}
          </Grid>
        )
      } 
      else if (this.state.field) {
  
        return (
          <div>
            {this.state.fieldPressed.map((value1, index1) => {
              return <div className="board-row" key={index1}>
                {this.state.fieldPressed[index1].map((value2, index2) => {
                  return <Square class={'square'}  field={true} key={index2} clicked={this.state.fieldInput[index1][index2]} registerFieldClick={this.props.registerFieldClick} xPos={index1} yPos={index2}></Square>
                })}
              </div>
            })}
          </div>
        )
      }
  
    }
  }