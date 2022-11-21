import {buttonMinus, buttonPlus, buttonStop, buttonStart} from "./settings";
import {increaseCount, resetCount} from "./count";
import {activateButton, disabledButton} from "./button";
import {getRandomShareType} from "./randomFunction";
import {removeShare, addShare, deleteShares, insertShare, createShape} from "./share";


window.onload = function() {
  buttonStart.addEventListener("click", startGame);
  buttonStop.addEventListener("click", stopGame);
  buttonPlus.addEventListener("click", addShare);
  buttonMinus.addEventListener("click", removeShare);

  disabledButton(buttonMinus)
  disabledButton(buttonPlus)
};


const startGame = () => {
  deleteShares()
  insertShare(createShape(getRandomShareType()))
  increaseCount(0)

  activateButton(buttonMinus)
  activateButton(buttonPlus)
}


const stopGame = () => {
  deleteShares()
  resetCount()

  disabledButton(buttonMinus)
  disabledButton(buttonPlus)
}
