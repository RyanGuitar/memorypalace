let stickersNames = []

function Loci(numType, stickersSrc){
  let filteredStickers = stickersSrc.filter(({type}) => type == numType.toString())
  let stickersImages ='';
  stickersNames = []
  for(let {image, name, num, css} of filteredStickers){
    stickersNames.push(num)
    stickersImages += `<img src="../${image}" class="${num}" style="${css}" loading="lazy" alt="${name} ${numType}">`
  }
  return stickersImages
}

export { Loci, stickersNames }