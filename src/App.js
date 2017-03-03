import React from 'react';
export default class App extends React.Component{
    store;
    constructor(props) {
        super(props);
        this.store = props.store;
        this.state = {VideoManager: []};
    }
    componentDidMount(){
        this.props.store.subscribe(() => {
            this.setState(this.store.getState());
        });

    }
    static renderVideo(video) {
        return <div><div><img src={video.image} /></div><div>{video.text}</div></div>
    }
    static renderNoVideos(){
        return <h2>No videos queued</h2>
    }
    mapVideos(){
        return (<div>{this.state.VideoManager.map((video) => {
            return App.renderVideo(video);
        })}</div>);
    }
    render(){
        return this.state.VideoManager.length ? this.mapVideos() : App.renderNoVideos();
    }
}
