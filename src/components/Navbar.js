import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import ImageLoader from 'react-load-image';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener("resize", showButton);


    return (
        <>
            <nav className="navbar">
                <container className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <i className="fab fa-playstation" />
                    </Link>




                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/juegos" className="nav-links" onClick={closeMobileMenu}>
                                Juegos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hardware" className="nav-links" onClick={closeMobileMenu}>
                                Hardware
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/servicios" className="nav-links" onClick={closeMobileMenu}>
                                Servicios
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/noticias" className="nav-links" onClick={closeMobileMenu}>
                                Noticias
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/tienda" className="nav-links" onClick={closeMobileMenu}>
                                Tienda
                            </Link>


                        </li>
                        <li className="nav-item">
                            <Link to="/asistencia" className="nav-links" onClick={closeMobileMenu}>
                                Asistencia
                            </Link>

                        </li>
                        <li className="nav-item-pl">
                            <Link to="/MyPlaystation" className="nav-links-pl" onClick={closeMobileMenu}>
                                My<br /> Playstation
                            </Link>

                        </li>

                        <li className="nav-item-login">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Iniciar sesión
                            </Link>
                            <form>


                                <input type="text" name="search" placeholder="Buscar"  ></input>



                            </form>

                        </li>





                    </ul>
                    {button && <Button buttonStyle="btn--outline">Iniciar sesión</Button>}
                </container>

            </nav>
        </>
    );
}

export default Navbar;
