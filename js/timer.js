export class Timer {
    constructor({ start, end, speed }) {
        this.start = start;
        this.end = end;
        this.speed = speed ? speed : 1000;
        this.ele = document.querySelector('.timer');
        this.statement = true;
    }

    Timerer() {
        if (this.statement) {
            if (this.start > this.end) {
                const timer = setTimeout(() => this.Timerer(), this.speed);
                if (this.start > this.end) {
                    this.start--;
                    this.ele.innerText = `${this.Handel_Timer(this.start)}s`;
                }
            } else {
                //======== Stop Typing ========>
                this.statement = false;
                //======== Show Again ========>
                document.querySelector('.again').classList.add('active');
                // this.statement = false;
            }
        } else {
            console.log('Ending');
        }
    }

    Handel_Timer(num) {
        if (num < 10) {
            return `0${num}`
        } else {
            return num;
        }
    }
}