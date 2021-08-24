import {lociBack, Loci, addToId, shuffle, getId, removeAnimation, removeAddClasses} from './aggregator.js'

let imageViewId = 'loci'
let backgroundId = 'background'
let matchId = 'match'
let overlayId = 'overlay'
let stickersSrc = {}

function setGameParams(images, backgroundId, stickerData){
  imageViewId = images
  backgroundId = backgroundId
  stickersSrc = stickerData
}

function nextLevel(){
   let step = document.getElementById(imageViewId)//.children[0].alt
   if(step.innerHTML == ''){
     return
   } else {
     step = step.children[0].alt
    step = step.split(' ')
    step = Number(step[1]) + 1;
   if(step <= 9){
     addToId(imageViewId, Loci(step, stickersSrc))
     document.getElementById(backgroundId).src = lociBack[step].image;
   } else {
     step = 0;
     addToId(imageViewId, Loci(step, stickersSrc))
     document.getElementById(backgroundId).src = lociBack[step].image;
   }
   addMatch()
   showClick()
   }

   }
 
function addMatch(){
let shuffleSticker = ''
   if(shuffle().length > 0){
    shuffleSticker = shuffle()
     document.getElementById(matchId).innerText = shuffleSticker.pop()
   } else {
     shuffleSticker = shuffle()
     setTimeout(nextLevel, 1000)
     document.getElementById(matchId).innerText = ""
   }
}

function checkMatch(matchWith, clicked, target){
  if(matchWith == clicked){
    addMatch()
    target.add('fade')
  }else {
    removeAddClasses(overlayId, "hide", "animate-zoom")
    setTimeout(removeAnimation, 1500);
  }
}

function queryAllId(id){
  return document.querySelectorAll(`#${id} img`);
}

function showClick(){
  queryAllId(imageViewId).forEach((stickerSrc) => {
    stickerSrc.addEventListener('click', (e) => {
      let clicked = e.target.classList[0];
      let matchWith = getId(matchId).textContent
      checkMatch(matchWith, clicked, e.target.classList)
    })
  })
}

export {setGameParams, checkMatch, showClick, addMatch, overlayId, imageViewId}