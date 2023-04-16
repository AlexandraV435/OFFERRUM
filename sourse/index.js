let modal = document.getElementById('modal');
let btn_panel = document.getElementById('btn__panel');
let logo = document.getElementById('logo');
let main = document.getElementById('main')
let cross = document.getElementById('cross')
let mod = 'show'
let cross_modal = document.getElementById('myModal__cross')
let button__start = document.getElementById('button__start')
let myModal = document.getElementById('myModal')
let header = document.getElementById('header')
let myModal_show = 'hide'
let learning__modal = document.getElementById('learning__modal')
let learning = document.getElementById('learning')
let learning_modal = document.getElementById('learning_modal')
let learning_show = 'hide'
btn_panel.addEventListener('click', show_modal)
cross.addEventListener('click', hide_modal)
button__start.addEventListener('click', show_myModal)
cross_modal.addEventListener('click', hide_myModal)
learning.addEventListener('click', show_modal_learning)
learning_modal.addEventListener('click', show_modal_learning)
main.addEventListener('click', hide_modal_learning)


function show_modal_learning() {
  learning__modal.style.display = 'block'
  main.style.filter ='blur(7.5px)'
  header.style.filter ='blur(7.5px)';
  myModal_show = 'show'
  modal.style.display ='none'
  learning_show = 'show'
}

function hide_modal_learning() {
  if (learning_show == 'show') {
    learning__modal.style.display = 'none'
    main.style.filter ='none'
    header.style.filter ='none';
    myModal_show = 'hide';
    learning_show = 'hide'
  }
}

function show_modal() {
  modal.style.display = 'block';
  btn_panel.style.display = 'none'
  logo.style.display = 'none'
  main.style.filter ='blur(7.5px)'
  mod = 'hide'
}

function hide_modal() {
  mod = 'show'
  modal.style.display = 'none';
  btn_panel.style.display = 'block'
  logo.style.display = 'flex'
  main.style.filter ='none'
}

function hide_myModal() {
  myModal.style.display = 'none';
  main.style.filter ='none';
  header.style.filter ='none';
  myModal_show = 'hide'
}

function show_myModal() {
  myModal.style.display = 'block';
  main.style.filter ='blur(7.5px)';
  header.style.filter ='blur(7.5px)';
  myModal_show = 'show'
}

let w = window
w.addEventListener('resize',() => {
  let width= document.body.clientWidth;
  if (width > 804) {
    modal.style.display = 'none';
    btn_panel.style.display = 'none'
    logo.style.display = 'flex'
    main.style.filter ='none'
  }
  if (width < 804 && mod == 'hide'){
    btn_panel.style.display = 'block'
  } else if (width < 804 && mod == 'show') {
    btn_panel.style.display = 'block'
  }
  if (myModal_show == 'show') {
    main.style.filter ='blur(7.5px)';
  }
  if (myModal_show == 'hide') {
    main.style.filter ='none';
  }
});