import {resetView, setImageView, move, rotate, resize, addEvent, clearStorage, addValue, addListenId, addListenGroup, getStorage} from './scripts/aggregator.js'

addListenId('move', 'click', addEvent, move)
addListenId('resize', 'click', addEvent, resize)
addListenId('rotate', 'click', addEvent, rotate)
addListenId('clearStorage', 'click', clearStorage)
addListenId('reset', 'click', resetView)
addListenGroup('.num', 'click', addValue)

setImageView('imageEdit', 'filtered')

getStorage()
