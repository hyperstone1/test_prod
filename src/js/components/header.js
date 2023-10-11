import { searchContainer } from './ui/search';

const search = document.querySelector('.header__search-inp');
const searchBtn = document.querySelector('.header__search');
const header = document.querySelector('.header');
export const headerContainer = document.querySelector('.header_container');
const result = document.querySelector('.result');
export const cabinet = document.querySelector('.cabinet');
const controlsUser = document.querySelector('.header__controls-user');
const cabinetItems = document.querySelectorAll('.cabinet__list-item');
const modal = document.querySelector('.modal');
const formLogin = document.querySelector('.form-login');
const headerControls = document.querySelectorAll('.control');
const modalTypes = ['login', 'register', 'favorites', 'cart'];
controlsUser.addEventListener('click', (e) => {
  cabinet.classList.toggle('visible');
  const modalTypeAuth = e.target.dataset.modal;
  if (!modalTypeAuth) {
    modal.className = 'modal';
  }
  const searchBar = document.querySelector('.search_bar');
  if (searchBar) {
    searchBar.classList.add('opac');
    setTimeout(() => {
      searchBar.classList.remove('opac');
      searchBar.classList.remove('visible');
      searchBar.remove();
    }, 480);
  }
});

cabinetItems.forEach((item) => {
  item.addEventListener('click', () => {
    // const modal = item.dataset.modal;
    modalTypes.forEach((item) => {
      const modalType1 = modal.querySelector(`.${item}`);
      modalType1.classList.remove('visible');
      modal.classList.remove(item);
    });

    console.log(modal);

    const dataModal1 = item.dataset.modal;
    if (dataModal1) {
      const modalType1 = document.querySelector(`.${dataModal1}`);
      modalType1.classList.add('visible');
      modal.classList.add(dataModal1);
    } else {
      localStorage.clear();
      const cabinets = cabinet.querySelectorAll('.cabinet__list');
      cabinets.forEach((item) => {
        if (item.classList.contains('authorized')) {
          item.classList.remove('visible');
        } else {
          item.classList.remove('invisible');
        }
      });
    }
  });
});

// search.addEventListener('focus', () => {
//   searchBtn.classList.add('active');
// });

// search.addEventListener('blur', () => {
//   searchBtn.classList.remove('active');
// });

searchBtn.addEventListener('click', (e) => {
  const isSearch = document.querySelector('.search_bar');
  if (isSearch && (isSearch.classList.contains('opac') || isSearch.classList.contains('appear'))) {
    e.preventDefault();
  } else {
    if (!isSearch) {
      searchContainer.classList.add('appear');
      headerContainer.appendChild(searchContainer);
      modal.className = 'modal';
      cabinet.className = 'cabinet';

      searchContainer.addEventListener('input', (event) => {
        // здесь ваш код для поиска
        console.log(event.target.value);
        document.body.style.overflow = 'hidden';
        if (!result.classList.contains('visible')) {
          result.classList.add('visible');
          if (window.innerWidth > 769) {
            header.classList.add('back');
          }
        }
        if (event.target.value.trim() !== '') {
          result.querySelector('.result__list').classList.add('visible');
          result.querySelector('.result__null').classList.remove('visible');
        } else {
          result.querySelector('.result__null').classList.add('visible');
          result.querySelector('.result__list').classList.remove('visible');
        }
      });
      setTimeout(() => {
        searchContainer.classList.remove('appear');
      }, 480);
      const searchBarClose = document.querySelector('.search_bar__close');
      searchBarClose.addEventListener('click', () => {
        searchContainer.classList.add('opac');
        if (window.innerWidth > 769) {
          header.classList.remove('back');
        }
        result.classList.add('opac');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
          searchContainer.classList.remove('opac');
          headerContainer.contains(searchContainer)
            ? headerContainer.removeChild(searchContainer)
            : null;
          searchContainer.querySelector('input').value = '';
          result.classList.remove('opac');
          result.classList.remove('visible');
        }, 480);
      });
    } else {
      isSearch.classList.add('opac');
      result.classList.add('opac');
      setTimeout(() => {
        isSearch.classList.remove('opac');
        headerContainer.removeChild(isSearch);
        searchContainer.querySelector('input').value = '';
        result.classList.remove('opac');
        result.classList.remove('visible');
      }, 480);
    }
  }
});
