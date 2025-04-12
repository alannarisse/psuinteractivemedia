const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in, .reveal').forEach(el => {
  observer.observe(el);
});

const horizontalSection = document.querySelector('.horizontal-scroll-wrapper');
const horizontalContent = document.querySelector('.horizontal-scroll');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const sectionTop = horizontalSection.offsetTop;
  const sectionHeight = horizontalSection.offsetHeight;

  if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
    const scrollDistance = window.scrollY - sectionTop;
    horizontalContent.style.transform = `translateX(-${scrollDistance}px)`;
  }
});