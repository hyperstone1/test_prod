import { product } from '../utils/constants';
document.addEventListener('DOMContentLoaded', function () {
  const categoriesCard = document.querySelectorAll('.categories__card');
  const categoryList = document.querySelectorAll('.category__list');
  const listClose = document.querySelector('.list__close');
  const list = document.querySelector('.list');
  const filters = document.querySelectorAll('.filter');

  //   const resultBuyBtn = document.querySelectorAll('.result__card-buy');
  //   const cart = [];
  const loadItems = {
    mirrors: { items: 5 },
    lamps: { items: 5 },
    chairs: { items: 5 },
    tables: { items: 5 },
  };

  //   resultBuyBtn.forEach((btn) => {
  //     btn.addEventListener('click', (e) => {
  //       const item = e.target.closest('.result__card');
  //       const name = item.querySelector('.result__card-name').textContent;
  //       const category = item.querySelector('.result__card-info--category').textContent;
  //       const price = item.querySelector('.result__card-price--count').textContent;
  //       const color = item.querySelector('.result__card-color').dataset.color;
  //       const img = item.querySelector('.result__card-img img').getAttribute('src');

  //       const itemCart = { name, category, price, color, img };
  //       cart.push(itemCart);
  //       console.log(itemCart);
  //     });
  //   });

  categoriesCard.forEach((card) => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      let isVisible = false; // Флаг для отслеживания состояния видимости

      categoryList.forEach((list) => {
        if (list.classList.contains(category)) {
          if (list.classList.contains('visible')) {
            isVisible = true; // Устанавливаем флаг в true, если элемент уже видим
          }

          categoryList.forEach((list) => {
            list.classList.remove('visible');
            const cards = list.querySelectorAll('.result__card');
            const btn = list.querySelector('.btn-load');
            cards.forEach((item, id) => {
              if (id > 4) {
                item.classList.remove('visible');
              }
              item.addEventListener('click', (e) => {
                console.log(e.target);
                if (
                  !e.target.classList.contains('result__card-buy--icon') &&
                  !e.target.classList.contains('result__card-buy--text') &&
                  !e.target.classList.contains('result__card-buy')
                ) {
                  product.classList.add('visible');
                }
              });
            });
            for (let category in loadItems) {
              loadItems[category].items = 5;
            }
            if (loadItems[category].items >= cards.length) {
              btn.style.display = 'none'; // Если все элементы загружены, скрываем кнопку
            } else {
              btn.style.display = 'flex';
            }
          });

          categoriesCard.forEach((item) => {
            item.classList.remove('active');
          });
          filters.forEach((filter) => {
            filter.classList.remove('visible');
          });

          if (!isVisible) {
            card.classList.add('active');
            const container = list.closest('.list');
            container.classList.add('visible');
            list.classList.add('visible');
          }

          return;
        }
      });
    });
  });

  listClose &&
    listClose.addEventListener('click', () => {
      list.classList.remove('visible');
      categoryList.forEach((list) => {
        list.classList.remove('visible');
      });
      categoriesCard.forEach((item) => {
        item.classList.remove('active');
      });
    });

  categoryList.forEach((list) => {
    const btn = list.querySelector('.btn-load');
    const resultCards = list.querySelectorAll('.result__card');
    const category = list.dataset.category;

    btn.addEventListener('click', function () {
      loadItems[category].items += 5;
      for (let i = 0; i < resultCards.length; i++) {
        if (i < loadItems[category].items) {
          resultCards[i].classList.add('visible');
        } else {
          resultCards[i].classList.remove('visible');
        }
      }
      console.log(loadItems[category].items >= resultCards.length);
      if (loadItems[category].items >= resultCards.length) {
        btn.style.display = 'none'; // Если все элементы загружены, скрываем кнопку
      } else {
        btn.style.display = 'block';
      }
    });

    for (let i = 0; i < resultCards.length; i++) {
      if (i < loadItems[category].items) {
        resultCards[i].classList.add('visible');
      } else {
        resultCards[i].classList.remove('visible');
      }
    }
    if (loadItems[category].items >= resultCards.length) {
      btn.style.display = 'none'; // Если все элементы загружены, скрываем кнопку
    }
  });
});
