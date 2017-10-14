import React from 'react';
import ReactDOM from 'react-dom';
import Template from './appData/comps/Template.jsx';


class IndexJS extends React.Component {
  render() {
    return(
      <div>
        <Template />
      </div>
    )
  }
}

ReactDOM.render(<IndexJS />, document.getElementById("root"));
