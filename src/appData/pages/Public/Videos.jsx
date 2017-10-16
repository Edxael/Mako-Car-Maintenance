import React from 'react';

class Page extends React.Component {
  render() {
    const pSty = { textAlign: "left" }
    return(
      <div>
        <h1>Videos</h1>
        <h3 style={pSty} >Basic Automotive Maintenance (Part 1).</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nFtbf4prm78" frameborder="0" allowfullscreen></iframe>
        <br/><br/>

        <h3 style={pSty} >Basic Automotive Maintenance (Part 2).</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QxIUekEy3Q8" frameborder="0" allowfullscreen></iframe>
    </div>
    )
  }
}

export default Page;
