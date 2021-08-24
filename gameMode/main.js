import {setGameParams, Loci, imageViewId, addToId, showClick, addMatch} from './scripts/aggregator.js'

let stickerSrc = localStorage.getItem('stickerStore')
let stickerObject = JSON.parse(stickerSrc)
setGameParams('loci', 'background', stickerObject)

if(stickerObject){
    addToId(imageViewId, Loci(0, stickerObject))
}


showClick()
addMatch()