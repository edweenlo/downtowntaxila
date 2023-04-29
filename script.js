/* fade header in and out based on scroll depth */
const header = document.querySelector('header');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const heroHeight = hero.offsetHeight;
  const scrollPosition = window.scrollY;
  const scrollThreshold = heroHeight * 0.2;

  if (scrollPosition > scrollThreshold) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
});

/* animate 24/7 text */
document.addEventListener('scroll', function () {
    const animatedText = document.querySelector('.animated-text');
    const textPosition = animatedText.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (textPosition <= windowHeight * 0.75) {
        animatedText.style.opacity = '1';
    } else {
        animatedText.style.opacity = '0';
    }
});


  
  