import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Carousel.css';

import LifearthParty from '../content/lifearth_party.png';

export default function CarouselComponent() {
    return (
        <div className="column middle carousel">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={LifearthParty} alt="" />
                    <p className="legend">Lifearth Webradio e' finalmente online!</p>
                </div>
                {/*<div>
                    <img src={Estate} alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Inverno} alt="" />
                    <p className="legend">Legend 3</p>
                </div>*/}
            </Carousel>
        </div>
    );
}