const textInp = document.querySelector('.text-inp');
const btn = document.querySelector('.btn');
const disp = document.querySelector('.disp');

const reverseString = (str) => {
  let newStr = new String('');

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str.charAt(i);
  }

  return newStr;
};

btn.addEventListener('click', (e) => {
  const word = new String(textInp.value);

  disp.style.opacity = 0;
  setTimeout(() => {
    disp.innerHTML = `${reverseString(word)} &#128565;`;
  }, 300);

  setTimeout(() => {
    disp.style.opacity = 1;
  }, 300);
});
