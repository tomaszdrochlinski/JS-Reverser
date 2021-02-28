const textInp = document.querySelector('.text-inp');
const btn = document.querySelector('.btn');
const disp = document.querySelector('.disp');

const reverseString = (str) => {
  const arr = new Array();
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str.charAt(i));
  }

  let newStr = new String('');
  arr.forEach((el) => {
    newStr += el;
  });

  return newStr;
};

btn.addEventListener('click', (e) => {
  const word = new String(textInp.value);

  if (word != '') {
    disp.style.opacity = 0;
    setTimeout(() => {
      disp.innerHTML = `${reverseString(word)} &#128565;`;
    }, 300);

    setTimeout(() => {
      disp.style.opacity = 1;
    }, 300);
  }
});
