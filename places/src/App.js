import React, { Component } from 'react';
import { MuiThemeProvider } from "material-ui";

import Home from './pages/Home';


import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <section>
          <Home />
        </section>
      </MuiThemeProvider>
    );
  }
}

export default App;
