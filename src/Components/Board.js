import React, { Component } from 'react';

import Square from './Square.js'


export default class Board extends Component {
    constructor(props) {
      super(props)
      this.state = {
        field: props.gameField,
        fieldPressed: [
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
          [false, false, false, false, false],
        ],
        topLabels: props.topLabels
  
      }
    }
  
    componentDidMount() {
    }
  
  
    rendersquare(i) {
      return <Square field={true} clas={'square'} />
    }
  
  
  
    render() {
  
      if (!this.state.field) {
  
        return (
          <div>
            {this.state.fieldPressed.map((value1, index1) => {
              return <div className="board-row" key={index1}>
                {this.state.fieldPressed[index1].map((value2, index2) => {
                  return <Square clas={'labelSquare'}  key={index2} value={this.state.topLabels[index1][index2]}></Square>
                })}
              </div>
            })}
          </div>
        )
      } 
      else if (this.state.field) {
  
        return (
          <div>
            {this.state.fieldPressed.map((value1, index1) => {
              return <div className="board-row" key={index1}>
                {this.state.fieldPressed[index1].map((value2, index2) => {
                  return <Square clas={'square'}  key={index2} ></Square>
                })}
              </div>
            })}
          </div>
        )
      }
  
    }
  }