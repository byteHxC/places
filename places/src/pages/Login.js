import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { 
    Route,
    Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Title from '../components/Title';
import Container from '../components/Container';
import { login, signUp } from '../request/auth';

import * as userActions from '../actions/userActions';


const NameField = (props) => (
    <TextField
            floatingLabelText="Nombre"
            type="text"
            className="textfield"
            ref={props.nameRef}
        />
)

const LoginActions = (props) => (
    <div>
        <Link style={{marginRight: '1em'}} to="/signup">Crear nueva cuenta</Link>
        <RaisedButton onClick={props.requestAuth} label="Ingresar" secondary={true}/>
    </div>
);

const SignUpActions = (props) => (
    <div>
        <Link style={{marginRight: '1em'}} to="/login">Ya tengo cuenta</Link>
        <RaisedButton onClick={props.createAccount} label="Crear cuenta" secondary={true}/>
    </div>
)
class Login extends Component {

    constructor(props){
        super(props);
        // console.log(this.props.user);
        this.requestAuth = this.requestAuth.bind(this);
        this.createAccount = this.createAccount.bind(this);
        this.auth = this.auth.bind(this);
    }
    requestAuth(){
        const credentials = {
            email: this.refs.emailField.getValue(),
            password: this.refs.passwordField.getValue(),
        }

        login(credentials)
            .then(this.auth)
            .catch(console.log);

    }

    auth(data){
        this.props.dispatch(userActions.login(data.jwt));
        this.props.dispatch(userActions.loadUser(data.user));
        this.props.dispatch(push('/'));
    }
    createAccount(){
        const credentials = {
            email: this.refs.emailField.getValue(),
            password: this.refs.passwordField.getValue(),
            name: this.nameElement.getValue()
        }
        // console.log(credentials);
        
        signUp(credentials)
            .then(this.auth)
            .catch(console.log);
    }
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
                                ref="emailField"
                            />
                            <TextField
                                floatingLabelText="Contraseña"
                                type="password"
                                className="textfield"
                                ref="passwordField"
                            />
                            <Route path="/signup" exact render={() => <NameField nameRef={ el => this.nameElement = el } />}/>

                            <div className="Login-actions">
                                <Route path="/login" exact 
                                    render={() => <LoginActions requestAuth={this.requestAuth} />} />
                                <Route path="/signup" exact 
                                    render={() => <SignUpActions createAccount={this.createAccount}/>}/>
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
function mapStateToProps(state, ownProps){
    return {
        user: state.userReducer
    }
}
export default connect(mapStateToProps)(Login);