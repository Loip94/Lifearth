import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Icon from '@mdi/react';
import ReactTooltip from 'react-tooltip';

import CarouselComponent from "../other-components/Carousel";
import PlayerComponent from "../other-components/Player";

import { SpinnerComponent } from 'react-element-spinner';
import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js';
import './Home.css';
import './hover.css';

import Homelogo from '../content/lifearth_home_logo_short.png';
import Banner from '../content/banner_telegram.png';
import BannerShort from '../content/banner_telegram_short.png';
import OnAir from '../content/live_on_air.png';

import AndreaC from '../content/AndreaC_fb.png';

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

            var onAir = document.getElementsByClassName("onAir")[0];

            var bluesCell = document.getElementsByClassName("blues")[0];
            var jazzCell = document.getElementsByClassName("jazz")[0];
            var rockCell = document.getElementsByClassName("rock")[0];
            var randbCell = document.getElementsByClassName("randb")[0];
            var chillCell = document.getElementsByClassName("chill")[0];

            if (totalminutes < 330) {
                Mark(bluesCell);
                onAir.style.marginLeft = "4%";
            } else if (330 <= totalminutes && totalminutes < 750) {
                Mark(jazzCell);
                onAir.style.marginLeft = "24%";
            } else if (750 <= totalminutes && totalminutes < 900) {
                Mark(rockCell);
                onAir.style.marginLeft = "44%";
            } else if (900 <= totalminutes && totalminutes < 1200) {
                Mark(randbCell);
                onAir.style.marginLeft = "64%";
            } else {
                Mark(chillCell);
                onAir.style.marginLeft = "84%";
            }

            function Mark(toMark) {
                if (toMark != undefined) {
                    bluesCell.classList.remove("marked");
                    jazzCell.classList.remove("marked");
                    rockCell.classList.remove("marked");
                    randbCell.classList.remove("marked");
                    chillCell.classList.remove("marked");
                    toMark.classList.add("marked");
                }
            }
        }, 3000);
    }

    render() {
        return (
            <div>
                <ReactTooltip />
                <SpinnerComponent loading={true} position="global" color="#ee9f2b" backgroundColor="#F6FBE0" spinnerType="circle-dots" />

                <div className="mainContent">

                    <div className="contacts">
                        <div className="utilities">
                            <span className="pr-3 text-dark">
                                <svg className="bi bi-chat-fill pr-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                </svg>

                     WhatsApp:+393332591460
                        </span>
                            <span className="pr-5 text-dark">
                                <svg className="bi bi-envelope-fill pr-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                </svg>
                     Infolifearth@gmail.com
                        </span>
                        </div>
                        <div className="socials">
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
                    </div>

                    <img src={Homelogo} className="rounded" alt="website homelogo" />

                    <div className="programmation-title">
                    </div>

                    <img src={OnAir} className="onAir" />
                    <table>
                        <tbody>
                            <tr>
                                <td className="blues first-program">
                                    <span className="tooltiptext">00:00 - 05:30</span>
                                </td>
                                <td className="jazz">
                                    <span className="tooltiptext">05:30 - 12:30</span>
                                </td>
                                <td className="rock">
                                    <span className="tooltiptext">12:30 - 15:00</span>
                                </td>
                                <td className="randb">
                                    <span className="tooltiptext">15:00 - 20:00</span>
                                </td>
                                <td className="chill last-program">
                                    <span className="tooltiptext">20:00 - 00:00</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="body-center">
                        <div className="column left">
                            <div className="row head">
                                <a href="https://www.facebook.com/Andrea-Ricci-1080380418678688/?ref=page_internal">
                                    <div className="card text-center hvr-bounce-to-bottom">
                                        <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Andrea Ricci</h5>
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="row">
                                <a className="second-row" href="">
                                    <div className="card text-center hvr-bounce-to-bottom">
                                        <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Federico</h5>
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="column middle">
                            <PlayerComponent />
                            <div className="row">
                                <CarouselComponent />
                            </div>
                        </div>

                        <div className="column right">
                            <div className="row head">
                                <a href="">
                                    <div className="card text-center hvr-bounce-to-bottom">
                                        <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Carla</h5>
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </a>
                                <a className="rightA hidden" href="">
                                    <div className="card text-center hvr-bounce-to-bottom">
                                        <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Federico</h5>
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="row">
                                <a className="second-row" href="">
                                    <div className="card text-center hvr-bounce-to-bottom move-top">
                                        <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Roberto</h5>
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </a>
                                <a className="rightA hidden" href="">
                                    <div className="card text-center hvr-bounce-to-bottom move-top">
                                        <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Federico</h5>
                                            <p className="card-text"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden-cards">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <a href="">
                                        <div className="card text-center hvr-bounce-to-bottom">
                                            <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Carla</h5>
                                                <p className="card-text"></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a className="" href="">
                                        <div className="card text-center hvr-bounce-to-bottom">
                                            <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Federico</h5>
                                                <p className="card-text"></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a className="" href="">
                                        <div className="card text-center hvr-bounce-to-bottom">
                                            <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Roberto</h5>
                                                <p className="card-text"></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-3">
                                    <a className="" href="">
                                        <div className="card text-center hvr-bounce-to-bottom">
                                            <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">Federico</h5>
                                                <p className="card-text"></p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="info">
                        <p>© 2020 Lifearth Web Radio</p>
                        <p>Venezia (Italia)</p>
                        <p>Lic. SIAE xxxx/x/xxxx - Lic. SCF 483/16</p>
                    </div>

                    <img src={Banner} id="long-banner" className="banner" alt="Telegram Banner" />
                    <img src={BannerShort} className="banner short-banner" alt="Telegram Banner" />
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);