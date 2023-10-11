import Swiper from 'swiper';
import 'swiper/css';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './js/components/header';
import './js/components/footer';
import './js/components/categories';
import './js/pages/home';
import './js/pages/order';
import './js/utils/map';
import './js/utils/counter';
import './index.scss';
import 'animate.css';
import { WOW } from 'wowjs';
import 'wowjs/css/libs/animate.css';

import { Navigation, Pagination, Mousewheel } from 'swiper/modules';

const blogTop = document.querySelector('.blog__top');
const filterBtn = document.querySelectorAll('.category__list-filter');
const rangeSliders = document.querySelectorAll('.filter__price-range');

const blogCountCurrent = document.querySelector('.blog__count-current');
const blogCountLast = document.querySelector('.blog__count-last');

new WOW().init();

console.log('loaded');
if (window.innerWidth < 480) {
  // Получаем высоту видимой части экрана
  const windowHeight = window.innerHeight;
  const banner = document.querySelector('.banner');
  console.log(banner);
  banner.style.height = `${windowHeight}px`;
  // Устанавливаем высоту элемента равной высоте видимой части экрана
}

const swiper1 = new Swiper('.blog__list', {
  modules: [Navigation, Pagination, Mousewheel],
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 600,
  pagination: {
    el: '.blog__list-pagination',
  },
  mousewheel: true,
  on: {
    init: function (swiper) {
      if (window.innerWidth < 769) {
        console.log(swiper.slides);
        blogCountCurrent.textContent = 1;
        blogCountLast.textContent = swiper.slides.length;
      } else {
        console.log(swiper.slides);
        blogCountCurrent.textContent = swiper.activeIndex + 3;
        blogCountLast.textContent = swiper.slides.length;
      }
    },
    slideChange: function (swiper) {
      if (window.innerWidth < 769) {
        blogCountCurrent.textContent = swiper.activeIndex + 1;
      } else {
        blogCountCurrent.textContent = swiper.activeIndex + 3;
      }
    },
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.blog__list-pagination',
      },
      modules: [Navigation, Pagination],
    },
  },
});

filterBtn &&
  filterBtn.forEach((item) => {
    item.addEventListener('click', () => {
      const filter = item.closest('.category__list-wrapper').querySelector('.filter');
      filter.classList.toggle('visible');
    });
  });

if (rangeSliders.length > 0) {
  rangeSliders.forEach((rangeSlider) => {
    const inputs = rangeSlider.closest('.filter__price').querySelectorAll('.filter__price-inp');
    var sliderInstance = noUiSlider.create(rangeSlider, {
      start: [67000, 401000],
      // step: [1],
      connect: true,
      tooltips: true,
      range: {
        min: [0],
        max: [521000],
      },
      format: {
        to: function (value) {
          return parseInt(value).toLocaleString('ru-RU') + '';
        },
        from: function (value) {
          return value.replace('', '');
        },
      },
    });
    const tooltips = document.querySelectorAll('.noUi-tooltip');
    rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
      console.log('handle: ', tooltips[1]);
      var percentage =
        ((parseFloat(values[handle]) - sliderInstance.options.range.min) /
          (sliderInstance.options.range.max - sliderInstance.options.range.min)) *
        100000;
      console.log('percentage: ', percentage);
      // Если ползунок находится в промежутке от 80% до 100%
      if (percentage >= 90) {
        // Вычисляем новое значение left в зависимости от процента и ширины родительского блока
        var leftValue = -60 + (percentage - 90); // 1.5 - это коэффициент, на который вы хотите уменьшить left
        tooltips[1].style.left = leftValue + '%';
      } else {
        // Сбрасываем стиль left, если ползунок находится вне промежутка от 80% до 100%
        tooltips[1].style.left = '50%';
      }
    });

    inputs.forEach(function (input, handle) {
      input.addEventListener('input', function () {
        const value = this.value;
        const selectionStart = this.selectionStart;
        const prevValueLength = value.length;
        const newValue = value
          .replace(/[^0-9]/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
          .toLocaleString('ru-RU');
        const diff = newValue.length - prevValueLength;
        this.value = newValue;

        // Корректировка позиции курсора при удалении первого символа
        if (diff < 0 && selectionStart <= newValue.indexOf(' ')) {
          this.setSelectionRange(newValue.indexOf(' ') + 1, newValue.indexOf(' ') + 1);
        } else {
          this.setSelectionRange(selectionStart + diff, selectionStart + diff);
        }
      });
      input.addEventListener('change', function () {
        console.log(this.value.replace(/\s/g, ''));
        rangeSlider.noUiSlider.setHandle(handle, this.value.replace(/\s/g, ''));
      });
    });
  });
}

if (window.innerWidth < 769) {
  const swiper2 = new Swiper('.banner_container', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          ' <span class="pagination__space"></span> ' +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
      formatFractionCurrent: function (current) {
        return '0' + current;
      },
      formatFractionTotal: function (current) {
        return '0' + current;
      },
    },
    modules: [Pagination],
    on: {
      init: function (swiper) {
        const id = swiper.activeIndex;
        swiper.slides[id].classList.add('hover');
      },
      slideChange: function (swiper) {
        const banner = document.querySelector('.banner');
        const id = swiper.activeIndex;
        swiper.slides.forEach((item) => {
          if (item === swiper.slides[id]) {
            swiper.slides[id].classList.add('hover');
            const backgroundColor = window
              .getComputedStyle(swiper.slides[id])
              .getPropertyValue('background-color');
            banner.style.backgroundColor = backgroundColor;
          } else {
            item.classList.remove('hover');
          }
        });
      },
    },
  });
  const path = document.getElementById('curve');
  path && path.setAttribute('d', 'M 49.175 242.03 Q -10 89.175 40 0');
}
const swiper3 = new Swiper('.categories__list', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  enabled: true,

  breakpoints: {
    769: {
      enabled: false,
    },
  },
});
