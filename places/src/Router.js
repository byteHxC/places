import React, { Component } from 'react';
import {
  BrowserRouter as ReactRouter,
  Route,
  Switch
} from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Place from './pages/Place';

const userSignedIn = false;

class Router extends Component {

    signedInRoutes(){
        if(userSignedIn){
            return (
                <Route path="/new" render={() => <h1>Bienvenido</h1>}/>
            );
        }
    }
    home(){
        if(userSignedIn) return Dashboard;
        return Home;
    }

    render() {
        return (
            <ReactRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={this.home()}> </Route>
                        <Route path="/lugares/:slug" component={Place}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Login}/>
                        {this.signedInRoutes()}
                    </Switch>
                </App>
            </ReactRouter>
        );
    }
}
export default Router;