import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            //keeps track of nav collapse
            isNavOpen: false,
            //keeps track of if Modal is open
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>M Films</h1>
                                <h2>Original and compelling</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="M Films Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/credits">
                                        <i className="fa fa-address-card fa-lg" /> Credits
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    };
}


export default Header;