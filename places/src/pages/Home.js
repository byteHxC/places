import React, { Component } from 'react';
import { RaisedButton } from "material-ui";
import { indigo400 } from 'material-ui/styles/colors';
import { TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Title from '../components/Title';
import PlaceCard from '../components/places/PlaceCard';
import Benefits from '../components/Benefits';
import Container from '../components/Container';

import {  getPlaces } from '../request/places';
import data from '../request/places';


class Home extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            places: data.places
        }
        console.log(this.props.places);
        this.hidePlace = this.hidePlace.bind(this);
    }
    loadPlaces(){
        getPlaces().then(data => {
            const places = data.docs;


            this.setState({
                places: data.docs
            })
        });
    }
    places(){
        return this.state.places.map((place, index) => {
          return (
            <PlaceCard place={place} onRemove={this.hidePlace} key={index}/>
          )
        })
    }
    hidePlace(place){
        this.setState({
            places: this.state.places.filter(el => el !== place)
        })
    }
    render() {
        return (
            <section>
                <div className="Header-background">
                    <Container>
                    <div className="Header-main">
                        <Title />
                        <Link to="signup">
                            <RaisedButton label="Crear cuenta gratuita" secondary={true} />
                        </Link>
                        <img className="Header-illustration" src={`${process.env.PUBLIC_URL}/images/places-api.png`} height="400"/>
                    </div>
                        <Benefits/>
                    </Container>
                            
                </div>
                <div style={{backgroundColor: indigo400, padding: '50px', color: 'white'}}>
                        <h3 style={{ fontSize: '24px '}}>Sitios Populares</h3>
                        <TransitionGroup className="row">
                            {this.places()}
                        </TransitionGroup>
                </div> 
            </section> 
        );
    }
}
function mapStateToProps(state, ownProps){
    return {
        places: state.placesReducer
    }
}
export default connect(mapStateToProps)(Home);