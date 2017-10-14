import React from 'react';
import RoutingComp from './Routing.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';


class Template extends React.Component {
  render() {
    const mainSty = { backgroundColor: "gray", height: "100vh", margin: "0" }
    const wrapper = { height: "100%" }
    return(
      <div style={mainSty}>

        <Header />

        <div style={wrapper}>
          <RoutingComp />
        </div>

        <Footer />

      </div>
    )
  }
}

export default Template;
