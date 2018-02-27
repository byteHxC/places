import React, { Component } from 'react';
import { MuiThemeProvider } from "material-ui";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';


class App extends Component {

  constructor(){
    super();

    this.goHome = this.goHome.bind(this);
  }
  goHome(){
    this.props.history.push('/');
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navigation />
          <TransitionGroup>
            <CSSTransition classNames="left-out" timeout={300} key={this.props.location.pathname.split('/')[0]}>
              {this.props.children}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
