import React from 'react';
import './VideoComponent.css';
import VideoPlay from '../images/playVideo.mp4';
import Indies from '../images/indies.png';

function VideoComponent() {
    return (
        <div className="divVideo">
            <video autoPlay loop muted>
                <source src={VideoPlay} type="video/mp4"></source>
            </video>
            <div className="imageFront">
                <img src={Indies} alt="mando" />
                <h3 className="titleFront">
                    Nuevos y audaces estrenos hechos a sí<br /> mismos
                </h3>
                <p className="subjectFront">
                    PlayStation Indies tiene algo para cada persona, con juegos excelentes de desarrolladores independientes<br /> que llegan a PS5, PS4 y PS VR.
                </p>
                <button className="btnFront">Explora nuevos indies</button>
            </div>


        </div>

    )
}

export default VideoComponent;
