import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FUTUREPROJECTS } from '../shared/FutureProductions'





function FutureProjects(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Future Projects</h3>
                    <p>blah blah blah</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2016</dd>
                                <dt className="col-6">No. of Campsites in 2019</dt>
                                <dd className="col-6">563</dd>
                                <dt className="col-6">No. of Reviews in 2019</dt>
                                <dd className="col-6">4388</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">42</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
                                <footer className="blockquote-footer">Muriel Strode,{' '}
                                    <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                                        The Open Court, 1903</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Future Projects</h3>
                </div>
                <FutureProjectsList futureProjects={props.futureProjects} />
            </div>
        </div>
    );
}
function RenderFutureProjects({ futureProject }) {
    if (futureProject) {
        return (
            <React.Fragment>
                <Media object src={futureProject.image} alt={futureProject.title} width='150' />
                <Media body className='ml-5 mb-4'>
                    <Media heading>{futureProject.title}
                    </Media>
                    {futureProject.description}
                </Media>
            </React.Fragment>
        );
    }
    return <div/>
}

function FutureProjectsList(props) {

    const futureProjects = props.futureProjects.map((futureProject) => {
        return (
                <Media>
                    <RenderFutureProjects futureProject={props.futureProject} />
                </Media>
        )
    });

    return (
    <div className='col mt-4'>
        <Media list>
        {futureProjects}
        </Media>
    </div>
    )
}

export default FutureProjects;