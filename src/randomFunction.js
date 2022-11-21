import {color, shapeTypeArray} from "./consts";

const getRandomSize = () => {
  return Math.floor(Math.random() * 100);
}

const getRandomColor = () => {
  const index = Math.floor(Math.random() * color.length);
  return color[index];
}

const getRandomShareType = () => {
  const index = Math.floor(Math.random() * 4);
  return shapeTypeArray[index];
}

export {getRandomSize, getRandomColor, getRandomShareType};