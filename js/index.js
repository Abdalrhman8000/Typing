import { DrawUi } from './draw.js';
import { Input } from './input.js';
import { Timer } from './timer.js';


//======== Global Objects ==========>
const draw = new DrawUi();
export const timer = new Timer({ start: 30, end: 0, speed: 1000 });
const input = new Input();
//======= Global Objects ===========>

//============ Draw Ui  ===========>
window.addEventListener('load', () => {
    draw.Drawer();
})
//============ Draw Ui  ===========>

//=========== Set Timer Controlls Events ============>

//============= Start ==============>
document.querySelector('.start').addEventListener('pointerdown', (e) => {
    //======= Start Timer ======>
    timer.Timerer();
    //=============== Check Input Controll ==============>
    window.addEventListener('keydown', (e) => {
        input.Inputer({ statement: timer.statement, event: e });
    })
    //======= Hide Start ======>
    e.target.classList.remove('active');
})
//============= Again ==============>
document.querySelector('.again').addEventListener('pointerdown', (e) => {
    //======= Reload Timer ======>
    const timer = new Timer({ start: 30, end: 0, speed: 1000 });
    timer.Timerer();
    //===== Check Input Controll =====>
    window.addEventListener('keydown', (e) => {
        input.Inputer({ statement: timer.statement, event: e });
    })
    //========== Reaload Key Down =========>
    input.index = 0;
    //======= Hide Again ======>
    e.target.classList.remove('active');
    //=========  Random Data ==============>
    draw.Drawer();
})
//=========== Set Timer Controlls Events ============>
