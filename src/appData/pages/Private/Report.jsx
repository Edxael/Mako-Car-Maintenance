import React from 'react';

class Page extends React.Component {
  render() {
    const pSty = { textAlign: "left" }
    return(
      <div>
        <h1>My Cars Report</h1>
        <p style={pSty} >Here is a quick report of the maintenance in your cars.</p>
      </div>
    )
  }
}

export default Page;
