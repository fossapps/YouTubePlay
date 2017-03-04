import React from 'react';
import ReactDOM from 'react-dom';
import {Store} from 'react-chrome-redux';
import App from './App';
import Config from '../Config';
import './Popup.css';

const proxyStore = new Store({
    state: {},
    portName: Config.getPortName()
});

ReactDOM.render(
    <App store={proxyStore} />
, document.getElementById('app'));
