import React from 'react';
import './Footer.css';
import LogoF from '../images/psLogo.svg';
import sonyLogoI from '../images/sonyInteractive.png';

function Footer() {
    return (
        <div className="divFooter">
            <container className="logoFo">
                <img src={LogoF} />
                <i className="fas fa-globe" />
                <p className="country">
                    Country / Region: Guatemala
                </p>
            </container>
            <container className="sonyInteractiveLogo">
                <img src={sonyLogoI} />
                <p className="sl">© 2021 Sony Interactive Entertainment LLC</p>
            </container>
            <container className="containerSoporte">
                <p className="itemsSoport">Soporte</p>
                <p className="itemsSoport">Política de privacidad</p>
                <p className="itemsSoport">Términos del servicio</p>
                <p className="itemsSoport">PlayStation Studios</p>
                <p className="itemsSoport">Legal</p>
                <p className="itemsSoport">Acerca de nosotros</p>
                <p className="itemsSoport">PlayStation® y el medioambiente</p>
            </container>
            <container className="containerServicios">
                <p className="itemsServicios">Términos de Servicio de PSN</p>
                <p className="itemsServicios">Política de cancelación de PS ™Store</p>
                <p className="itemsServicios">Advertencias sobre la salud</p>
                <p className="itemsServicios">Acerca de las clasificaciones</p>
                <p className="itemsServicios">Comunicados de prensa</p>
                <p className="itemsServicios">Oportunidades de Empleo</p>
                <p className="itemsServicios">PMapa de Sitio</p>
            </container>
            <container className="containerRedes">
                <p className="itemsRedes">Facebook</p>
                <p className="itemsRedes">Twitter</p>
                <p className="itemsRedes">Youtube</p>
                <p className="itemsRedes">Twitch</p>

            </container>


        </div>
    )
}

export default Footer
