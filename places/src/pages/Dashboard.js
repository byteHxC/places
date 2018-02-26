import React, { Component } from 'react';
import { FlatButton, FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';

import Container from '../components/Container';
import { data, getPlaces } from '../request/places';
import PlaceHorizontal from '../components/places/PlaceHorizontal';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            places: []
        };
        this.loadPlaces();
    }

    loadPlaces(){
        getPlaces().then(data => {
            console.log('=>', data)
            this.setState({
                places: data.docs
            })
        });
    }
    places(){
        return this.state.places.map((place, index) => (<PlaceHorizontal place={place} key={index}/>));
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

export default Dashboard;