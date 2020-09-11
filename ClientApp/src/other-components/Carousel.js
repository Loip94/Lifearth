import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './Carousel.css';

import Autunno from '../content/Autunno.png';
import Estate from '../content/Estate.png';
import Inverno from '../content/Inverno.png';

export default function CarouselComponent() {
    return (
        <div className="column middle carousel">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={Autunno} alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Estate} alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Inverno} alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
}