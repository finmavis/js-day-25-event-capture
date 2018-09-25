const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // Stop bubbling
};

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false, // default is false
  once: true // only run one time
}));