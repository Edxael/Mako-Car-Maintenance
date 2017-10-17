import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../pages/Public/Home.jsx';
import Auto from '../pages/Public/Auto.jsx';
import Codes from '../pages/Public/Codes.jsx';
import Videos from '../pages/Public/Videos.jsx';
import Login from '../pages/Public/LogIn.jsx';
import PCont from '../pages/Private/01-PCont.jsx';
import NotFound from '../pages/Public/PageNotFound.jsx';



class RoutingComp extends React.Component {
  render() {
    let brSty = { width: "80%" }
    let MainDiv = { textAlign: "center", backgroundColor: "gray", padding: "20px", height: "100vh" }
    let pageSty = { border: "2px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", width: "75%", margin: "0px auto", padding: "15px" }
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
                      <Link style={btn1} to="/1">Auto</Link>
                    </NavItem>
                    <NavItem>
                      <Link style={btn1} to="/2">Codes</Link>
                    </NavItem>
                    <NavItem>
                      <Link style={btn1} to="/3">Videos</Link>
                    </NavItem>
                    <NavItem>
                      <Link style={btn1} to="/4">My-Acc</Link>
                    </NavItem>
                  </Nav>
                </div>

                <hr style={ brSty } />

                <div style={pageSty}>
                  <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/1" component={Auto}/>
                    <Route path="/2" component={Codes}/>
                    <Route path="/3" component={Videos}/>
                    <Route path="/4" component={Login}/>
                    <Route path="/5" component={PCont}/>
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
