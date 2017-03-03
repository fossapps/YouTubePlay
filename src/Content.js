import React from 'react';
import {Store} from 'react-chrome-redux';
import Config from './Config';
import './Content.css';
import DetectVideoFinished from './DetectVideoFinished';
const store = new Store({portName: Config.getPortName()});
let nodes = document.querySelectorAll('.video-list-item .content-wrapper a');
nodes.forEach((node) => {
    let div = document.createElement('div');
    div.innerHTML = 'Queue!';
    div.addEventListener('click', (event) => {
        event.preventDefault();
        let linkElement = event.target.parentElement;
        let link = linkElement.href;
        let text = linkElement.title;
        let image = linkElement.parentElement.parentElement.querySelectorAll('.thumb-wrapper a img')[0].src;
        let video = {link, image, text};
        store.dispatch({type: 'ADD', payload: video});
    });
    div.className = 'YTP-Queue';
    div.style.float = 'right';
    div.style.padding = '5px';
    node.appendChild(div);
});
let observe = new DetectVideoFinished();
observe.onFinished(() => {
    store.dispatch({type: 'VIDEO_FINISHED', payload: {link: window.location.href}});
    store.subscribe(() => {
        let newVideo = store.getState().VideoManager[0];
        console.log(newVideo);
        if(newVideo && newVideo.link !== window.location.href){
            window.location = newVideo.link;
        }
    });
});
