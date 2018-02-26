import React, { Component } from 'react';

import { AppBar } from 'material-ui';
import { indigo600 }from 'material-ui/styles/colors';
class MyAppBar extends Component {
    render() {
        return (
            <AppBar 
                title="Places"
                style={{backgroundColor: indigo600, cursor: 'pointer'}}
                showMenuIconButton={false}
                onTitleClick={this.props.goHome}
            />
        );
    }
}

export default MyAppBar;