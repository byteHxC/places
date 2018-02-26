import React, { Component } from 'react';
import {  
    Card, 
    CardText,
    CardMedia,
    CardTitle,
    CardActions, 
    FlatButton } from "material-ui";
import { CSSTransition } from 'react-transition-group';

class PlaceCard extends Component {

    render() {
        const { place } = this.props;
        return (
            <CSSTransition
                classNames="fade-scale"
                timeout={300}
                in={this.props.in}>
                <div className="col-xs-12 col-sm-4" style={{padding: '1em'}}>
                <Card >
                    <CardMedia>
                    <img src={`${process.env.PUBLIC_URL}${place.imageUrl}`} alt=""/>
                    </CardMedia>
                    <CardTitle title={place.title}/>
                    <CardText>{place.description}</CardText>
                    <CardActions style={{ textAlign: 'right'}}>
                        <FlatButton secondary={true} label="Ver mas"/>
                        <FlatButton onClick={() => this.props.onRemove(place)} secondary={true} label="Ocultar"/>
                    </CardActions>
                </Card>
                </div>
            </CSSTransition>
        );
    }
}

export default PlaceCard;