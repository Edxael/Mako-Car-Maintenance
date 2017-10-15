import React from 'react';
import RoutingComp from './Routing.jsx';
import Header from './Header.jsx';
import Footer1 from './Footer.jsx';


class Template extends React.Component {
  render() {
    const mainSty = { backgroundColor: "rgb(128, 180, 255)", height: "50%", margin: "0", paddingTop: "10px" }
    const wrapper = { height: "20%" }
    return(
      <div style={mainSty}>

        <Header />

        <div style={wrapper}>
          <RoutingComp />
        </div>

        <Footer1 />

      </div>
    )
  }
}

export default Template;
