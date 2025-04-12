window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  document.querySelector('.layer1').style.transform = `translateY(${scroll * 0.3}px)`;
  document.querySelector('.layer2').style.transform = `translateY(${scroll * 0.2}px)`;
  document.querySelector('.layer3').style.transform = `translateY(${scroll * 0.1}px)`;
  document.querySelector('.layer4').style.transform = `translateY(${scroll * 0.05}px)`;
});
