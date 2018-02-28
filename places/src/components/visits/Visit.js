import React, { Component } from 'react';
import { Card, CardText, CardHeader, CardTitle, CardActions } from 'material-ui';
import FadeAndScale from '../animations/FadeAndScale';
import { relationInverse } from './emoji_picker/emojis';
import Emoji from './emoji_picker/Emoji';
class Visit extends Component {

    getShortCode(){
        if(!this.props.visit.reaction) return relationInverse['love'];
        return relationInverse[this.props.visit.reaction];
    }
    render() {
        const { visit } = this.props;
        return (
            <FadeAndScale in={this.props.in}>
                <div>
                    <Card style={{ textAlign: 'left', marginTop: '1em'}}>
                        <div className="row middle-xs">
                            <div className="col-xs">
                                <CardHeader 
                                    avatar="https://cdn.dribbble.com/users/373338/screenshots/2558656/batman_avatar_dribbbb.png"
                                    title="Uriel" subtitle={visit.observation}></CardHeader>
                            </div>
                            <div className="col-xs-2 col-sm-1">
                                <Emoji code={this.getShortCode()}/>
                            </div>
                        </div>
                    </Card>
                </div>
            </FadeAndScale>
        );
    }
}

export default Visit;