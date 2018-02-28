import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton, TextField, Card } from 'material-ui';
import { push } from 'react-router-redux';


import * as request from '../../request/places';

import Uploader from '../../components/uploader/Uploader';
import Title from '../../components/Title';
import Container from '../../components/Container';

class NewPlace extends Component {

    constructor(props){
        super(props);

        this.state = {
            uploading: false
        }
        this.createPlace = this.createPlace.bind(this);
        this.getFile = this.getFile.bind(this);
    }
    getFile(type, file){
        let state = {}
        state[type] = file;
        this.setState(state);
    }
    createPlace(){
        const { user } = this.props;
        const data = {
            title: this.refs.titleField.getValue(),
            address: this.refs.addressField.getValue(),
            description: this.refs.descriptionField.getValue(),

        }
        if(data['title'] == '' || data['address'] == '' || data['description'] == ''){
            alert('Toda la información debe ser llenada');
            return '';
        }
        if(this.state.avatar) data.avatar = this.state.avatar;
        if(this.state.cover ) data.cover  = this.state.cover;
        this.setState({ uploading: true });
        
        request.createPlace(data, user.jwt)
            .then(data => {
                this.setState({ uploading: false });
                this.props.dispatch(push(`/lugares/${data.slug}`))
            })
            .catch(console.log)
        
    }
    render() {
        return (
            <div>
                <Container>
                    <Card style={{textAlign: 'left', padding: '20px'}}>
                        <header style={{borderBottom: 'solid 2px #eee'}}>
                            <Title/>
                        </header>
                        <div>
                            <TextField
                                floatingLabelText="Nombre del negocio"
                                ref="titleField"
                                style={{ width: '100%'}}
                            />
                            <TextField
                                floatingLabelText="Dirección del negocio"
                                ref="addressField"
                                style={{ width: '100%'}}
                            />
                            <TextField
                                floatingLabelText="Descripción del negocio"
                                ref="descriptionField"
                                multiLine={true}
                                style={{ width: '100%'}}
                            />
                            <div style={{marginTop: '1em'}}>
                                <Uploader label="Subir avatar" type="avatar" getFile={this.getFile}/>
                            </div>
                            <div style={{marginTop: '1em'}}>
                                <Uploader label="Subir cover" type="cover" getFile={this.getFile}/>
                            </div>
                            <div style={{textAlign: 'right', marginTop: '1em'}}>
                                <RaisedButton label="Guardar"
                                    disabled={this.state.uploading}
                                    onClick={this.createPlace}
                                    secondary={true}/>
                            </div>

                        </div>
                    </Card>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer
    };
}
export default connect(mapStateToProps)(NewPlace);