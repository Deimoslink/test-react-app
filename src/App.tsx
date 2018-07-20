import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import TracksTable from './components/TracksTable';
import Home from './components/Home';
import {LinkContainer, IndexLinkContainer} from "react-router-bootstrap";


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
            <div>
                <header>
                    <Navbar>
                        <Nav>
                            <IndexLinkContainer to="/">
                                <NavItem>Home</NavItem>
                            </IndexLinkContainer>
                            <LinkContainer to="/table">
                                <NavItem>Table</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar>
                </header>
                <div className="container">
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/table" component={TracksTable} />
                </div>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
