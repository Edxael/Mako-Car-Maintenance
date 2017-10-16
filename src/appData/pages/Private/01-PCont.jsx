import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import DashB from './Dash.jsx';
import Check from './Check.jsx';
import AddCar from './NewCar.jsx';
import Report from './Report.jsx';


class PCont extends React.Component {
  render() {
    let brSty = { width: "80%" }
    let MainDiv = { textAlign: "center", backgroundColor: "gray", padding: "20px", height: "100vh" }
    let pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
    let btn1 = { backgroundColor: "black", marginRight: "3px" }
    let bar1 ={ width: "100%", marginTop: "15px", display: "flex", justifyContent: "center" }

    return(
      <div>
        <div>My Account.</div>

        <Router>

          <div>
            <div>
              <Nav style={bar1}>
                <NavItem>
                  <Link style={btn1} to="/5/">MyDash</Link>
                </NavItem>
                <NavItem>
                  <Link style={btn1} to="/5/7">Check-List</Link>
                </NavItem>
                <NavItem>
                  <Link style={btn1} to="/5/8">Add-Car</Link>
                </NavItem>
                <NavItem>
                  <Link style={btn1} to="/5/9">Report</Link>
                </NavItem>
              </Nav>
            </div>

            <hr style={ brSty } />

            <div style={pageSty}>
              <Switch>
                <Route exact path="/5/" component={DashB}/>
                <Route exact path="/5/7" component={Check}/>
                <Route exact path="/5/8" component={AddCar}/>
                <Route exact path="/5/9" component={Report}/>
              </Switch>
            </div>


          </div>
        </Router>
      </div>
    )
  }
}

export default PCont;
