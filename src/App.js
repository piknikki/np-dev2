import React, { Component } from 'react';
import { NavLink, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import './App.css';
import About from "./pages/About";
import Interests from "./pages/Interests";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
// import Navigation from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {


    return (

        <Router>
          <Navbar color="inverse" light expand="md" toggleable="true" >
            <NavbarBrand href="/" className="logo ">
              <img id="App-logo" className="App-logo" src={process.env.PUBLIC_URL + '/images/applogo.png'} alt="donut logo" />
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>

                <NavItem>
                  <NavLink
                      to="/"
                      className="nav-link"
                      activeClassName="active"
                      isActive={ () => window.location.pathname === "/" || window.location.pathname === "/about" }
                  >
                    About
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                      to="/work"
                      className="nav-link"
                      activeClassName="active"
                      isActive={ () => window.location.pathname === "/work" }
                  >
                    Work
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                      to="/interests"
                      className="nav-link"
                      activeClassName="active"
                      isActive={ () => window.location.pathname === "/interests" }
                  >
                    Interests
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                      to="/blog"
                      className="nav-link"
                      activeClassName="active"
                      isActive={ () => window.location.pathname === "/blog" }
                  >
                    Blog
                  </NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>

          <Container>
            <Switch>
              <Route exact path="/interests" component={Interests} />
              <Route exact path="/blog" component={Blog} />
              <Route path="/work" component={Work} />
              <Route component={About} />
            </Switch>

          </Container>

          <Footer />
        </Router>
    );

  } // end of render
} // end of component

export default App;