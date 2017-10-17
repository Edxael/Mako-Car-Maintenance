import React from 'react';
import RoutingComp from './Routing.jsx';
import Header from './Header.jsx';
import Footer1 from './Footer.jsx';


class Template extends React.Component {
  render() {
    const mainSty = {  backgroundColor: "rgb(128, 180, 255)", margin: "0", padding: "5px 0px 10px 0px", textAlign: "center" }

    return(
      <div style={mainSty}>

        <Header />

        <div>
          <RoutingComp />
        </div>

        <Footer1 />

      </div>
    )
  }
}

export default Template;
