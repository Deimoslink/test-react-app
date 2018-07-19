import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Table from './components/Table';
import Home from './components/Home';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
            <div>
                <header>
                    <Navbar>
                        <Nav>
                            <NavItem>
                                <Link to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/table">Table</Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </header>
                <div className="container">
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/table" component={Table} />
                </div>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
