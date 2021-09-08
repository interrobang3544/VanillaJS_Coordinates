const box = document.querySelector('.box');
const clientX = document.querySelector('#clientX');
const clientY = document.querySelector('#clientY');
const pageX = document.querySelector('#pageX');
const pageY = document.querySelector('#pageY');
const offsetX = document.querySelector('#offsetX');
const offsetY = document.querySelector('#offsetY');
const screenX = document.querySelector('#screenX');
const screenY = document.querySelector('#screenY');
const view = document.querySelector('.view');
const grid = document.querySelector('.grid');
const spot = document.querySelector('.spot');



function followScroll() {
    view.style.marginTop = window.scrollY + 30 + "px";
    grid.style.marginLeft = window.scrollX + "px";
}

box.addEventListener('mousemove', event => {
  clientX.innerText = event.clientX;
  clientY.innerText = event.clientY;
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
  offsetX.innerText = event.offsetX;
  offsetY.innerText = event.offsetY;
  screenX.innerText = event.screenX;
  screenY.innerText = event.screenY;

  spot.style.top = event.pageY + "px";
  spot.style.left = event.pageX + "px";
});

window.addEventListener('scroll', followScroll);