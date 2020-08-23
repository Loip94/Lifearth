import React, { Component } from 'react';
import Icon from '@mdi/react';
import { SpinnerComponent } from 'react-element-spinner';
import { mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js';
import './Home.css';
import './hover.css';

import Homelogo from '../content/LifearthHomeLogo.jpg';
import Portrait1 from '../content/Portrait1.jpg';
import Portrait2 from '../content/Portrait2.jpg';
import AndreaC from '../content/Andrea C.jpg';
import Banner from '../content/banner_telegram.png';

export class Home extends Component {
    static displayName = Home.name;

    componentDidMount() {
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            document.getElementsByClassName("loader-container")[0].remove();
            document.getElementsByClassName("mainContent")[0].style.visibility = "visible";
        }, 2500);
    }

    render() {
        const contactStyle = {
            textAlign: 'center'
        };

        const bodyColumn = {
            width: '15%',
            paddingBottom: '100px',
        };

        const bodyCenterColumn = {
            width: '36%',
            left: '32%'
        };

        return (
            <div>
                <SpinnerComponent loading={true} position="global" color="#ee9f2b" backgroundColor="#ffffe6" spinnerType="circle-dots" />
                <div className="mainContent">
                    <div style={contactStyle} className="pb-2">
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
                    lifearthwebradio@gmail.com
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

                    <div>
                        <div style={bodyColumn} className="float-left">
                            <a href="https://www.facebook.com/Andrea-Ricci-1080380418678688/?ref=page_internal">
                                <div className="card text-center mt-2 hvr-bounce-to-bottom">
                                    <img className="card-img-top" src={AndreaC} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Andrea Ricci</h5>
                                        <p className="card-text">Rhythm & Blues</p>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="card text-center mt-2 hvr-forward">
                                    <img className="card-img-top" src={Portrait2} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Matteo</h5>
                                        <p className="card-text">Progressive</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div style={bodyCenterColumn} className="position-absolute mt-2">
                            <a href="javascript:window.open('https://share.xdevel.com/player/2300', 'listen', 'toolbars=0,scrollbars=0,location=0,statusbars=0,menubars=0,resizable=0,width=600,height=310');void(0);">Ascolta</a>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                        <div style={bodyColumn} className="float-right">
                            <a href="">
                                <div className="card text-center mt-2 hvr-float-shadow">
                                    <img className="card-img-top" src={Portrait1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Carla</h5>
                                        <p className="card-text">Rhythm & Blues</p>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="card text-center mt-2 hvr-pop">
                                    <img className="card-img-top" src={Portrait2} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Matteo</h5>
                                        <p className="card-text">Rock</p>
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
