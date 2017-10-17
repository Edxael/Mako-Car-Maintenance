import React from 'react';
import carPic from '../../img/cmb.jpg';

class Home extends React.Component {

  render() {
    const pSty = { textAlign: "left" }
    const picSty = { margin: "0px auto", display: "block", width: "100%", height: "auto" }
    return(
      <div>
        <h1>Mako Car Maintenace</h1>
        <img style={picSty} src={carPic} alt="Miss"/>
        <h3>Welcome to Mako Maintenance</h3>
        <p style={pSty} >This site is a tool that will help you to stay on top of your car maintenance.</p>
        <p style={pSty} >The best way to avoid expensive car repairs is to consistently do the car maintenance, in this site we will provide you with the checklist that will help you to know what you should check on your car, and to make your life easier we will send you a reminder email when is time to do some maintenance in your car.</p>
        <p style={pSty} >This is a free service, and we do not share or sell your information to anyone, so feel free to create your account and take care of the small things your care needs.</p>
      </div>
    )
  }
}

export default Home;
