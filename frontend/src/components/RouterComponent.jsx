import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './LoginComponent';
import HeaderComponent from './HeaderComponent';
import HomeComponent from './HomeComponent';
import Register from'./RegisterComponent';
import CollectionComponent from'./CollectionComponent';

class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Router>
                    <HeaderComponent />
                        <Switch>
                            <Route exact path="/"><HomeComponent /></Route>
                            <Route path="/Login"><Login /></Route>
                            <Route path="/Register"><Register /></Route>
                            <Route path="/Collection"><CollectionComponent /></Route>
                            </Switch>
                </Router>
            </div>
        )
    }
}

export default RouterComponent