import React, { Component } from 'react';
import { 
    Card, 
    CardText } from "material-ui";
import { redA400, lightBlueA400, amberA400 } from 'material-ui/styles/colors';

class Benefits extends Component {
    render() {
        return (
            <ul>
                <Card className="Header-Benefit">
                    <CardText> 
                    <div className="row">
                        <div className="Header-Benefit-image" style={{backgroundColor: redA400}}>
                        <img src={`${process.env.PUBLIC_URL}/images/heart.png`}/>
                        </div>
                        <div className="Header-Benefit-content">
                        <h3>Calificaciones con emociones</h3>
                        <p>Califica tus lugares con experiencias, no con números</p>
                        </div>
                    </div>
                    
                    </CardText>
                </Card>
                <Card className="Header-Benefit">
                    <CardText> 
                    <div className="row">
                        <div className="Header-Benefit-image" style={{backgroundColor: lightBlueA400}}>
                        <img src={`${process.env.PUBLIC_URL}/images/no-internet.png`}/>
                        </div>
                        <div className="Header-Benefit-content">
                        <h3>¿Sin internet? sin problemas</h3>
                        <p>Places funciona sin internet o en conexiones lentas</p>
                        </div>
                    </div>
                    </CardText>
                </Card>
                <Card className="Header-Benefit">
                    <CardText> 
                    <div className="row">
                        <div className="Header-Benefit-image" style={{backgroundColor: amberA400}}>
                        <img src={`${process.env.PUBLIC_URL}/images/star.png`}/>
                        </div>
                        <div className="Header-Benefit-content">
                        <h3>Tus lugares favoritos</h3>
                        <p>Define tu lista de sitios favoritos</p>
                        </div>
                    </div>
                    </CardText>
                </Card>
            </ul>
        );
    }
}

export default Benefits;