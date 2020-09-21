import React, { Component } from 'react';
import './Staff.css';

export class Staff extends Component {
    static displayName = Staff.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementStaff = this.incrementStaff.bind(this);
    }

    incrementStaff() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div className="text-container">
                <h1>Chi sono?</h1>
                <hr />
                <p>
                    Ciao sono Andrea Ricci, <br />
                    l'ideatore del progetto Lifearth Webradio. <br /><br />
                    Il mio amore per la radio ha radici profonde:
                    a meta' degli anni settanta, periodo in cui nacquero le prime radio libere,
                    si accese in me la passione per la musica e capii subito di voler far parte di questo mondo. <br /><br />

                    Nativo della provincia di Milano, fino all'eta' di ventidue anni ebbi modo di collaborare con diverse realta' radiofoniche e locali
                    da ballo dell'hinterland milanese, per poi approdare in Veneto nel 1986. <br /><br />

                    Qui iniziai una fattiva collaborazione con le strutture radiofoniche e con i locali da ballo delle province di Treviso e Venezia,
                    arricchita da una esperienza lavorativa come venditore di dischi in uno dei negozi
                    piu' acclamati del veneziano, GOOD MUSIC - MESTRE, punto vendita del bravo DJ Massimo Bianchini. <br /><br />

                    Nel trascorrere degli anni la vita mi porto' a percorrere strade diverse ma
                    nonostante cio' non persi mai l'amore per il mondo della musica. <br /><br />

                    Amante di Sport e natura decisi infatti di dedicarmi all'insegnamento di alcuni
                    valori a cui tengo moltissimo: rispetto, lealta' e amore. <br />
                    Istruttore sportivo dal 2000, la mia missione e' sempre stata trasmettere
                    ai giovani la passione per lo sport e il rispetto dell'ambiente in cui viviamo. <br /><br />

                    Con queste premesse l'obbiettivo di Lifearth e' subito spiegato. <br /><br />

                    Il progetto unisce i tre principi in cui credo fermamente, con lo scopo di trasmetterli a piu' persone possibili: <br />
                    <i> "Sana Alimentazione, Natura e Buona Musica" </i>, il mio motto.

                    Nulla di presuntuoso ma certamente pretenzioso. <br /><br />

                    La creatura e' piccina ma ha le idee chiare e strada facendo cresceremo e capiremo dove ci portera'. <br /><br />

                    Seguiteci Anime e Buona Vita. <br /><br /><br />

                    <p className="collaboration">
                        Di seguito alcune delle mie vecchie collaborazioni: RM5 - RADIO KELLY MILANO - ROBY CLUB RHO - STEREO CLUB COLTURANO - RADIO VENEZIA - RADIO BELLAEMONELLA - RSD - UPRADIO - SUPERSONIC.
                    </p>
                </p>
            </div>
        );
    }
}
