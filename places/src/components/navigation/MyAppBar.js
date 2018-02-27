import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import { indigo600 }from 'material-ui/styles/colors';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class MyAppBar extends Component {

    getName(){
        const { user } = this.props;
        if(user.name){
            return user.name;
        }
        if(user.email)
            return user.email.split("@")[0];
        return "";
    }
    title(){
        const { user } = this.props;

        return (
            <span style={{ cursor: 'pointer', textTransform: 'capitalize'}}>
                {user.jwt ? `Bienvenido ${this.getName()}` : 'Places'}
            </span>
        )
    }
    render() {
        const { user, logout } = this.props;
        return (
            <AppBar 
                title={this.title()}
                style={{backgroundColor: indigo600}}
                showMenuIconButton={false}
                onTitleClick={this.props.goHome}
                iconElementRight={ user.jwt ? <LogoutButton logout={logout}/> : <LoginButton/> }
            />
        );
    }
}

export default MyAppBar;