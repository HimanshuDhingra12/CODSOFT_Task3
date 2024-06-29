let string = "";
let keys = document.querySelectorAll('button');
Array.from(keys).forEach((button) => {
  button.addEventListener('click', (e) => {
    const display = document.querySelector('input');
    if (e.target.innerHTML == '=') {
      string = string.replace('x', '*');
      string = string.replace('÷', '/');

      string = eval(string);
      if (isNaN(string)) {
        display.value = "undefined";
      } else {
        display.value = string;
      }
    }
    else if (e.target.innerHTML == 'AC') {
      string = "";
      display.value = string;
    }
    else if (e.target.innerHTML == 'C') {
      string = string.slice(0, -1);
      display.value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      display.value = string;
    }
  })
})