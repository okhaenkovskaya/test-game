window.onload = function() {

  buttonStart.addEventListener("click", startGame);
  buttonStop.addEventListener("click", stopGame);
  buttonPlus.addEventListener("click", addShare);
  buttonMinus.addEventListener("click", removeShare);

  disabledButton(buttonMinus)
  disabledButton(buttonPlus)

};


const buttonMinus = document.querySelector('.button-minus');
const buttonPlus = document.querySelector('.button-plus');
const buttonStop = document.querySelector('.button-stop');
const buttonStart = document.querySelector('.button-start');
let initialCount = 0;

const shapeTypeArray = ['star', 'circle', 'triangle', 'cube'];
const color = ['red', 'pink', 'yellow', 'orange','blue', 'green', 'gray', 'purple', 'teal', 'lightgray'];

const createShape = (type) => {
  switch(type) {
    case 'star':
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="${getRandomColor()}" width="${getRandomSize()}"  viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>`;
    case 'circle':
      return `<svg clip-rule="evenodd" fill="${getRandomColor()}" fill-rule="evenodd" width="${getRandomSize()}" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998"/></svg>`
    case 'triangle':
      return `<svg clip-rule="evenodd" fill="${getRandomColor()}" fill-rule="evenodd" width="${getRandomSize()}" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.095 19.882 9.248-16.5c.133-.237.384-.384.657-.384.272 0 .524.147.656.384l9.248 16.5c.064.115.096.241.096.367 0 .385-.309.749-.752.749h-18.496c-.44 0-.752-.36-.752-.749 0-.126.031-.252.095-.367z" fill-rule="nonzero"/></svg>`
    case 'cube':
      return `<svg clip-rule="evenodd" fill="${getRandomColor()}" fill-rule="evenodd" width="${getRandomSize()}" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3.514 6.61c-.317.179-.514.519-.514.887v8.95c0 .37.197.708.514.887 1.597.901 6.456 3.639 8.005 4.512.152.085.319.128.487.128.164 0 .328-.041.477-.123 1.549-.855 6.39-3.523 7.994-4.408.323-.177.523-.519.523-.891v-9.055c0-.368-.197-.708-.515-.887-1.595-.899-6.444-3.632-7.999-4.508-.151-.085-.319-.128-.486-.128-.168 0-.335.043-.486.128-1.555.876-6.405 3.609-8 4.508m15.986 2.115v7.525l-6.75 3.722v-7.578zm-15 7.425v-7.458l6.75 3.75v7.511zm.736-8.769 6.764-3.813 6.801 3.834-6.801 3.716z" fill-rule="nonzero"/></svg>`
    default:
     return `<svg width="${getRandomSize()}" fill="${getRandomColor()}" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>`
  }
}


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

const insertShare = (share) => {
  const container = document.querySelector('.screen');
  const shareWrapper = document.createElement('span');
  const top = `${getRandomSize()}`;
  const left = `${getRandomSize()}`;
  shareWrapper.classList.add('figure');
  shareWrapper.style.top = `${top}%`;
  shareWrapper.style.left = `${left}%`;

  if(top > 50 && left > 50) {
    shareWrapper.style.transform = "translate(-100%, -100%)";
  } else if(top > 50) {
    shareWrapper.style.transform = "translateY(-100%)";
  } else if(left > 50) {
    shareWrapper.style.transform = "translateX(-100%)";
  }

  shareWrapper.innerHTML = share;
  container.appendChild(shareWrapper);

  shareWrapper.addEventListener("click", deleteShare);
}


const deleteShare = (e) => {
  const figure = e.target.closest('.figure');
  figure.removeEventListener("click", deleteShare);
  decreaseCount(initialCount)

  if(initialCount < 1) {
    disabledButton(buttonMinus)
    disabledButton(buttonPlus)
  }
  figure.remove();
}

const deleteShares = () => {
  const figures = document.querySelectorAll('.figure');

  figures.forEach(figure => {
    figure.removeEventListener("click", deleteShare);
    figure.remove();
  });
}

const disabledButton = (button) => {
  button.disabled = true;
}

const activateButton = (button) => {
  button.disabled = false;
}

const increaseCount = (numb) => {
  const count = document.querySelector('.count span');
  count.textContent = `${++numb}`;
  initialCount = numb;
}

const decreaseCount = (numb) => {
  const count = document.querySelector('.count span');
  count.textContent = `${--numb}`;
  initialCount = numb;
}

const resetCount = () => {
  const count = document.querySelector('.count span');
  count.textContent = `0`;
}

const addShare = () => {
  insertShare(createShape(getRandomShareType()))
  increaseCount(initialCount)
}


const removeShare = () => {

  const figure = document.querySelector('.figure');

  decreaseCount(initialCount)

  if(initialCount < 1) {
    disabledButton(buttonMinus)
    disabledButton(buttonPlus)
  }

  figure.remove();

}

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












