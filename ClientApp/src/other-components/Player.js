import React from "react";
import Icon from '@mdi/react';
import { mdiArrangeBringForward } from '@mdi/js';

import './Player.css';

export default function PlayerComponent() {
    const iframe = '<iframe scrolling="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="no" style="width: 100%;height: 95%" src="https://share.xdevel.com/player/2300"></iframe>';

    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} className="inner-player" />);
    }

    return (
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
    );
}