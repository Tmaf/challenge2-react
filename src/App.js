import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import ChartComponent from "./ChartComponent/ChartComponent";

class App extends Component {
  state={
    text:"test"
  };


  changeTextHandler=(evt)=>{
    const text = evt.target.value;
    this.setState({text});
  };

  removeLetterHandler=(index)=>{
    const text = this.state.text.split('');
    text.splice(index,1);
    this.setState({text:text.join('')});
  };

  handleLetters=()=>{
    let lis =[];
    for(let i=0;i<this.state.text.length;i++){
        lis.push(<ChartComponent key={i}  onClick={()=>this.removeLetterHandler(i)} >{this.state.text[i]}</ChartComponent>);
    }
    return lis;

  };

  render() {
    return (
      <div className="App">
        <h1>Challenge 2</h1>

        <div>
          <input type="text" value={this.state.text} onChange={this.changeTextHandler}/>
          <h4>Length: {this.state.text.length}</h4>
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
