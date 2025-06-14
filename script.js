const display = document.querySelector('.js-display');
const buttons = document.querySelectorAll('.js-btn');

let equation = '';
let answer = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (display.textContent === 'Error') {
      display.textContent = '0';
    }

    if (button.innerHTML === '=') {
      if (display.textContent !== '0') {
        try {
          answer = Math.round(eval(equation) * 100) / 100;
          equation = answer.toString();  
        } catch (e) {
          equation = 'Error';
        }
      }
    } else if (button.innerHTML === 'AC') {
      equation = '';
      answer = '';
    } else if (button.innerHTML === '⌫') {
      equation = equation.slice(0, -1);
    } else {
      if (display.textContent === '0') {
        equation = '';
      }
      equation += button.innerHTML;
    }

    display.textContent = equation || '0';
  });
});