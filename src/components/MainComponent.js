import React, { Component } from 'react';
import CampsiteInfo from './CampsiteInfoComponent'
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        actingCredits: state.actingCredits,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
}

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home
                    actingCredit={this.props.actingCredits.filter(actingCredit => actingCredit.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        };

        const CampsiteWithId = ({ match }) => {
            return (
                <CampsiteInfo campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                    <Route exact path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/about' render={() => <About partners={this.props.partners} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));