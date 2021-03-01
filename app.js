const textInp = document.querySelector('.text-inp');
const btn = document.querySelector('.btn');
const disp = document.querySelector('.disp');

btn.addEventListener('click', (e) => {
  const text = new String(textInp.value);

  disp.style.opacity = 0;
  setTimeout(() => {
    disp.innerHTML = `${reverseString(text)} &#128565;`;
  }, 300);

  setTimeout(() => {
    disp.style.opacity = 1;
  }, 300);
});

const reverseString = (str) => {
  let newStr = new String('');

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str.charAt(i);
  }

  return newStr;
};
