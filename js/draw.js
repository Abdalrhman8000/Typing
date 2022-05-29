import { data } from './data.js';
export class DrawUi {
    constructor() {
        this.ele = document.querySelector('.text_cont p');
    }
    Drawer() {
        //======= Random Data From Data.js File ==========>
        const current_data = data[Math.floor(Math.random() * data.length)].split('');
        //======= Clear Element Before Appending ==========>
        this.ele.innerHTML = '';
        current_data.forEach(e => {
            //======= Appen Data As Span Element ==========>
            this.ele.innerHTML += `<span>${e}</span>`;
        })
    }
}