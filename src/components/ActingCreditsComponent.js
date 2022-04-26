import React from 'react'
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderActingCredit({ actingCredit }) {
    return (<div className='col-md-5 m-1'>
        <Card>
            <CardImg top src={actingCredit.image} alt={actingCredit.title} />
            <CardBody>
                <CardText>{actingCredit.storyline}</CardText>
            </CardBody>
        </Card>
    </div>
    );
}

function Credits(props) {
    if (props.campsite) {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/directory'>Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.actingCredit.title}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.actingCredit.title}</h2>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <RenderActingCredit actingCredit={props.actingCredit} />
                </div>
            </div>
        )
    }
    return <div />;
}


export default Credits;