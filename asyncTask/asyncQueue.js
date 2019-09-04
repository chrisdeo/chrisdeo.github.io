class Queue {
    constructor() {
        this.queue = [];
    }
    enQueue(val) {
        this.queue.push(val);
    }
    deQueue() {
        return this.queue.shift();
    }
    clear() {
        this.queue.length = 0;
    }
}

let asyncQueue = new Queue();
let btnHasClicked = false;

let btnA = document.querySelector('.btnA');
console.log(btnA);
let btnB = document.querySelector('.btnB');
console.log(btnB);
let inputForm = document.querySelector('.input-form');
console.log(inputForm);

let eventA  = function() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('A callback');
        }, 3000);
    })
}

let eventB  = function() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('B callback');
        }, 500);
    })
}

let run = async () => {
    btnHasClicked = true;
    while (asyncQueue.queue.length !== 0) {
        console.log('i n L o o p');
        inputForm.value = await asyncQueue.deQueue()();
    }
    btnHasClicked = false;
}

btnA.addEventListener('click', () => {
    console.log('btnA clicked');
    asyncQueue.enQueue(eventA);
    if (!btnHasClicked) run();
});
btnB.addEventListener('click', () => {
    console.log('btnB clicked');
    asyncQueue.enQueue(eventB);
    if (!btnHasClicked) run();
});