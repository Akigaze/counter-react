import React from "react"

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
        // console.log(props);
        props.parent.bindChild(this)
    }

    add = () =>{
        this.setState(preState => ({
            count:++preState.count
        }));
        this.props.summing(1);
    }

    drop = () =>{
        this.setState(preState => {
            return {count:--preState.count}
        });
        this.props.summing(-1);
    }

    reset = () => {
        this.props.summing(-this.state.count)
        this.setState(preState => {
            return {count:0}
        })
    }

    render(){
        return (
            <div>
                <input className="countBtn" type="button" value="+" onClick={this.add}/>
                <input className="countBtn" type="button" value="-" onClick={this.drop}/>
                <span className="eachCount">{this.state.count}</span>
                <input className="countBtn" type="button" value="Reset" onClick={this.reset}/>
            </div>
        )
    }
}
