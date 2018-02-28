import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
class FadeAndScale extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <CSSTransition
                    classNames='fade-scale'
                    in={this.props.in}
                    timeout={700}
                    unmountOnExit={true}
                    >
                    {this.props.children}
                </CSSTransition>
            </div>
        );
    }
}

export default FadeAndScale;