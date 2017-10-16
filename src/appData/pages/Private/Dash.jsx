import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



class Dash extends React.Component {
  render() {
    let brSty = { width: "80%" }
    let MainDiv = { textAlign: "center", backgroundColor: "gray", padding: "20px", height: "100vh" }
    let pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    let btn1 = { backgroundColor: "black", marginRight: "3px" }
    let bar1 = { width: "100%", marginTop: "15px", display: "flex", justifyContent: "center" }
    let div1 = { textAlign: "left" }

    return(
      <div>
        <h2>My Dash-Board</h2>

        <div style={div1}>
          <h4>My Cars</h4>
          <ul>
            <li>Edmundo's Car</li>
            <li>Alice's Car</li>
            <li>Dragon</li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Dash;
