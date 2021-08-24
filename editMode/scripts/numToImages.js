import {stickers, addToId, filteredInit} from './aggregator.js'

let add = ''
let imageObj = []
let step = 0
let numPair = ''
let template = ''

function resetAddValue(){
  add=''
  step=0
}



function addImage(numPair){
  let {image, num, name, type} = stickers[numPair]
  template = `<img src='../${image}' class='${num}' loading='lazy' alt='${name} ${type}'>`
  if(template){
    addToId('filtered', template)
  }
  resetAddValue()
}

function addValue(num = ''){
  add += num
  if(add.length % 2 == 0){
    filteredInit()
  if(add[0] == 0){
    numPair = add[1]
  } 
  if (add[0] > 0){
    imageObj.push(add.slice(step, step + 2))
    numPair = imageObj.pop()
  } 
    if(numPair){
      addImage(numPair)
    }
  }
}

export {addValue}