import React, { Component} from 'react';
import './App.css';
import Login from './Login.js'

class Square extends Component {
  constructor(props){
    super(props)
    this.state={
      fieldcell: props.field,
      value: '',
      className: 'labelSquare'
    }


  }

  componentDidMount(){
    if(this.state.fieldcell){
      this.setState({
        value: '1',
        className: 'square'
      })
    }
  }



  render(){
    return (
      <button className={this.state.className}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      field: props.gameField
    }
  }

  
  rendersquare(i){
    return <Square field={this.props.gameField}/>
  }

  render(){

    if(this.state.field){
    
    return (
      <div>
      <div className="board-row">
        {this.rendersquare(0)}
        {this.rendersquare(1)}
        {this.rendersquare(2)}
        {this.rendersquare(3)}
        {this.rendersquare(4)}
      </div>
        <div className="board-row">
        {this.rendersquare(5)}
        {this.rendersquare(6)}
        {this.rendersquare(7)}
        {this.rendersquare(8)}
        {this.rendersquare(9)}
      </div>
         <div className="board-row">
        {this.rendersquare(10 )}
        {this.rendersquare(11)}
        {this.rendersquare(12)}
        {this.rendersquare(13)}
        {this.rendersquare(14)}
       </div>  
       <div className="board-row">
        {this.rendersquare(15 )}
        {this.rendersquare(16)}
        {this.rendersquare(17)}
        {this.rendersquare(18)}
        {this.rendersquare(19)}
       </div>  
       <div className="board-row">
        {this.rendersquare(20 )}
        {this.rendersquare(21)}
        {this.rendersquare(22)}
        {this.rendersquare(23)}
        {this.rendersquare(24)}
       </div>  
       </div>     
    )
    }else if(!this.state.field){
      return(
      <div>
      <div className="board-row">
        {this.rendersquare(0)}
        {this.rendersquare(1)}
        {this.rendersquare(2)}
        {this.rendersquare(3)}
        {this.rendersquare(4)}
      </div>
        <div className="board-row">
        {this.rendersquare(5)}
        {this.rendersquare(6)}
        {this.rendersquare(7)}
        {this.rendersquare(8)}
        {this.rendersquare(9)}
      </div>
         <div className="board-row">
        {this.rendersquare(10 )}
        {this.rendersquare(11)}
        {this.rendersquare(12)}
        {this.rendersquare(13)}
        {this.rendersquare(14)}
       </div>  
       <div className="board-row">
        {this.rendersquare(15 )}
        {this.rendersquare(16)}
        {this.rendersquare(17)}
        {this.rendersquare(18)}
        {this.rendersquare(19)}
       </div>  
       <div className="board-row">
        {this.rendersquare(20 )}
        {this.rendersquare(21)}
        {this.rendersquare(22)}
        {this.rendersquare(23)}
        {this.rendersquare(24)}
       </div>  
       </div> 
      )
    }

}}

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isLoggedin: false,
      topLabels: [[null,null,null,null,null],
      [null,null,null,null,null],
      [null,'1',null,'1','2'],
      ['2','1',null,'1','1'],
      ['1','1','2','1','1']
    ]
    }
  }


  onLoginClicked = () => {
    this.setState({isLoggedin: !this.state.isLoggedin});
  }


  componentDidMount(){
    fetch('https://localhost:8095/login/game')
    .then(res => res.json())
    .then(res => {
      console.log(res[1])
      
    });

    console.log('hello')
}

  
  render(){

    var { isLoggedin} = this.state;

    if (!isLoggedin){
      return <Login onLoginClicked={this.onLoginClicked}></Login>
    }
    else{
      return (
        <div className="App">
          <div>
          <header className="App-header">
            <h1 className="h1tag">Nonogram.io~</h1>
          </header>
    
          <div className="gameBoard">
            <Board labels={this.state.labels} gameField={false}/>
              <Board gameField={true}/>
            </div>
            <button onClick={() => this.onLoginClicked() }>Back</button>
    

          </div>
        </div>
      )

    }

;
}
}
