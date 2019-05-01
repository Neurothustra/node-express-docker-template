
window.onload = () => {
    new Main();
}

class Main {
    outputText = document.querySelector('#output');

    constructor() {
        this.setOutputText('Success')
    }

    setOutputText(data: string) {
        if (this.outputText) {
            this.outputText.innerHTML = data;
        }

    }
}