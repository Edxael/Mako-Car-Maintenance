import React from 'react';
import ReactDOM from 'react-dom';
import Template from './appData/comps/Template.jsx';


class IndexJS extends React.Component {
  render() {
    return(
      <div>
        <div> -- Index.js --</div>
        <ul>
          <li><Template /></li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<IndexJS />, document.getElementById("root"));
