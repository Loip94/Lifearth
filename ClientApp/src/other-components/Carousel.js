import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Carousel.css';

import LifearthParty from '../content/lifearth_party.png';
import Slogan from '../content/slogan.png';
import Aggregatori from '../content/aggregatori_banner.png';
import Natale from '../content/natale_banner.jpg';

export default function CarouselComponent() {
    return (
        <div className="column middle carousel">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={LifearthParty} alt="" />
                    <p className="legend">Lifearth Webradio e' finalmente online!</p>
                </div>
                <div>
                    <img src={Slogan} alt="" />
                </div>
                <div>
                    <img src={Aggregatori} alt="" />
                    <p className="legend">Lifearth puo' ora essere sentita su tre diversi aggregatori di radio: <a href="http://www.radio-italiane.it/lifearth-webradio">Radio-taliane.it</a>, <a href="http://radio.garden/listen/lifearth-web-radio/yAcFjKgI">Radio Garden</a> e <a href="https://www.fm-world.it/"> Fm-World</a>! <br/> Buon ascolto!</p>
                </div>
                <div>
                    <img src={Natale} alt="" />
                    <p className="legend">Da giovedi' 24 Dicembre fino a sabato 26 Dicembre</p>
                </div>
            </Carousel>
        </div>
    );
}