import React, { Component } from 'react';
import { FlatButton } from 'material-ui';
import { Link } from 'react-router-dom';

class LoginButton extends Component {
    render() {
        return (
            <Link to="/login">
                <FlatButton label="Iniciar sesión" style={{ color: 'white', marginTop: '6px'}}/>
            </Link>
        );
    }
}

export default LoginButton;