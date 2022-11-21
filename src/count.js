let initialCount = 0;

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

export {increaseCount, decreaseCount, resetCount, initialCount};