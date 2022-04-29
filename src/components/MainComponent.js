import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Credits from './CreditsComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={HomePage} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/credits' component={Credits} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;