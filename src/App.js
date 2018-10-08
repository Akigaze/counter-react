import React, { Component } from 'react';
import './style/App.css';
import Counter from "./component/counter"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            summary:0
        }
        this.children = [];
    }
    changeSummary=(num)=>{
        this.setState(preState => {
            return {summary:preState.summary+num}
        });
    }

    generateCounters(){
        let {size} = this.props;
        let counters = [];
        while(size > 0){
            counters.push(
                <Counter key={`counter-${size}`} name={`Counter ${this.props.size-size+1}`} summing={this.changeSummary} parent={this}/>
            );
            size--;
        }
        return counters;
    }

    bindChild=(component)=>{
        //console.log(this);
        this.children.push(component);
    }

    reset = () =>{
        this.children.forEach(child => child.reset())
        this.setState(preState => {
            return {summary:0}
        });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            {this.generateCounters()}
            <div className="summaryDiv">
                <span>Summary : </span>
                <span className="summaryResult">{this.state.summary}</span>
                <input className="countBtn" type="button" value="Reset" onClick={this.reset}/>
            </div>
        </header>
      </div>
  );
  }
}

export default App;
