import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardActions, FlatButton } from 'material-ui';
import { Link } from 'react-router-dom';

class PlaceHorizontal extends Component {
    render() {
        const { place } = this.props;
        return (
            <Card style={{marginTop: '1em', overflow: 'hidden'}}>
                <div className="row">
                    <div className="PlaceH-avatar">
                        <img src={place.avatarImage}/>
                    </div>
                    <div className="col-xs" style={{ textAlign: 'left'}}>
                        <CardHeader
                            title={place.title}
                            subtitle={place.address}
                        />
                        <div className="row middle-xs">
                            <div className="col-xs-6 col-sm-8 col-lg-9">
                                <CardText>{place.description}</CardText>
                            </div>
                            <div className="col-xs">
                                <CardActions>
                                    <Link to={`/lugares/${place.slug}`}>
                                        <FlatButton label="Ver más"/>
                                    </Link>
                                </CardActions>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default PlaceHorizontal;