// Handle navigation and scrolling
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    const topOffset = target.offsetTop - 100;
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
    target.classList.add('active');
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  });
});