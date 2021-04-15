import React, { Component } from 'react';
import Ps5ConsoleImage from '../images/ps5Console.png';
import Ps5Mando from '../images/mando.png';
import HeadphonesPs5 from '../images/HeadphonesPs5.png';
import ControlPs5 from '../images/control.png';
import CameraPs5 from '../images/camera.png';
import { useTransition, animated } from 'react-spring';
import { Animated } from "react-animated-css";
import { motion } from "framer-motion";


import './Ps5Consolo.css';

class Ps5Console extends React.Component {
    state = {
        divConsole: true,
        divMando: false,
        divHeadphones: false,
        divControl: false,
        divCamera: false,



    }
    render() {
        var HandleChange = e => {




            this.setState({ divMando: true });
            this.setState({ divConsole: false });
            this.setState({ divHeadphones: false });
            this.setState({ divControl: false });
            this.setState({ divCamera: false });



        }
        var HandleChangeConsolo = e => {

            this.setState({ divMando: false });
            this.setState({ divConsole: true });
            this.setState({ divHeadphones: false });
            this.setState({ divControl: false });
            this.setState({ divCamera: false });


        }
        var HandleChangeHead = e => {
            this.setState({ divMando: false });
            this.setState({ divConsole: false });
            this.setState({ divHeadphones: true });
            this.setState({ divControl: false });
            this.setState({ divCamera: false });

        }
        var HandleChangeControl = e => {
            this.setState({ divMando: false });
            this.setState({ divConsole: false });
            this.setState({ divHeadphones: false });
            this.setState({ divControl: true });
            this.setState({ divCamera: false });

        }
        var HandleChangeCamera = e => {
            this.setState({ divMando: false });
            this.setState({ divConsole: false });
            this.setState({ divHeadphones: false });
            this.setState({ divControl: false });
            this.setState({ divCamera: true });

        }

        const x = this.state.divMando;
        const y = this.state.divConsole;
        const headph = this.state.divHeadphones;
        const control = this.state.divControl;
        const camera = this.state.divCamera;
        return (
            <section>
                <section className="consoleBox">
                    <button className="btnMandoPs5" onClick={HandleChange} ></button>
                    {x && <Box />}
                    <button className="btnPbeButton" onClick={HandleChangeConsolo}></button>
                    {
                        y && <ConsoleBox />
                    }
                    <button className="btnHeadphones" onClick={HandleChangeHead}></button>
                    {
                        headph && <HeadPhonesBox />
                    }
                    <button className="btnControl" onClick={HandleChangeControl}></button>
                    {
                        control && <ControlBox />
                    }
                    <button className="btnCamera" onClick={HandleChangeCamera}></button>
                    {
                        camera && <CameraBox />
                    }

                </section>
            </section>
        );

    }
}


class Box extends Component {
    render() {
        return (

            <motion.div className="consoleBox" initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>
                <div className="dataConsole">
                    <p className="titleConsole">Control inalámbrico DualSense</p>
                    <p className="textConsole">Sumérgete con un control que ofrece respuesta háptica, gatillos adaptativos y un micrófono integrado.</p>
                    <button className="btnConsolePs5">
                        Más información
                    </button>
                </div>
                <div className="imgRight">
                    <img src={Ps5Mando} alt="mando" />
                </div>

            </motion.div>


        )
    }
}

class ConsoleBox extends Component {
    render() {
        return (
            <motion.div className="consoleBox" initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>
                <div className="dataConsole">
                    <p className="titleConsole">Consola PlayStation 5</p>
                    <p className="textConsole">Vive una nueva generación de juegos increíbles de PlayStation.</p>
                    <button className="btnConsolePs5">
                        Más información
                    </button>
                </div>
                <div className="imgRight">
                    <img src={Ps5ConsoleImage} alt="mando" />
                </div>

            </motion.div>


        )
    }
}
class HeadPhonesBox extends Component {
    render() {
        return (
            <motion.div className="consoleBox" initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>
                <div className="dataConsole">
                    <p className="titleConsole">Auriculares inalámbricos PULSE 3D™</p>
                    <p className="textConsole">Disfruta de una experiencia inalámbrica perfecta con unos audífonos ajustados para audio 3D en las consolas PS5.</p>
                    <button className="btnConsolePs5">
                        Más información
                    </button>
                </div>
                <div className="imgRight">
                    <img src={HeadphonesPs5} alt="headphones" />
                </div>

            </motion.div>


        )
    }
}
class ControlBox extends Component {
    render() {
        return (
            <motion.div className="consoleBox" initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>
                <div className="dataConsole">
                    <p className="titleConsole">Control multimedia</p>
                    <p className="textConsole">Controla cómodamente las películas, los servicios de transmisión y mucho más en tu consola PS5 con un diseño intuitivo.</p>
                    <button className="btnConsolePs5">
                        Más información
                    </button>
                </div>
                <div className="imgRight">
                    <img src={ControlPs5} alt="control" />
                </div>

            </motion.div>


        )
    }
}
class CameraBox extends Component {
    render() {
        return (
            <motion.div className="consoleBox" initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>
                <div className="dataConsole">
                    <p className="titleConsole">Cámara HD</p>
                    <p className="textConsole">Aparece en tus propios videos de juegos y transmisiones gracias a la captura Full HD de excelente nitidez y definición.</p>
                    <button className="btnConsolePs5">
                        Más información
                    </button>
                </div>
                <div className="imgRight">
                    <img src={CameraPs5} alt="camera" />
                </div>

            </motion.div>


        )
    }
}




export default Ps5Console;
