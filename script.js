document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
      // up arrow
        addNewGamePiece(e.keyCode)
    }
    else if (e.keyCode == '40') {
      // down arrow
        addNewGamePiece(e.keyCode)
    }
    else if (e.keyCode == '37') {
      // left arrow
        addNewGamePiece(e.keyCode)
    }
    else if (e.keyCode == '39') {
      // right arrow
        addNewGamePiece(e.keyCode)
    }

}

// inserts a new gamePiece at a 
function addNewGamePiece(direction) {
  const gamePiece = document.createElement("div");
  gamePiece.className = "gamePiece a2";
  gamePiece.innerHTML = "2";
    if (direction == '38') {
      // up arrow
        let elements = document.getElementsByClassName("col3")[0].children;
        let element = Array.from(elements);

        let result = element.filter(checkIfEmpty);
        gameLogic(direction);
        if (result.length == 0) {
          // lose game
            return;
        }
        result[getRandomInt(result.length)].appendChild(gamePiece);
    } 
    else if (direction == '40'){
      // down arrow
        let elements = document.getElementsByClassName("col0")[0].children;
        let element = Array.from(elements);

        let result = element.filter(checkIfEmpty);
        gameLogic(direction);
        if (result.length == 0) {
          // lose game
            return;
        }
        result[getRandomInt(result.length)].appendChild(gamePiece);
    }
    else if (direction == '37'){
      // left arrow
        let elements = document.getElementsByClassName("row3");
        let element = Array.from(elements);

        let result = element.filter(checkIfEmpty);
        gameLogic(direction);
        if (result.length == 0) {
          // lose game
            return;
        }
        result[getRandomInt(result.length)].appendChild(gamePiece);
    }
    else if (direction == '39'){
      // right arrow
        let elements = document.getElementsByClassName("row0");
        let element = Array.from(elements);

        let result = element.filter(checkIfEmpty);
        gameLogic(direction);
        if (result.length == 0) {
          // lose game
            return;
        }
        result[getRandomInt(result.length)].appendChild(gamePiece);
    }
}

function gameLogic(direction) {
  if (direction == '38') {
    // Up arrow
    loopingLogicUpwards(param = "col", num = 1);
    loopingLogicUpwards(param = "col", num = 2);
    loopingLogicUpwards(param = "col", num = 3);
    loopingLogicUpwards(param = "col", num = 1);
    loopingLogicUpwards(param = "col", num = 2);
    loopingLogicUpwards(param = "col", num = 3);
    loopingLogicUpwards(param = "col", num = 1);
    loopingLogicUpwards(param = "col", num = 2);
    loopingLogicUpwards(param = "col", num = 3);
  }
  else if (direction == '40') {
    // Down arrow
    loopingLogicDownwards(param = "col", num = 2);
    loopingLogicDownwards(param = "col", num = 1);
    loopingLogicDownwards(param = "col", num = 0);
    loopingLogicDownwards(param = "col", num = 2);
    loopingLogicDownwards(param = "col", num = 1);
    loopingLogicDownwards(param = "col", num = 0);
    loopingLogicDownwards(param = "col", num = 2);
    loopingLogicDownwards(param = "col", num = 1);
    loopingLogicDownwards(param = "col", num = 0);
  }
  else if (direction == '37') {
    // Left Arrow
    loopingLogicBackwards(param = "row", num = 1);
    loopingLogicBackwards(param = "row", num = 2);
    loopingLogicBackwards(param = "row", num = 3);
    loopingLogicBackwards(param = "row", num = 1);
    loopingLogicBackwards(param = "row", num = 2);
    loopingLogicBackwards(param = "row", num = 3);
    loopingLogicBackwards(param = "row", num = 1);
    loopingLogicBackwards(param = "row", num = 2);
    loopingLogicBackwards(param = "row", num = 3);
  }
  else if (direction == '39') {
    // Right Arrow
    loopingLogicForwards(param = "row", num = 2);
    loopingLogicForwards(param = "row", num = 1);
    loopingLogicForwards(param = "row", num = 0);
    loopingLogicForwards(param = "row", num = 2);
    loopingLogicForwards(param = "row", num = 1);
    loopingLogicForwards(param = "row", num = 0);
    loopingLogicForwards(param = "row", num = 2);
    loopingLogicForwards(param = "row", num = 1);
    loopingLogicForwards(param = "row", num = 0);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function checkIfEmpty(element) {
  return element.children.length == 0;
}
function loopingLogicForwards(param, num) {
  let collection = document.getElementsByClassName(param+num);
  let target = document.getElementsByClassName(param+(num+1));

  for (let index = 0; index < collection.length; index++) {
    let e1 = collection[index];
    let e2 = target[index];
    if (!e1.hasChildNodes()){
      continue;
    }
    let c1 = e1.children[0];

    if (!e2.hasChildNodes()){
      e1.removeChild(c1);
      e2.appendChild(c1);
      continue;
    }
    let c2 = e2.children[0];

    if (c1.innerHTML == c2.innerHTML) {
      e1.removeChild(c1);
      e2.removeChild(c2);
      let newD = document.createElement("div");
      let c3 = c1.innerHTML;
      newD.className = "gamePiece a" + (parseInt(c3) * 2);
      newD.innerHTML = parseInt(c3) * 2;
      e2.appendChild(newD);
      continue;
    }
  }
}
function loopingLogicBackwards(param, num) {
  let collection = document.getElementsByClassName(param+num);
  let target = document.getElementsByClassName(param+(num-1));

  for (let index = collection.length-1; index >= 0; index--) {
    let e1 = collection[index];
    let e2 = target[index];
    if (!e1.hasChildNodes()){
      continue;
    }
    let c1 = e1.children[0];

    if (!e2.hasChildNodes()){
      e1.removeChild(c1);
      e2.appendChild(c1);
      continue;
    }
    let c2 = e2.children[0];

    if (c1.innerHTML == c2.innerHTML) {
      e1.removeChild(c1);
      e2.removeChild(c2);
      let newD = document.createElement("div");
      let c3 = c1.innerHTML;
      newD.className = "gamePiece a" + (parseInt(c3) * 2);
      newD.innerHTML = parseInt(c3) * 2;
      e2.appendChild(newD);
      continue;
    }
  }
}
function loopingLogicDownwards(param, num) {
  let collection = document.getElementsByClassName(param+num);
  let target = document.getElementsByClassName(param+(num+1));
  collection = collection[0].children;
  target = target[0].children;
  for (let index = 0; index < collection.length; index++) {
    let e1 = collection[index];
    let e2 = target[index];
    if (!e1.hasChildNodes()){
      continue;
    }
    let c1 = e1.children[0];

    if (!e2.hasChildNodes()){
      e1.removeChild(c1);
      e2.appendChild(c1);
      continue;
    }
    let c2 = e2.children[0];

    if (c1.innerHTML == c2.innerHTML) {
      e1.removeChild(c1);
      e2.removeChild(c2);
      let newD = document.createElement("div");
      let c3 = c1.innerHTML;
      newD.className = "gamePiece a" + (parseInt(c3) * 2);
      newD.innerHTML = parseInt(c3) * 2;
      e2.appendChild(newD);
      continue;
    }
  }
}
function loopingLogicUpwards(param, num) {
  let collection = document.getElementsByClassName(param+num);
  let target = document.getElementsByClassName(param+(num-1));
  collection = collection[0].children;
  target = target[0].children;
  for (let index = collection.length-1; index >= 0; index--) {
    let e1 = collection[index];
    let e2 = target[index];
    if (!e1.hasChildNodes()){
      continue;
    }
    let c1 = e1.children[0];

    if (!e2.hasChildNodes()){
      e1.removeChild(c1);
      e2.appendChild(c1);
      continue;
    }
    let c2 = e2.children[0];

    if (c1.innerHTML == c2.innerHTML) {
      e1.removeChild(c1);
      e2.removeChild(c2);
      let newD = document.createElement("div");
      let c3 = c1.innerHTML;
      newD.className = "gamePiece a" + (parseInt(c3) * 2);
      newD.innerHTML = parseInt(c3) * 2;
      e2.appendChild(newD);
      continue;
    }
  }
}