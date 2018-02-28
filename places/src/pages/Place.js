import React, { Component } from 'react';
import { Card, FlatButton, FloatingActionButton } from 'material-ui';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { yellow700 } from 'material-ui/styles/colors';
import Star from 'material-ui/svg-icons/toggle/star';

import Container from '../components/Container';
import { getPlace } from '../request/places';
import VisitForm from '../components/visits/VisitForm';
import * as visitsActions from '../actions/visitsAction';
import VisitsCollection from '../components/visits/VisitsCollection';


class Place extends Component {
    constructor(props){
        super(props);
        const slug = this.props.match.params.slug;
        
        this.loadPlace(slug);
        this.state = {
            place: {}
        }

    }

    loadPlace(slug){
        this.props.dispatch(visitsActions.loadAllForPlace(slug));

        getPlace(slug)
            .then(json => {
                // console.log(json);
                this.setState({
                    place: json
                })
            })
    }
    favBtn(){
       return (<FloatingActionButton className='Fav-btn' backgroundColor={yellow700}>
                    <Star />
                </FloatingActionButton>)
    }
    render() {
        const { place } = this.state;
        const { visits } = this.props;
        return (
            <div className="Place-container" style={{marginBottom: '4em'} }>
                <header 
                    className="Place-cover"
                    style={{backgroundImage: `url(${place.coverImage})`}}>
                </header>
                <Container>
                    <div className="row">
                        <div className="col-xs-12 col-md-8">
                            <Card className="Place-card">
                                {this.favBtn()}
                                <div className="row">
                                    <div className="col-xs-12 col-sm-3 col-lg-2">
                                        <img src={place.avatarImage} style={{maxWidth: '100%'}} alt=""/>
                                    </div>
                                    <div className="col-xs">
                                        <h1>{place.title}</h1>
                                        <address>{place.address}</address>
                                        <p>{place.description}</p>
                                    </div>
                                </div>
                                <div style={{marginTop: '1em'}}>
                                    <VisitForm place={place}/>
                                </div>
                            </Card>
                        </div>
                        <div className="col-xs">
                            <VisitsCollection visits={visits}/>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps){
    return {
        visits: state.visitsReducer
    }
}
export default connect(mapStateToProps)(withRouter(Place));