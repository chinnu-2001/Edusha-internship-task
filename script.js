const open = document.getElementById('open');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const open4 = document.getElementById('open4');
const open5 = document.getElementById('open5');
const model_containter = document.getElementById('model_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    model_containter.classList.add('show');
});
open2.addEventListener('click', () => {
    model_containter.classList.add('show');
});
open3.addEventListener('click', () => {
    model_containter.classList.add('show');
});
open4.addEventListener('click', () => {
    model_containter.classList.add('show');
});
open5.addEventListener('click', () => {
    model_containter.classList.add('show');
});

close.addEventListener('click',()=> {
    model_containter.classList.remove('show');
});