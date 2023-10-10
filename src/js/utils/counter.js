// const minus = document.querySelector('.card__price-counter--minus');
// const plus = document.querySelector('.card__price-counter--plus');
// const count = document.querySelector('.card__price-counter--count');
const counters = document.querySelectorAll('.card__price-counter');

counters.forEach((counter) => {
  const minus = counter.querySelector('.card__price-counter--minus');
  const plus = counter.querySelector('.card__price-counter--plus');
  const count = counter.querySelector('.card__price-counter--count');
  let currentValue = 1;

  minus.addEventListener('click', () => {
    if (currentValue > 1) {
      currentValue--;
      updateCounter();
    }
  });

  plus.addEventListener('click', () => {
    currentValue++;
    updateCounter();
  });

  function updateCounter() {
    count.textContent = currentValue;
  }
});
