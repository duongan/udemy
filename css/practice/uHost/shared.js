const toggleBtn = document.querySelector('.toggle-button');
const mobileNavEle = document.querySelector('.mobile-nav');
const backdropEle = document.querySelector('.backdrop');

toggleBtn.addEventListener('click', () => {
  mobileNavEle.classList.add('open');
  backdropEle.classList.add('open');
});

backdropEle.addEventListener('click', () => {
  mobileNavEle.classList.remove('open');
  backdropEle.classList.remove('open');
});
