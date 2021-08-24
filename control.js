import {clearStorageMain, addListenId} from './editMode/scripts/aggregator.js'
import {stickers} from './data/data.js'

let store = localStorage.getItem('stickerStore')

addListenId('resetStore', 'click', resetStore)

function resetTypes(){
  stickers.map((sticker) => sticker.type = '')
}

if(!store){
  resetTypes()
  localStorage.setItem('stickerStore', JSON.stringify(stickers))
}

function resetStore(){
  localStorage.removeItem('stickerStore')
  clearStorageMain()
}

