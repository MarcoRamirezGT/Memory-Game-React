import React from 'react';
import AddOn from '../images/addOn.png';
import './Stotre.css';
import Descuentos from '../images/descuentos.png';
import Free from '../images/free.png';
function Store() {
    return (
        <container className="containerStore">
            <div className="dataStore">
                <p className="titleStore">Nuevos ahorros en PlayStation Store</p>
                <p className="subjectStore">Grandes descuentos, colecciones cuidadas y baratas de temporada en éxitos de PS5, PS4 y PS VR, todo en el mismo lugar.</p>
            </div>
            <div className="addOns">
                <img src={AddOn}></img>

            </div>
            <div className="divDescuentos">
                <img src={Descuentos}></img>
            </div>
            <div className="divFree">
                <img src={Free}></img>
            </div>

        </container>
    )
}

export default Store
