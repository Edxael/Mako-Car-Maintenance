import React from 'react';

class Page extends React.Component {
  render() {
    const pSty = { textAlign: "left" }
    const videoWraper = { }
    const vidSty = { }
    return(
      <div>
        <h1>Videos</h1>
        <h3 style={pSty} >Basic Automotive Maintenance (Part 1).</h3>
        <div style={ videoWraper }>
          <iframe style={vidSty} src="https://www.youtube.com/embed/nFtbf4prm78" frameborder="0" allowfullscreen></iframe>
        </div>
        <br/><br/>

        <h3 style={pSty} >Basic Automotive Maintenance (Part 2).</h3>
        <iframe style={vidSty} src="https://www.youtube.com/embed/QxIUekEy3Q8" frameborder="0" allowfullscreen></iframe>
    </div>
    )
  }
}

export default Page;
