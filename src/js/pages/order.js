import IMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {
  const formOrder = document.querySelector('.form-order');
  const nameInp = document.querySelector('.form__input-name');
  const addressInp = document.querySelector('.form__input-address');
  const phoneInp = document.querySelector('.form__input-phone');
  const success = document.querySelector('.success');
  const order = document.querySelector('.order');

  if (phoneInp) {
    const maskOptions = {
      mask: '+{7}(000)000-00-00',
    };
    const mask = IMask(phoneInp, maskOptions);
  }

  formOrder &&
    formOrder.addEventListener('submit', (e) => {
      console.log(e);
      e.preventDefault();
      const isNameValid = validateName(nameInp.value);
      const isPhoneValid = validatePhone(phoneInp.value);

      if (isNameValid && isPhoneValid) {
        const data = new FormData(formOrder);
        //отправка формы заказа, замените на ваш запрос
        fetch('/order', {
          method: 'POST',
          body: data,
        })
          .then((response) => response.text())
          .then((result) => {
            success.classList.add('visible');
            order.classList.add('invisible');
          })
          .catch((error) => console.log(error));
      } else {
        nameInp.classList.toggle('invalid', !isNameValid);
        phoneInp.classList.toggle('invalid', !isPhoneValid);
      }
    });

  nameInp &&
    nameInp.addEventListener('input', function () {
      const isValid = validateName(this.value);
      this.classList.toggle('invalid', !isValid);
    });

  phoneInp &&
    phoneInp.addEventListener('input', function () {
      const isValid = validatePhone(this.value);
      this.classList.toggle('invalid', !isValid);
    });
  // Функция валидации телефона
  function validatePhone(phone) {
    const length = phoneInp.getAttribute('maxlength');
    return phone.length === Number(length);
  }
  // Функция валидации имени
  function validateName(name) {
    return name.length >= 3 && name.length <= 14;
  }
});
