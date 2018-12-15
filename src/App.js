import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  state={
    text:"sadasd"
  };


  changeTextHandler=(evt)=>{
    const text = evt.target.value;
    this.setState({text});
  };

  removeLetterHandler=(index)=>{
    const text = this.state.text.split('');
    text.splice(index,1);
    this.setState({text:text.reduce((e,i)=>e+i,'')});
  };

  handleLetters=()=>{
    let lis =[];
    for(let i=0;i<this.state.text.length;i++){
      lis.push(<div key={i}  onClick={()=>this.removeLetterHandler(i)} className='letter'>{ this.state.text[i]}</div>);

    }
    return lis;

  };

  render() {
    return (
      <div className="App">
        <h1>Challenge 2</h1>

        <div>
          <input type="text" value={this.state.text} onChange={this.changeTextHandler}/>
          <h3>{this.state.text.length}</h3>
          <ValidationComponent limit={6} length={this.state.text.length} />
        </div>

        <div>
          {this.handleLetters()}
        </div>

      </div>
    );
  }
}

export default App;
