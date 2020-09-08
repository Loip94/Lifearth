import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Icon from '@mdi/react';
import ReactTooltip from 'react-tooltip';
import CarouselComponent from "../other-components/Carousel";

import { SpinnerComponent } from 'react-element-spinner';
import { mdiFacebook, mdiInstagram, mdiTwitter, mdiArrangeBringForward } from '@mdi/js';
import './Home.css';
import './hover.css';

import Homelogo from '../content/LifearthHomeLogoShort.png';
import AndreaC from '../content/Andrea C.jpg';
import Banner from '../content/banner_telegram.png';
import FbBanner from '../content/fb_banner.png';

export class Home extends Component {
    static displayName = Home.name;

    componentDidMount() {
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            if (document.getElementsByClassName("loader-container")[0] != undefined) {
                document.getElementsByClassName("loader-container")[0].remove();
                document.getElementsByClassName("mainContent")[0].style.visibility = "visible";
            }
        }, 2500);

        this.takeActualTime = setInterval(() => {
            var now = new Date();
            var hour = now.getHours();
            var minutes = now.getMinutes();
            var totalminutes = hour * 60 + minutes;

            var bluesCell = document.getElementsByClassName("blues")[0];
            var jazzCell = document.getElementsByClassName("jazz")[0];
            var rockCell = document.getElementsByClassName("rock")[0];
            var randbCell = document.getElementsByClassName("randb")[0];
            var chillCell = document.getElementsByClassName("chill")[0];
            //var bluesCellText = document.getElementsByClassName("bluesText")[0];
            //var jazzCellText = document.getElementsByClassName("jazzText")[0];
            //var rockCellText = document.getElementsByClassName("rockText")[0];
            //var randbCellText = document.getElementsByClassName("randbText")[0];
            //var chillCellText = document.getElementsByClassName("chillText")[0];

            if (totalminutes < 570) {
                Mark(bluesCell/*, bluesCellText*/);
            } else if (570 <= totalminutes && totalminutes < 720) {
                Mark(jazzCell/*, jazzCellText*/);
            } else if (720 <= totalminutes && totalminutes < 990) {
                Mark(rockCell/*, rockCellText*/);
            } else if (990 <= totalminutes && totalminutes < 1200) {
                Mark(randbCell/*, randbCellText*/);
            } else {
                Mark(chillCell/*, chillCellText*/);
            }

            function Mark(toMark/*, toMarkText*/) {
                if (toMark != undefined) {
                    bluesCell.classList.remove("marked");
                    jazzCell.classList.remove("marked");
                    rockCell.classList.remove("marked");
                    randbCell.classList.remove("marked");
                    chillCell.classList.remove("marked");
                    toMark.classList.add("marked");

                    //bluesCellText.classList.remove("markedText");
                    //jazzCellText.classList.remove("markedText");
                    //rockCellText.classList.remove("markedText");
                    //randbCellText.classList.remove("markedText");
                    //chillCellText.classList.remove("markedText");
                    //toMarkText.classList.add("markedText");
                }
            }
        }, 3000);
    }

    render() {
        const iframe = '<iframe scrolling="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="no" style="width: 100%;height: 95%" src="https://share.xdevel.com/player/2300"></iframe>';

        function Iframe(props) {
            return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} className="inner-player" />);
        }

        return (
            <div>
                <ReactTooltip />
                <SpinnerComponent loading={true} position="global" color="#ee9f2b" backgroundColor="#F6FBE0" spinnerType="circle-dots" />

                <div className="mainContent">

                    <div className="contacts">
                        <span className="pr-3 text-dark">
                            <svg className="bi bi-chat-fill pr-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                            </svg>

                     WhatsApp:+393332591460
                        </span>
                        <span className="pr-5 text-dark">
                            <svg className="bi bi-envelope-fill pr-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                            </svg>
                     Lifearthwebradio@gmail.com
                        </span>
                        <a href="https://www.facebook.com/Lifearth-Webradio-152018884864184">
                            <div className="hvr-bounce-in">
                                <Icon path={mdiFacebook} title="Facebook" size={2} color="#4267B2" className="pr-2" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/lifearth_webradio/?hl=it">
                            <div className="hvr-bounce-in">
                                <Icon path={mdiInstagram} title="Instagram" size={2} color="#E1306C" className="pr-2" />
                            </div>
                        </a>
                        <a href="https://twitter.com/infolifearth">
                            <div className="hvr-bounce-in">
                                <Icon path={mdiTwitter} title="Twitter" size={2} color="#1DA1F2" className="pr-2" />
                            </div>
                        </a>
                    </div>

                    <img src={Homelogo} className="rounded" alt="website homelogo" />

                    <table>
                        <tr>
                            <td className="blues first-program">
                                <span className="tooltiptext">0:00 - 9:30 / Blues</span>
                            </td>
                            <td className="jazz">
                                <span className="tooltiptext">9:30 - 12:00 / Jazz</span>
                            </td>
                            <td className="rock">
                                <span className="tooltiptext">12:00 - 16:30 / Rock</span>
                            </td>
                            <td className="randb">
                                <span class="tooltiptext">16:30 - 22:00 / R&B</span>
                            </td>
                            <td className="chill last-program">
                                <span className="tooltiptext">22:00 - 00:00 / Chill</span>
                            </td>
                        </tr>
                    </table>

                    <div className="column left">
                        <div className="row head">
                            <img src={FbBanner} />
                        </div>
                        <div className="row">
                            <a href="https://www.facebook.com/Andrea-Ricci-1080380418678688/?ref=page_internal">
                                <div className="card text-center hvr-bounce-to-bottom">
                                    <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Andrea Ricci</h5>
                                        <p className="card-text">Rhythm & Blues</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="row">
                            <a href="">
                                <div className="card text-center hvr-bounce-to-bottom move-top">
                                    <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Andrea Ricci</h5>
                                        <p className="card-text">Rhythm & Blues</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="column middle">
                        <div className="row player">
                            <Iframe iframe={iframe} id="player" />
                            <div className="popUpPlayer">
                                <a href="javascript:window.open('https://share.xdevel.com/player/2300', 'listen', 'toolbars=0,scrollbars=0,location=0,statusbars=0,menubars=0,resizable=0,width=600,height=310');void(0);">
                                    <p data-tip="Apri il player in una nuova scheda" data-type="light" data-effect="solid" data-offset="{'bottom':10, 'right':5}" data-background-color="#F6FBE0" data-text-color="#88b10f">
                                        <Icon path={mdiArrangeBringForward} size="2.2rem" color="#b3b3b3" className="pr-2" />
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <CarouselComponent />
                        </div>
                    </div>

                    <div className="column right">
                        <div className="row head">
                            <img src={FbBanner} />
                        </div>
                        <div className="row">
                            <a href="">
                                <div className="card text-center hvr-bounce-to-bottom">
                                    <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Carla</h5>
                                        <p className="card-text">Rhythm & Blues</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="row">
                            <a href="">
                                <div className="card text-center hvr-bounce-to-bottom move-top">
                                    <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Carla</h5>
                                        <p className="card-text">Rhythm & Blues</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <img src={Banner} className="banner" alt="Whatsapp Banner" />
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);

//documentation for tooltips: https://www.npmjs.com/package/react-tooltip


//<div>
//    <div style={bodyColumn} className="float-left">
//        <a href="https://www.facebook.com/Andrea-Ricci-1080380418678688/?ref=page_internal">
//            <div className="card text-center mt-2 hvr-bounce-to-bottom">
//                <img className="card-img-top" src={AndreaC} alt="Card image cap" />
//                <div className="card-body">
//                    <h5 className="card-title">Andrea Ricci</h5>
//                    <p className="card-text">Rhythm & Blues</p>
//                </div>
//            </div>
//        </a>

//    </div>
//    <div style={bodyCenterColumn} className="position-absolute mt-2">
//        <div className="">
//            Lorem impsum....
//        </div>
//    </div>

//    <div style={bodyColumn} className="float-right">
//        <a href="">
//            <div className="card text-center mt-2 hvr-bounce-to-bottom">
//                <img className="card-img-top" src={Portrait1} alt="Card image cap" />
//                <div className="card-body">
//                    <h5 className="card-title">Carla</h5>
//                    <p className="card-text">Rhythm & Blues</p>
//                </div>
//            </div>
//        </a>
//    </div>
//</div>



//<div style={bodyColumn} className="andreaCard">
//    <a href="https://www.facebook.com/Andrea-Ricci-1080380418678688/?ref=page_internal">
//        <div className="card text-center mt-2 hvr-bounce-to-bottom">
//            <img className="card-img-top" src={AndreaC} alt="Card image cap" />
//            <div className="card-body">
//                <h5 className="card-title">Andrea Ricci</h5>
//                <p className="card-text">Rhythm & Blues</p>
//            </div>
//        </div>
//    </a>
//</div>


