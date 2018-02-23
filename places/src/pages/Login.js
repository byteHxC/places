import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { 
    Route,
    Link } from 'react-router-dom';

import Title from '../components/Title';
import Container from '../components/Container';


class Login extends Component {
    render() {
        return (
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <Container>
                        <div style={{ textAlign: 'left'}}>
                            <Title />
                            <TextField
                                floatingLabelText="Correo electronico"
                                type="email"
                                className="textfield"
                            />
                            <TextField
                                floatingLabelText="Contraseña"
                                type="password"
                                className="textfield"
                            />
                            <div className="Login-actions">
                                <Route path="/login" exact render={() => 
                                    (
                                        <div>
                                            <Link style={{marginRight: '1em'}} to="/signup">Crear nueva cuenta</Link>
                                            <RaisedButton label="Ingresar" secondary={true}/>
                                        </div>
                                    )
                                }/>
                                <Route path="/signup" exact render={() =>
                                    (
                                        <div>
                                            <Link style={{marginRight: '1em'}} to="/login">Ya tengo cuenta</Link>
                                            <RaisedButton label="Crear cuenta" secondary={true}/>
                                        </div>
                                    )
                                }/>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <div className="Login-background" style={{backgroundImage: `url(${process.env.PUBLIC_URL}images/background-login.jpg)`}}>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;