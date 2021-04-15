import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Slider from './components/slider';
import Ps5 from './components/ps5';
import Sony from './components/HeaderSony';
import Ps5Console from './components/Ps5Console';

import VideoPlay from './components/VideoComponent';
import GridGames from './components/gridGames';
import Ps4 from './components/Ps4';
import PlaystationPLUS from './components/PlaystationPlus';
import Store from './components/Store';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Sony />
            <Router>
                <Navbar />


                <Switch>
                    <Route path='/' exact />
                </Switch>
            </Router>
            <Slider />
            <Ps5 />
            <Ps5Console />
            <VideoPlay />
            <GridGames />
            <Ps4 />
            <PlaystationPLUS />
            <Store />
            <SocialMedia />
            <Footer />





        </>
    );
}

export default App;