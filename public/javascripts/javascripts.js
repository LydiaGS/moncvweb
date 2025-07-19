/*Menu Hamberger*/
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('active');
});
/*flèche haut*/
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });