function Slider(slider){
  if (!(slider instanceof Element)) {
    throw new Error ('No slider passed in');
  }

  let current;
  let prev;
  let next;

  const slides = slider.querySelectorAll('.slides')
  const prevButton = document.querySelector('.goPrev');
  const nextButton = document.querySelector('.goNext')
  
function startSlider() {
  current =
}
}
