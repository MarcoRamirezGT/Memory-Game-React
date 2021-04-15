import React from 'react';
import Sony from '../images/sony.png';
import './HeaderSony.css';

function HeaderSony() {
    return (
        <container className="divSony">
            <container className="img">
                <img src={Sony} alt="sonyLogo" />
            </container>

        </container>
    );
}

export default HeaderSony;
