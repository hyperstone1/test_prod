import ymaps from 'ymaps';
const placemark = '../../assets/images/common/placemark.png';

ymaps
  .load(`https://api-maps.yandex.ru/2.1/?lang=ru`)
  .then((maps) => {
    const map = new maps.Map('map', {
      center: [55.751574, 37.573856],
      zoom: 13,
    });
    const MyIconContentLayout = maps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
    );
    const myPlacemark = new maps.Placemark([55.751574, 37.573856], {
      hintContent: 'Метка',
      iconLayout: 'default#imageWithContent',
      // Размеры метки.
      iconImageHref: placemark,

      iconImageSize: [48, 48],

      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -24],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [15, 15],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout,
    });

    map.geoObjects.add(myPlacemark);
  })
  .catch((error) => console.log('Failed to load Yandex Maps', error));
