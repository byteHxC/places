import React, { Component } from 'react';
import { RaisedButton } from "material-ui";
import { indigo400 } from 'material-ui/styles/colors';
import { TransitionGroup } from 'react-transition-group';

import data from '../request/places';

import Title from '../components/Title';
import PlaceCard from '../components/places/PlaceCard';
import Benefits from '../components/Benefits';
import Container from '../components/Container';

class Home extends Component {
    
    constructor(){
        super();
        this.state = {
            places: data.places
        }
        // setTimeout(() => this.setState({ places: data.places}), 2000);
        this.hidePlace = this.hidePlace.bind(this);
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
                        <RaisedButton label="Crear cuenta gratuita" secondary={true} />
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

export default Home;