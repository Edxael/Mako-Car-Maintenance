import React from 'react';
import Youtube from '../../comps/Youtube.jsx';

class Page extends React.Component {

  render() {
    const pSty = { textAlign: "left" }
    return(
      <div>
        <h1>Videos From Youtube</h1>
        <p style={pSty}>Here are videos</p>
        <Youtube />
      </div>
    )
  }
}

export default Page;
