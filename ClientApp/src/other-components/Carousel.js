import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Carousel.css';

import LifearthParty from '../content/lifearth_party.png';
import Slogan from '../content/slogan.png';
import Aggregatori from '../content/aggregatori_banner.png';
import IrmaRecords from '../content/irma_banner.png';

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
                    <p className="legend">Lifearth puo' ora essere sentita su diversi aggregatori di radio: <a href="http://radio.garden/listen/lifearth-web-radio/yAcFjKgI">Radio Garden</a> e <a href="http://www.radio-italiane.it/lifearth-webradio">Radio-taliane.it</a>! <br /> Buon ascolto!</p>
                </div>
                <div style={{ cursor: "pointer" }} onClick={() => { window.open("https://www.irmagroup.com/", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes"); }} >
                    <img src={IrmaRecords} alt=""/>
                </div>
            </Carousel>
        </div>
    );
}