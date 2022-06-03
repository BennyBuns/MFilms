import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';



class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div>

                <div className="row row-content align-items-center">
                    <div className="col">
                        <a role="button" className="btn btn-link" href="tel:+16478330256"><i className="fa fa-phone" /> 1-647-833-0256</a><br />
                        <a role="button" className="btn btn-link" href="mailto:13matmor@gmail.com"><i className="fa fa-envelope-o" /> 13matmor@gmail.com</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;