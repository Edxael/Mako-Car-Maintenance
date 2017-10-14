import React from 'react';
import RoutingComp from './Routing.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';


class Template extends React.Component {
  render() {
    return(
      <div>
        <div>Template.jsx</div>
        <ul>
          <li><Header /></li>
          <li><RoutingComp /></li>
          <li><Footer /></li>
        </ul>
      </div>
    )
  }
}

export default Template;
