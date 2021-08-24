function getId(id){
  return document.getElementById(id);
}

function query(id){
  return document.querySelector(id);
}

function queryAll(id){
  return document.querySelectorAll(id);
}

function addToId(id, add){
  getId(id).innerHTML = add
}

function addListenId(id, action, fn, arg=null){
  getId(id).addEventListener(action, () => {fn(arg)});
}

function addListenGroup(obj, action, fn, arg = null){
    let group = queryAll(obj)
    for(let i = 0;i < group.length;i++){
      group[i].addEventListener(action, (e) => {
        fn(e.target.innerText);
        e.preventDefault()
    })
  }
}

export {query, addListenGroup, addToId, addListenId}