'use strict';

const headerMenu = document.getElementById('header-menu');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('#close');
const menus = document.querySelector('.menus');

headerMenu.addEventListener('click',()=>{
  modal.classList.add('show')
  overlay.classList.add('show')
});

close.addEventListener('click',()=>{
  modal.classList.remove('show')
  overlay.classList.remove('show')
});

modal.addEventListener('click',()=>{
  modal.classList.remove('show')
  overlay.classList.remove('show')
});

menus.addEventListener('click',()=>{
  modal.classList.remove('show')
  overlay.classList.remove('show')
});
