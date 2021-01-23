import { Component } from 'react';
import './App.css';


class App extends Component{
  state = {
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  };

  componentDidMount() {
    this.counter();
  }
  
  updateTimer = () => {
    let future = Date.parse("mar 1, 2021 11:30:00");
    let now = new Date();
    let diff = future - now;
  
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let mins = Math.floor(diff / (1000 * 60));
    let secs = Math.floor(diff / 1000);

    this.setState({
      days: days,
      hours: hours - days * 24,
      minutes: mins - hours * 60,
      seconds: secs - mins * 60,
    })
  
  }

  counter = () => {
    setInterval(() => {
      this.updateTimer();
    }, 1000);
  };

  render(){
    const {days, hours, minutes, seconds} = this.state;
    return(
      <div className="container">
        <div className="row">
          <div className="col s12">
            <img src='images/logo.jpeg'  alt="logo" height="180" width="180" />
            <h2 className="grey-text text-darken-3 ">
              <span className="orange-text text-darken-3">Veekend</span> Bazar
            </h2>
            <p className="grey-text">Augmented reality shopping is the future and retailers are coming up with cool ways to provide shoppers an augmented reality shopping experience.</p>
            
          </div>
          <div className="col s12">
            <div id="timer">
              <div>{days}<span>days</span></div>
              <div>{hours}<span>hours</span></div>
              <div>{minutes}<span>minutes</span></div>
              <div>{seconds}<span>seconds</span></div>
            </div>
            
            <h5 className="grey-text text-darken-1 ">
              Comming Soon
            </h5>
          </div>
          <div className="col s12 center d-flex">
            <ul style={{marginTop: '25px'}}> 
                <li><a href="https://www.facebook.com/Veekendbazar.pk"><i className="fa fa-facebook" id="fa-1"></i></a></li>
                <li><i className="fa fa-whatsapp" id="fa-2"></i></li>
                <li><a href="https://www.instagram.com/veekendbazar.pk/"><i className="fa fa-instagram " id="fa-3"></i></a></li>
                <li><i className="fa fa-youtube " id="fa-5"></i></li>
            </ul>
          </div>
        </div>
      </div>
     
        
     
      
  
    )
  }
}





export default App;
