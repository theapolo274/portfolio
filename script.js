window.addEventListener('scroll', () => {
  let elements = document.querySelectorAll('.scroll-effect');
  elements.forEach((element) => {
      let position = element.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.3;

      if (position < screenPosition) {
          element.classList.add('active');
      }
  });
});
document.getElementById('mobile-menu').addEventListener('click', function() {
  document.querySelector('.navbar ul').classList.toggle('open');
});
