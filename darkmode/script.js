//variables
//let state = 0; //0 means light mode, 1 dark mode
let body = document.body;
let button = document.getElementById('switchbutton');
let img0 = document.getElementById('cat0');
let img1 = document.getElementById('cat1');

//1st solution

// let lightMode = () => {
//     document.body.classList.add('darkmode');
//     button.classList.add('darkmode');
//     changeImg();
//     state = 1;
// }

// let darkMode = () => {
//     document.body.classList.remove('darkmode');
//     button.classList.remove('darkmode')
//     changeImg();
//     state = 0;
// }

// let changeImg = () => {
//     document.querySelector('.active').classList.remove('active');
//     document.querySelector('#cat'+state).classList.add('active');
// }

// let switchMode = () => {
//     if (state === 0){
//         lightMode();
//     }
//     else {
//         darkMode();
//     }
// }

//2nd solution

let switchMode = () => {
    body.classList.toggle('darkmode');
    img0.classList.toggle('active');
    img1.classList.toggle('active');
}

button.addEventListener('click', switchMode);