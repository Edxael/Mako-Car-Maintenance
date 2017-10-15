import React from 'react';
import Logo1 from '../img/git3.png';
import Logo2 from '../img/pf1.png';

class Footer extends React.Component {
  render() {
    const bottom1 = { height: "55px", margin: "0px auto", display: "flex", flexDirection: "row", justifyContent: "center", border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "15px auto", padding: "1px" }
    const name = { margin: "4px 5px 0px 10px", fontSize: "27px" }
    const icon = { width: "35px", height: "35px", margin: "7px 2px 7px 2px" }
    return(
      <div>
        <div style={bottom1}>
            <div style={name}> <p>by: Edmundo Rubio</p> </div>
            <div><a href="https://github.com/Edxael" target="blank"> <img style={icon} src={Logo1} alt="??" /></a></div>
            <div><a href="http://www.mycode.website/" target="blank"> <img style={icon} src={Logo2} alt="??" /></a></div>
        </div>
      </div>
    )
  }
}

export default Footer;
