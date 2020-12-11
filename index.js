class Timer{
    constructor(durationInput, startButton, pausebutton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pausebutton = pausebutton;

        this.startButton.addEventListener('click', this.start);
    }

    start(){
        alert('We are Working....')
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);