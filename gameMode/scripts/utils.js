import {stickersNames, overlayId} from './aggregator.js'

function addToId(id, add){
  document.getElementById(id).innerHTML = add;
}

function addClass(id, name){
  document.getElementById(id).classList.add(name)
}

function removeClass(id, name){
  document.getElementById(id).classList.remove(name)
}
 
function shuffle(){
   let shuffled = stickersNames.sort(() => Math.random() - 0.5)
   return shuffled
}

function getId(id){
  return document.getElementById(id)
}

function removeAnimation(){
  removeAddClasses(overlayId, "animate-zoom", "hide")
}

function removeAddClasses(id, remove, add){
  removeClass(id, remove)
  addClass(id, add)
}

export {addToId, addClass, removeClass, shuffle, getId, removeAnimation, removeAddClasses}