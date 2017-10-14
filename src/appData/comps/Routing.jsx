import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../pages/Home.jsx';
import DashB from '../pages/DashBoard.jsx';
import Week from '../pages/WeekMaint.jsx';
import ThreeM from '../pages/ThreeMonthMaint.jsx';
import NotFound from '../pages/PageNotFound.jsx';



class RoutingComp extends React.Component {
  render() {
    let brSty = { width: "80%" }
    let MainDiv = { textAlign: "center", backgroundColor: "gray", padding: "20px", height: "100vh" }
    let pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", height: "100vh", margin: "0px auto", padding: "15px" }
    let btn1 = { backgroundColor: "black", marginRight: "3px" }
    let bar1 ={ width: "100%", marginTop: "15px", display: "flex", justifyContent: "center" }
    return(
      <div>


            <Router>

              <div>
                <div>
                  <Nav style={bar1}>
                    <NavItem>
                      <Link style={btn1} to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                      <Link style={btn1} to="/1">DashB</Link>
                    </NavItem>
                    <NavItem>
                      <Link style={btn1} to="/2">Week</Link>
                    </NavItem>
                    <NavItem>
                      <Link style={btn1} to="/3">3 Month</Link>
                    </NavItem>
                    <NavItem>
                      <Link style={btn1} to="/br">Page 4</Link>
                    </NavItem>
                  </Nav>
                </div>

                <hr style={ brSty } />

                <div style={pageSty}>
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/1" component={DashB}/>
                    <Route path="/2" component={Week}/>
                    <Route path="/3" component={ThreeM}/>
                    <Route component={NotFound}/>
                  </Switch>
                </div>


              </div>
            </Router>


      </div>
    )
  }
}

export default RoutingComp;
