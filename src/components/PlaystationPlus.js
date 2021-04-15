import React from 'react';
import './PlaystationPlus.css';
import Plus from '../images/plus.png';
import PlusLogo from '../images/plusLogo.png';

function PlaystationPlus() {
    return (
        <container className="backgroundPLUS">
            <container className="img_1">
                <img src={Plus}></img>
            </container>
            <container className="img2">
                <img src={PlusLogo}></img>
                <p className="pPlus">
                    Mejora tu experiencia en PlayStation  con acceso a multijugador online, juegos mensuales, descuentos exclusivos y mucho más.
                </p>
                <button className="btnPlus">Explora PlayStation Plus</button>
            </container>

        </container>
    )
}

export default PlaystationPlus
