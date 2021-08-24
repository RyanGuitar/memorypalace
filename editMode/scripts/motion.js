import {query, addToId} from './aggregator.js'

let touch = ''
let images = ''
let imageStore = ''
let filtered = ''
let updatePosition = ''
let imageView = ''

function setImageView(view, filter){
  imageView = view
  images = query(`#${view}`).children
  filtered = query(`#${filter}`)
}

function moveToScollmenu(e){
  touch =  e.changedTouches.item(0);
  touch.target.style.position = "absolute"
  touch.target.style.left = touch.clientX - touch.target.width/2 + "px"
  touch.target.style.top = touch.clientY -touch.target.height/2 + "px"
  e.preventDefault();
}

function removeFilterEvent(e){
  filtered.removeEventListener('touchmove', moveToScollmenu)
  filtered.removeEventListener('mousemove', moveToScollmenu)
  filtered.removeEventListener('touchend', removeFilterEvent)
  filtered.removeEventListener('mouseup', removeFilterEvent)
  imageStore += filtered.innerHTML
  addToId(imageView, imageStore)
  e.target.classList.add('hide')
  e.preventDefault()
}

/*** adding type to stickerStore ***/
let getStored = ''
let storeArray = []

function changeImageType(num, css){
  getStored = localStorage.getItem('stickerStore')
  storeArray = JSON.parse(getStored)
  storeArray[num].type = 0
  storeArray[num].css = css
  localStorage.setItem('stickerStore', JSON.stringify(storeArray))
}

function grabPositions(){
  updatePosition = ''
  images = query(`#${imageView}`).children
  for(let i = 0;i < images.length;i++){
    changeImageType(images[i].className, images[i].style.cssText) 
    updatePosition += images[i].outerHTML
  }
  
  imageStore = updatePosition
  addToId(imageView, imageStore)
  addEvent(move)
  addToStorage()
}

function filteredInit(){
  filtered.addEventListener('touchmove', moveToScollmenu)
  filtered.addEventListener('mousemove', moveToScollmenu)
  filtered.addEventListener('touchend', removeFilterEvent)
  filtered.addEventListener('mouseup', removeFilterEvent)
}

function move(e){
  addEvent(move)
  touch =  e.changedTouches.item(0)
  touch.target.style.position = "absolute"
  touch.target.style.left = touch.clientX - touch.target.width/2 + "px"
  touch.target.style.top = touch.clientY -touch.target.height/2 + "px"
  touch.target.style.width = e.target.offsetWidth + "px"
  touch.target.style.height = e.target.offsetWidth + "px"

  e.preventDefault();
}

function rotate (e) {
  touch = e.changedTouches.item(0);
  touch.target.style.transform = "rotate(" + touch.screenX + "deg)"
  touch.target.style.width = e.target.offsetWidth + "px"
  touch.target.style.height = e.target.offsetWidth + "px"
  e.preventDefault();
};

function resize(e){
  touch =  e.changedTouches.item(0);
  touch.target.style.position = "absolute"
  touch.target.style.width = touch.clientX - touch.target.width/2 + 100 + "px"
  touch.target.style.height = touch.clientX - touch.target.width/2 + 100 + "px"
  touch.target.style.top = touch.clientY + "px"
  e.preventDefault();
}

function addEvent(action){
  removeEvent(move);
  removeEvent(rotate);
  removeEvent(resize);
  for(let i = 0;i<images.length;i++){
    images[i].addEventListener('touchstart', (e) => {
      e.preventDefault();
    })
    images[i].addEventListener('mousedown', (e) => {
      e.preventDefault();
    })
    images[i].addEventListener('touchmove', action)
    images[i].addEventListener('mousemove', action)
    
    images[i].addEventListener('touchend', grabPositions)
    images[i].addEventListener('mouseup', grabPositions)
  }
}

function removeEvent(action){
  for(let i = 0;i<images.length;i++){
    images[i].removeEventListener('touchmove', action)
    images[i].removeEventListener('mousemove', action)
  }
}

function addToStorage(){
  localStorage.setItem('x', imageStore)
}

function clearStorageMain(){
  localStorage.removeItem('x')
}


function clearStorage(){
  localStorage.removeItem('x')
  imageStore = ''
  updatePosition = ''
  addToId(imageView, imageStore)
}

function resetView(){
  imageStore = localStorage.getItem('x')
  addToId('imageEdit', imageStore)
  addToId('filtered', '')
}

async function getStorage(){
  imageStore = await localStorage.getItem('x')
  await addToId(imageView, imageStore)
}


//getStorage()

export {clearStorageMain, resetView, getStorage, filtered, setImageView, filteredInit, clearStorage, move, rotate, resize, addEvent, removeEvent}