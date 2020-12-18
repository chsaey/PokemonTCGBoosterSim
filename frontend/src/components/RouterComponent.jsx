import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './LoginComponent';
import HeaderComponent from './HeaderComponent';
import HomeComponent from './HomeComponent';
import Register from'./RegisterComponent';
import CollectionComponent from'./CollectionComponent';
import PackComponent from'./PackComponent';

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
                            <Route path="/Collection" component={CollectionComponent}/>
                            <Route path="/BoosterPack"component={PackComponent}/>
                            </Switch>
                </Router>
            </div>
        )
    }
}

export default RouterComponent