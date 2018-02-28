import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Visit from './Visit';
import FadeAndScale from '../animations/FadeAndScale';

class VisitsCollection extends Component {
    visits(){
        if(this.props.visits.length < 1) 
            return '';
        else
            return this.props.visits.map((visit, index) => <Visit key={index} visit={visit} />);
    }
    render() {
        return (
            <div>
                <TransitionGroup>
                    {this.visits()}
                </TransitionGroup>
            </div>
        );
    }
}

export default VisitsCollection;