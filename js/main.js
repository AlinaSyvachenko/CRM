document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('nav').classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function () {
  const navButtons = document.querySelectorAll('.nav__item');
  const sections = document.querySelectorAll('.section');
  const navButtonsArray = Array.from(navButtons);
  const sectionsArray = Array.from(sections);

  navButtonsArray.forEach(function (button, index) {
    button.addEventListener('click', function () {
      sectionsArray.forEach(function (section) {
        section.style.display = 'none';
      });
      sectionsArray[index].style.display = 'block';
    });
  });
});