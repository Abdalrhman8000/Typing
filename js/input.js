export class Input {

    constructor() {
        this.ele;
        this.index = 0;
        this.ct = document.querySelector('.correct_info');
        this.fe = document.querySelector('.uncorrect_info');
        this.lt = document.querySelector('.latters');
    }


    //===============  Check Statues And Keys ==================>
    Inputer({ statement, event }) {
        if (statement) {
            this.ele = document.querySelectorAll('.text_cont p span');
            if (event.key.search(/[a-z]/g) == 0 || event.key.search(/[a-z]/g) == -1) {
                this.Appender(event, this.ele);
            } else if (event.key.search(/[a-z]/g) == 1 && event.key != 'Backspace') {
                this.Alreter();
            } else {
                this.Deleter();
            }
        }
    }
    //===============  Append Correct And False Class And Sum Num Of Them ==================>
    Appender(event) {
        if (event.key == this.ele[this.index].innerText) {
            this.ele[this.index].classList.add('correct');
            this.ct.innerText = `CT : ${document.querySelectorAll('.text_cont p .correct').length}`;
            this.index++;
            this.lt.innerText = `LT : ${this.index}`;
        } else {
            this.ele[this.index].classList.add('uncorrect');
            this.fe.innerText = `FE : ${document.querySelectorAll('.text_cont p .uncorrect').length}`;
            this.index++;
            this.lt.innerText = `LT : ${this.index}`;
        }
    }
    //===============  Delete On Key Press And Append New Data ==================>
    Deleter() {
        this.index--;
        this.ele[this.index].classList.remove('correct', 'uncorrect');
        this.lt.innerText = `LT : ${this.index}`;
        this.ct.innerText = `CT : ${document.querySelectorAll('.text_cont p .correct').length}`;
        this.fe.innerText = `FE : ${document.querySelectorAll('.text_cont p .uncorrect').length}`;
    }
    //=============== Show Alret If Inputs Not Correct ==================>
    Alreter() {
        const alret = document.querySelector('.alret');
        alret.classList.add('active_alret');
        setTimeout(() => {
            alret.classList.remove('active_alret');
        }, 1000)
    }
}