import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Partners } from './components/Partners';
import { Programming } from './components/Programming';
import { Staff } from './components/Staff';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        document.body.classList.add("background-white");

        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/staff' component={Staff} />
                <Route path='/partners' component={Partners} />
                <Route path='/programming' component={Programming} />
            </Layout>
        );
    }
}
