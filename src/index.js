import Swiper from 'swiper';
import 'swiper/css';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './js/components/header';
import './js/components/footer';
import './js/pages/home';
import './js/pages/order';
import './js/utils/map';
import './index.scss';

import { Navigation, Pagination } from 'swiper/modules';

const blogTop = document.querySelector('.blog__top');
const filterBtn = document.querySelector('.category__list-filter');
const filter = document.querySelector('.filter');
const rangeSlider = document.querySelector('.filter__price-range');
const inputs = document.querySelectorAll('.filter__price-inp');

const blogCountCurrent = document.querySelector('.blog__count-current');
const blogCountLast = document.querySelector('.blog__count-last');

const swiper1 = new Swiper('.blog__list', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.blog__list-pagination',
  },
  modules: [Navigation, Pagination],
  on: {
    init: function (swiper) {
      console.log(swiper.slides);
      blogCountCurrent.textContent = swiper.activeIndex + 3;
      blogCountLast.textContent = swiper.slides.length;
    },
    slideChange: function (swiper) {
      blogCountCurrent.textContent = swiper.activeIndex + 3;
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
  filterBtn.addEventListener('click', () => {
    filter.classList.toggle('visible');
  });

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [67000, 521000],
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

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
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
