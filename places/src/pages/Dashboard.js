import React, { Component } from 'react';
import { FlatButton, FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from '../components/Container';
import PlaceHorizontal from '../components/places/PlaceHorizontal';

import { getPlaces } from '../request/places';
import * as placesActions from '../actions/placesActions';


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.loadPlaces();
    }

    loadPlaces(){
        this.props.dispatch(placesActions.loadAll());
    }
    places(){
        return this.props.places.map((place, index) => (<PlaceHorizontal place={place} key={index}/>));
    }
    render() {
        return (
            <div>
                <Container>
                    <Link to="new"> 
                        <FloatingActionButton 
                            className="FAB"
                            secondary={true}>
                            <ContentAdd/>
                        </FloatingActionButton>
                    </Link>
                    <div className="row">
                        <div className="col-xs-12 col-md-2" style={{ textAlign: 'left'}}>
                            <FlatButton
                                label="Explorar"/>
                            <FlatButton
                                label="Favorito"/>
                            <FlatButton
                                label="Visitas"/>
                        </div>
                        <div className="col-xs-12 col-md-10">
                            {this.places()}
                        </div>

                    </div>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        places: state.placesReducer
    }
}
export default connect(mapStateToProps)(Dashboard);