import React, { Component } from 'react';
import { TextField, RaisedButton, FlatButton } from 'material-ui';
import Modal from 'react-modal';
import { yellow700 } from 'material-ui/styles/colors';
import Container from '../Container';
import Title from '../Title';
import EmojiPicker from './emoji_picker/EmojiPicker';


class VisitModal extends Component {
    
    constructor() {
        super();
        this.state = {
            open: false
        }

        this.closeModal = this.closeModal.bind(this);
        this.submit = this.submit.bind(this);
        this.emojiSelected = this.emojiSelected.bind(this);
    }

    openModal(){
        this.setState({
            open: true
        })
    }
    closeModal(){
        this.setState({
            open: false
        })
    }
    emojiSelected(reaction){
        this.setState({
            reaction
        })
    }
    submit(){
        const observation = this.refs.observationField.getValue();
        this.props.onSubmit(observation, this.state.reaction);
        // this.refs.observationField.setValue("");
        this.closeModal();
    }
    render() {
        const { place } = this.props;
        return (
            <div>
                <Modal 
                    ariaHideApp={false}
                    isOpen={this.state.open}>
                    <Container>
                        <div style={{textAlign: 'left', marginTop: '2em'}}>
                            <header>
                                <Title />
                                <h1>Cuéntamos de tu visita a <span style={{backgroundColor: yellow700, margin: '0.3em'}}>{place.title}</span></h1>
                            </header>
                            <div className="row">
                                <div className="col-xs-4 col-sm-2 col-lg-1">
                                    <EmojiPicker onSelect={this.emojiSelected}/>
                                </div>
                                <div className="col-xs">
                                    <TextField 
                                        floatingLabelText="Cuéntanos que te parecio este lugar"
                                        ref="observationField"
                                        multiLine={true}
                                        style={{width: '100%'}}
                                    />
                                    <div style={{marginTop: '1em'}}>
                                        <RaisedButton label='Guardar' secondary={true} onClick={this.submit}/>
                                        <FlatButton 
                                            onClick={this.closeModal}
                                            label='Cancelar' style={{marginLeft: '2em'}}
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Modal>
            </div>
        );
    }
}

export default VisitModal;