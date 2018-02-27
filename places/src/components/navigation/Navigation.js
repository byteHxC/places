import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import MyAppBar from './MyAppBar';
import { logout } from '../../actions/userActions';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.goHome = this.goHome.bind(this);
        this.logout = this.logout.bind(this);
    }
    goHome(){
        this.props.dispatch(push('/'));
    }
    logout(){
        this.props.dispatch(logout());
        this.props.dispatch(push('/'));
    }
    render() {
        const { user } = this.props;
        return (
            <MyAppBar goHome={this.goHome} user={user} logout={this.logout}/>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(Navigation);