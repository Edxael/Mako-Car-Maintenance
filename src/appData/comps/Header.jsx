import React from 'react';

class Header extends React.Component {
  render() {
    const bCont = { padding: "10px" }
    const banerSty = { margin: "0px auto", display: "block" }
    return(
      <div style={bCont} >
        <img style={banerSty} src={"http://placehold.it/950x150"} alt="Miss Pic"/>
      </div>
    )
  }
}

export default Header;
