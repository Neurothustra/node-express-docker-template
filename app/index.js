"use strict";
window.onload = () => {
    new Main();
};
class Main {
    constructor() {
        this.outputText = document.querySelector('#output');
        this.setOutputText('Success');
    }
    setOutputText(data) {
        if (this.outputText) {
            this.outputText.innerHTML = data;
        }
    }
}
