import React, { Component } from 'react';
import { MuiThemeProvider } from "material-ui";


import './App.css';
import MyAppBar from './components/navigation/MyAppBar';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <MyAppBar/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
