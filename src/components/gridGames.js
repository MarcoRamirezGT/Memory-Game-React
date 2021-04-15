import React, { Component } from 'react';
import './GridGames.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import City from '../images/city.png';
import Resident from '../images/residen.png';
import MLB from '../images/mlb.png';
import Deathloop from '../images/deathloop.png';
import Horizon from '../images/horizon.png';
import Ken from '../images/ken.png';
import Ratchet from '../images/ratchet.png';
import Returnal from '../images/returnal.png';
import Tk from '../images/tk.png';
import Mass from '../images/mass.png';
import Nier from '../images/nier.png';
import { motion, AnimatePresence } from "framer-motion";
import Disco from '../images/disco.png';
import ItTakes from '../images/itTakes.png';
import Tony from '../images/tony.png';
import Balan from '../images/balan.png';
import Marvel from '../images/marvel.png';
import Crash from '../images/crash4.png';
import Yakuza from '../images/yakuza.png';
import Persona5 from '../images/persona5.png';
import LL2 from '../images/ll2.png';
import Haven from '../images/haven.png';
import AllStars from '../images/allstars.png';
import ControlUE from '../images/controlUE.png';


class gridGames extends React.Component {
    state = {
        divProx: true,
        divNew: false,
    }
    render() {
        var HandleChange = e => {
            this.setState({ divProx: !this.state.divProx });
            this.setState({ divNew: !this.state.divNew });
        }
        const x = this.state.divProx;
        const y = this.state.divNew;


        return (
            <div className="divGridGames">
                <button className="btnGridGames" onClick={HandleChange}></button>
                {
                    x && <BoxProx />

                }
                <button className="btnGridGames" onClick={HandleChange}></button>
                {
                    y && <BoxNews />

                }



            </div>



        );
    }
}
class BoxNews extends Component {
    render() {
        return (
            <motion.div className="divPro" initial={{ x: 200 }}
                animate={{ x: -100 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>
                <h1 className="hGames">
                    Nuevos lanzamientos
                </h1>
                <p className="subjectGames">
                    Juegos excelentes de PS5 y PS4 disponibles ahora.

                </p>
                <Card className="root">
                    <CardActionArea>
                        <CardMedia className="media" image={Disco} title="City" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Disco Elysium - The Final Cut
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="rootResident">
                    <CardActionArea>
                        <CardMedia className="media" image={ItTakes} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                It Takes Two
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="mlb">
                    <CardActionArea>
                        <CardMedia className="media" image={Tony} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Tony Hawk's™ Pro Skater™ 1 + 2
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="deathloop">
                    <CardActionArea>
                        <CardMedia className="media" image={Balan} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Balan Wonderland
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="horizon">
                    <CardActionArea>
                        <CardMedia className="media" image={Marvel} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Marvel's Avengers
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="ken">
                    <CardActionArea>
                        <CardMedia className="media" image={Crash} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                It's About Time
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="ratchet">
                    <CardActionArea>
                        <CardMedia className="media" image={Yakuza} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Yakuza: Like a Dragon
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="returnal">
                    <CardActionArea>
                        <CardMedia className="media" image={Persona5} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Persona® 5 Strikers
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="tk">
                    <CardActionArea>
                        <CardMedia className="media" image={LL2} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Little Nightmires II
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="mass">
                    <CardActionArea>
                        <CardMedia className="media" image={Haven} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Haven
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="nier">
                    <CardActionArea>
                        <CardMedia className="media" image={AllStars} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Destruction AllStars
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </motion.div>

        )
    }
}

class BoxProx extends Component {
    render() {
        return (
            <motion.div className="divPro" initial={{ x: 200 }}
                animate={{ x: -100 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>
                <h1 className="hGames">
                    Próximamente
                </h1>
                <p className="subjectGames">
                    Increíbles nuevas experiencias te esperan a la vuelta de la esquina

                </p>
                <Card className="root">
                    <CardActionArea>
                        <CardMedia className="media" image={City} title="City" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Knockout City
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="rootResident">
                    <CardActionArea>
                        <CardMedia className="media" image={Resident} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Resident Evil Village
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="mlb">
                    <CardActionArea>
                        <CardMedia className="media" image={MLB} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                MLB The Show 21
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="deathloop">
                    <CardActionArea>
                        <CardMedia className="media" image={Deathloop} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                DEATHLOOP
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="horizon">
                    <CardActionArea>
                        <CardMedia className="media" image={Horizon} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Horizon Forbidden West
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="ken">
                    <CardActionArea>
                        <CardMedia className="media" image={Ken} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Kena:Bridge of Spirits
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="ratchet">
                    <CardActionArea>
                        <CardMedia className="media" image={Ratchet} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Ratchet & Clank: Rift Apart
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="returnal">
                    <CardActionArea>
                        <CardMedia className="media" image={Returnal} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Returnal
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="tk">
                    <CardActionArea>
                        <CardMedia className="media" image={Tk} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Ghostwire: Tokyo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="mass">
                    <CardActionArea>
                        <CardMedia className="media" image={Mass} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                Mass Effect Legendary Edition
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className="nier">
                    <CardActionArea>
                        <CardMedia className="media" image={Nier} title="Residen Evil" />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p">
                                NieR Replicant ver.1.22474487139...
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </motion.div>

        );
    }
}
export default gridGames;
