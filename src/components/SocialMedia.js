import React from 'react';
import './SocilaMedia.css';
import Twitter from '../images/twitter.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Youtube from '../images/youtube.png';
function SocialMedia() {
    return (
        <div className="Media">
            <p className="follow">
                Síguenes en redes sociales
            </p>
            <container className="containerSocialMedia">
                <div className="divTwitter">
                    <img src={Twitter} />
                </div>
                <div className="divFacebook">
                    <img src={Facebook} />
                </div>
                <div className="divInstagram">
                    <img src={Instagram} />
                </div>
                <div className="divYoutube">
                    <img src={Youtube} />
                </div>
            </container>
        </div>
    )
}

export default SocialMedia;
