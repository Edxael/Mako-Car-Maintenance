import React from 'react';
import banner from '../img/bn1.jpg';


class Header extends React.Component {
  render() {
    const bCont = { padding: "10px", maxWidth: "75%", margin: "0px auto" }
    const banerSty = { margin: "0px auto", display: "block", width: "100%", height: "auto" }
    return(
      <div style={bCont} >
        <img style={banerSty} src={banner} />
      </div>
    )
  }
}

export default Header;
