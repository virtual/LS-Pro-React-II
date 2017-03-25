import React, { Component } from 'react'; 
import './Clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.updateTime = this.updateTime.bind(this);
        this.state = {
            date: new Date()
        };
    }

     componentDidMount() {
        setInterval(this.updateTime, 1000);
    }
 
    updateTime() {
          this.setState({
            date: new Date()
        });
    } 
   
  render() {
    return (
      <div className="clock"> 
        {this.state.date.toLocaleTimeString()}
      </div>
      
    );
  }
}

export default Clock;
