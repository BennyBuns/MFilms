import React, { Component } from 'react';
import ActingCredits from './ActingCreditsComponent'
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home
                
                />
            );
        };

        const actingCreditWithId = ({ match }) => {
            return (
                <ActingCredits actingCredit={this.props.actingCredits.filter(actingCredit => actingCredit.id === +match.params.actingCreditId)[0]} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory actingCredits={this.props.actingCredits} />} />
                    <Route exact path='/directory/:actingCreditId' component={actingCreditWithId} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;