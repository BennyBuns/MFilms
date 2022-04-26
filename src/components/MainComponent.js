import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">M Films</NavbarBrand>
                    </div>
                </Navbar>
                
            </div>
        )
    }
}

export default Main;