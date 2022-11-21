const disabledButton = (button) => {
  button.disabled = true;
}

const activateButton = (button) => {
  button.disabled = false;
}

export {activateButton, disabledButton};