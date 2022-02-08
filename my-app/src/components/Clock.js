import React,{Component} from 'react';
import Bosuutap from "./test";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    tick() {
        this.setState({
           date: new Date()
        });
    }

    render() {
        return (
          <div>
              <h1>hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
              {button}
          </div>
        );
    }
}

const button = <button onclick="activelasers()">
                   active lasers
                </button>


export default Clock;