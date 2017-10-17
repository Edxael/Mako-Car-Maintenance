import React from 'react';
import ReactDOM from 'react-dom';
import Template from './appData/comps/Template.jsx';


class IndexJS extends React.Component {
  render() {
    const mainSty = { backgroundColor: "rgb(128, 180, 255)", height: "100vh" }
    return(
      <div style={mainSty} >
        <Template />
      </div>
    )
  }
}

ReactDOM.render(<IndexJS />, document.getElementById("root"));
