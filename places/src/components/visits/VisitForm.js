import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatButton } from 'material-ui';
import VisitModal from './VisitModal';
import * as actions from '../../actions/visitsAction';


class VisitForm extends Component {
    constructor(){
        super();

        this.openVisitsModal = this.openVisitsModal.bind(this);
        this.add = this.add.bind(this);
    }
    add(observation, reaction="love"){
        this.props.dispatch(actions.addVisit(this.props.place, observation, reaction))
    }
    openVisitsModal(){
        this.refs.modalRef.openModal();
    }
    render() {
        const { place } = this.props;
        return (
            <div>
                <VisitModal ref='modalRef' place={place} onSubmit={this.add}/>
                <FlatButton 
                    onClick={this.openVisitsModal}
                    label="Registrar una visita" secondary={true}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}
export default connect(
    mapStateToProps,
)(VisitForm);