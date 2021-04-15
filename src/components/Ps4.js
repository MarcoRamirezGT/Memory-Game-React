import React from 'react';
import './Ps4.css';
import Play4 from '../images/play4.png';
import PlayVR from '../images/playVR.png';
import Ac from '../images/ac.png';


function Ps4() {
    return (
        <div className="divPs4">

            <p className="hPs4">Explora PlayStation®4</p>
            <p className="pPs4">Juegos increíbles, entretenimiento sin pausa. Nunca hubo un mejor momento para disfrutar PS4.</p>
            <container className="containerPs4">
                <div className="divPlay4">
                    <img src={Play4}></img>
                    <p className="titlePs4">
                        PlayStation 4
                    </p>
                    <p className="descriptionPs4">
                        Juegos increíbles disponibles en PS4, con almacenamiento de 1TB.
                    </p>
                    <button className="btnPs4">Más información</button>
                </div>
            </container>
            <container className="conteinerVR">
                <div className="divVR">
                    <img src={PlayVR}></img>
                    <p className="titleVR">
                        PlayStation vr
                    </p>
                    <p className="descrptionVR">
                        Más de 500 juegos y experiencias y contando. Míralos todos.
                    </p>
                    <button className="btnPs4">Más información</button>
                </div>

            </container>
            <container className="conteinerAcc">
                <div className="divAcc">
                    <img src={Ac}></img>
                    <p className="titleAc">
                        Accesorios
                    </p>
                    <p className="descrptionAC">
                        Potencia tu experiencia de PS4 con una amplia gama de accesorios oficiales.
                    </p>
                    <button className="btnPs4">Más información</button>
                </div>

            </container>


        </div>
    )
}

export default Ps4
