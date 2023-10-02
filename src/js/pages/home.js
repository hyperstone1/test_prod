document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.banner__card');
  const bannerContainer = document.querySelector('.banner__slider');
  const modal = document.querySelector('.modal');
  const headerControls = document.querySelectorAll('.control');
  const modalClose = document.querySelectorAll('.modal__close');
  const formLinks = document.querySelectorAll('.form__navigation-link');
  const register = modal.querySelector('.register');
  const login = modal.querySelector('.login');
  const formBtns = modal.querySelectorAll('.form-btn');
  let currentCard = null; // переменная для хранения текущей карточки
  const forms = document.querySelectorAll('.form');
  const inputEmail = document.querySelectorAll('.form__input-email');
  const inputPass = document.querySelectorAll('.form__input-pass');

  const linkContacts = document.querySelectorAll('.link-contacts');
  const contacts = document.querySelector('.contacts');
  const close = contacts.querySelector('.contacts__close');
  const productClose = document.querySelector('.product__close');
  const product = document.querySelector('.product');

  //кнопки купить
  const resultCardBuy = document.querySelectorAll('.result__card-buy');
  const bannerBuyBtn = document.querySelectorAll('.banner__buy-btn');

  const categoriesCard = document.querySelectorAll('.categories__card');
  const categoryList = document.querySelectorAll('.category__list');
  const listClose = document.querySelector('.list__close');
  const list = document.querySelector('.list');

  categoriesCard.forEach((card) => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      categoryList.forEach((list) => {
        if (list.classList.contains(category)) {
          categoryList.forEach((list) => {
            list.classList.remove('visible');
          });
          categoriesCard.forEach((item) => {
            item.classList.remove('active');
          });
          card.classList.toggle('active');
          const container = list.closest('.list');
          console.log('container: ', container);
          container.classList.add('visible');
          list.classList.add('visible');
          console.log(list);
          return;
        }
      });
    });
  });

  listClose.addEventListener('click', () => {
    list.classList.remove('visible');
    categoryList.forEach((list) => {
      list.classList.remove('visible');
    });
    categoriesCard.forEach((item) => {
      item.classList.remove('active');
    });
  });

  bannerBuyBtn.length > 0 &&
    bannerBuyBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        product.classList.add('visible');
      });
    });

  resultCardBuy.length > 0 &&
    resultCardBuy.forEach((btn) => {
      btn.addEventListener('click', () => {
        product.classList.add('visible');
      });
    });

  linkContacts.forEach((btn) => {
    btn.addEventListener('click', () => {
      contacts.classList.add('visible');
    });
  });

  close &&
    close.addEventListener('click', () => {
      contacts.classList.remove('visible');
    });

  productClose &&
    productClose.addEventListener('click', () => {
      product.classList.remove('visible');
    });

  contacts.addEventListener('click', (e) => {
    const target = e.target.closest('.contacts_container');
    if (!target) {
      contacts.classList.remove('visible');
    }
  });

  inputEmail.forEach((emailInput) => {
    emailInput.addEventListener('input', function () {
      const isValid = validateEmail(this.value);
      this.classList.toggle('invalid', !isValid);
    });
  });

  inputPass.forEach((passInput) => {
    passInput.addEventListener('input', function () {
      console.log(this.value);
      const isValid = validatePass(this.value);
      this.classList.toggle('invalid', !isValid);
    });
  });

  // Функция валидации email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  // Функция валидации password
  function validatePass(pass) {
    const passRegex = /^(?=.*\d).{3,}$/;
    console.log(pass);
    return passRegex.test(pass);
  }
  const oldPrices = document.querySelectorAll('.result__card-price--old');
  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = e.target.querySelector('input[name="email"]');
      const pass = e.target.querySelector('input[name="pass"]');
      const passConfirm = e.target.querySelector('.pass-confirm');
      console.log(`${email}, ${pass}`);
      // Проверяем валидность каждого поля
      const isEmailValid = validateEmail(email.value);
      const isPassValid = validatePass(pass.value);
      const isPassConfirm = null;
      let dataModal = null;
      if (form.classList.contains('form-register')) {
        dataModal = 'register';
        isPassConfirm = passConfirm.value === pass.value;
        console.log('isPassConfirm: ', isPassConfirm);
        // Если все поля прошли валидацию, отправляем форму
        !isPassConfirm
          ? (passConfirm.classList.add('invalid'), pass.classList.add('invalid'))
          : (passConfirm.classList.remove('invalid'), pass.classList.remove('invalid'));
      } else {
        dataModal = 'login';
      }

      if (isEmailValid && isPassValid) {
        const data = new FormData(form);
        modal.classList.remove(dataModal);
        localStorage.setItem('auth', true);
        oldPrices.forEach((item) => {
          item.classList.add('visible');
        });
        const authorized = document.querySelectorAll('.cabinet__list');
        authorized.forEach((cabinet) => {
          if (cabinet.classList.contains('authorized')) {
            cabinet.classList.add('visible');
          } else {
            cabinet.classList.add('invisible');
          }
        });
        fetch('/register', {
          method: 'POST',
          body: data,
        })
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
        console.log(data);
      } else {
        email.classList.toggle('invalid', !isEmailValid);
        pass.classList.toggle('invalid', !isPassValid);
      }
    });
  });

  // // отправка формы
  // formBtns.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     const type = e.target.closest('.login');
  //     if (type) {
  //       // ваш запрос при логине

  //       console.log('type: ', type);
  //     } else {
  //       // ваш запрос при регистрации
  //       console.log('type: ', type);
  //     }
  //   });
  // });

  modalClose.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log('click');
      modal.classList.remove('favorites', 'login', 'cart', 'register');
    });
  });

  const modalTypes = ['login', 'register', 'favorites', 'cart'];

  headerControls.forEach((control) => {
    control.addEventListener('click', (e) => {
      if (!control.classList.contains('header__controls-user')) {
        const dataModal = control.dataset.modal;
        const modalType = modal.querySelector(`.${dataModal}`);
        headerControls.forEach((item) => {
          const dataModal1 = item.dataset.modal;
          const modalType1 = modal.querySelector(`.${dataModal1}`);
          modalType1.classList.remove('visible');
          modal.classList.remove(dataModal1);
        });

        modalTypes.forEach((item) => {
          const modalType1 = modal.querySelector(`.${item}`);
          modalType1.classList.remove('visible');
          modal.classList.remove(item);
        });

        modalType.classList.add('visible');
        console.log(modalType);
        modal.classList.add(dataModal);
      }
    });
  });

  formLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (link.classList.contains('link-register')) {
        modal.classList.remove('favorites', 'login', 'cart', 'register');
        modal.classList.add('register');
        login.classList.remove('visible');
        register.classList.add('visible');
      } else {
        modal.classList.remove('favorites', 'login', 'cart', 'register');
        modal.classList.add('login');
        register.classList.remove('visible');
        login.classList.add('visible');
      }
    });
  });

  // window.addEventListener('mousemove', (e) => {

  // });
  function handleHover(e) {
    const targetCard = e.target.closest('.banner__card'); // находим ближайшую карточку
    const isInsideBanner = e.target.closest('.banner__slider'); // проверяем, находится ли курсор внутри блока .banner__slider

    if (isInsideBanner) {
      // если курсор находится внутри блока .banner__slider
      if (targetCard && targetCard !== currentCard) {
        // если нашли новую карточку
        currentCard = targetCard; // обновляем текущую карточку
        cards.forEach((card) => {
          if (card === currentCard) {
            // если это текущая карточка
            card.classList.remove('blur');
            card.classList.add('hover');
          } else {
            // если это другая карточка
            card.classList.add('blur');
            card.classList.remove('hover');
          }
        });
      }
    } else {
      // если курсор не находится внутри блока .banner__slider
      currentCard = null; // сбрасываем текущую карточку
      cards.forEach((card) => {
        card.classList.remove('blur');
        card.classList.remove('hover');
      });
    }
  }
  function handleResize() {
    if (window.innerWidth < 769) {
      window.removeEventListener('mousemove', handleHover);
    } else {
      window.addEventListener('mousemove', handleHover);
    }
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('load', handleResize);
});
