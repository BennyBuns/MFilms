import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Credits from './CreditsComponent';
import FutureProjects from './FutureProjectsComponent';
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
                    <Route exact path='/home' component={HomePage} element={<Home />} />
                    <Route exact path='/contact' component={Contact} element={<Contact />} />
                    <Route exact path='/credits' component={Credits} element={<Credits />} />
                    <Route exact path='/futureProjects' component={FutureProjects} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;