import React, { Component } from 'react';
import logo from './sea-beach-holiday-vacation.jpg';
import pic1 from './three_new_yoga_poses.jpg'
import pic2 from './n-YOGA-COBRA-POSE-628x314.jpg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ textAlign: 'center' }}>
          <div style={{ width: '60%', textAlign: 'left', marginLeft: '20%' }}>
            <h1 style={{ marginTop: '100px', fontWeight: 'bold' }}>Yoga Massage</h1>
            <h2 style={{ fontSize: '15px', color: '#ffeea3' }}>Just relax and experience.</h2>
            <br /><div style={{ fontSize: '15px' }}>
              Based on the Presence, Touch and Listening Fundamental to the teaching is the emphasis on Movement and Rhythm.
            </div>
            <br />
            <br />

            <img src={pic1} style={{ width: '100%', height: '300px' }} className="App-logo" alt="logo" />
            <br />
            <br />
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
              The course include:
            </div>
            <ul>
              <li>Morning meditation</li>
              <li>Relaxing Massage</li>
              <li>Fitness and Yoga experience</li>
              <li>Mindful movement</li>
            </ul>
            <br />
            <img src={pic2} style={{ width: '100%', height: '300px' }} className="App-logo" alt="logo" />
            <br />
            <br />
            <br />
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Pricing:
          </div>
            <br />
            1000 PHP / 2 hr ( 1 by 1 teaching )
          <br />
            <br />
            ( 20% Discount for students )
          </div>
          <br />
          <br />
          <br />

          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Introduction:
          </div>
          <br />
          We are four young people who love yoga currently working in Philippines Makati city.
          <br />
          <br />
          Our goal is teaching people how to corrects the posture and alignment of the body.
          <br />
          <br />
          Strengthens and revitalizes the internal organs, leading to a healthy and youthful body.
          <br /> <br /><br /> <br />

          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Course registration:
          </div>
          <br />
          +63 9153112476
           <br />
          mail@mail.niceir.com
           <br />
           <br />
           
           <a href="https://docs.google.com/forms/u/0/d/1xber54MSkvrpfRV51GGmk8or5u4mX6CVPsu6FOTIy8A">Registration form</a>
           
          <br />
          <br />
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Location:
            <br />
          </div>
          <br />
          Makati City
           <br />
          <br />
          <img src={logo} style={{ width: '70%', height: '390px' }} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
