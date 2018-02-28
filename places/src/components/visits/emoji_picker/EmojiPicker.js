import React, { Component } from 'react';
import Emoji from './Emoji';
import { emojis, relation} from './emojis';

class EmojiPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            emojis
        }
        this.emojiSelected = this.emojiSelected.bind(this);
    }

    buildEmojis(){
        return this.state.emojis.map(short_code => (<Emoji key={short_code} code={short_code} onClick={this.emojiSelected}/>))
    }

    emojiSelected(code){
        const reaction = relation[code];
        const emojisReorder = [code].concat(emojis.filter( el => el!= code))
        this.setState({
            emojis: emojisReorder
        })
        this.props.onSelect(reaction);
    }
    render() {
        return (
            <div>
                <ul className='Emoji-picker'>
                   {this.buildEmojis()}
                </ul>
            </div>
        );
    }
}

export default EmojiPicker;