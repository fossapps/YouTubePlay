import Config from "../Config";
export default class DetectVideoFinished {
    finishCallback;
    interval;
    constructor(){
        this.interval = window.setInterval(() => {
            if (document.querySelector(".ytp-play-button.ytp-button[title=Replay]") != null) {
                this.finishCallback();
                window.clearInterval(this.interval);
            }
        }, Config.getPortName());
    }
    onFinished(finishCallback){
        this.finishCallback = finishCallback;
    }
}
