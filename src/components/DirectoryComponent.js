import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({actingCredit, onClick}) {
    return (
        <Card onClick={() => onClick(actingCredit.id)}>
            <CardImg width="100%" src={actingCredit.image} alt={actingCredit.title} />
            <CardImgOverlay>
                <CardTitle>{actingCredit.title}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {

    const directory = props.actingCredits.map(campsite => {
        return (
            <div key={actingCredit.id} className="col-md-5 m-1">
                <RenderDirectoryItem actingCredit={actingCredit} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;