import React, { Component } from 'react'; 
import './Clock.css';
import {Icon} from 'react-fa';

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
        let hour = this.state.date.getHours();
        let min = this.state.date.getMinutes();
        let sec = this.state.date.getSeconds();
        let rotate = '270';
         
        if (sec < 15) { rotate = '0';
        //} else if (sec < 23) { rotate = '90';
        } else if (sec < 30) { rotate = '90';
        //} else if (sec < 38) { rotate = '180';
        } else if (sec < 45) { rotate = '180';
        //} else if (sec < 53) { rotate = '270';
        } 

        sec = ("0" + sec).slice(-2);
        hour = ("0" + hour).slice(-2);

      let cardinal = 'AM';
       if (hour >= 12) { cardinal = 'PM'; } 

    return (
      <div className="clock">
       
        <div class="clockBox">
        <Icon rotate={rotate} size='3x' name="clock-o" /><br/> {hour}:{min}:{sec} {cardinal}
        </div>
      </div>  
    );
  }
}

export default Clock;
