const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

fadeElements.forEach((element) => {
  observer.observe(element);
});

const infoBtn = document.getElementById('infoBtn');

infoBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 700,
    behavior: 'smooth'
  });
});
