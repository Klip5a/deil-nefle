document.addEventListener("DOMContentLoaded", function () {
  // Функция для получения элементов слайдера по индексу
  function getSliderElements(index) {
    return {
      slider: document.querySelector(`.slider__item:nth-child(${index})`),
      image: document.querySelector(`.slider__item:nth-child(${index}) .slider__image`),
      badge: document.querySelector(`.slider__item:nth-child(${index}) .slider__badge`),
      title: document.querySelector(`.slider__item:nth-child(${index}) .slider__title`),
      details: document.querySelector(`.slider__item:nth-child(${index}) .slider__details`),
      subtitle: document.querySelector(`.slider__item:nth-child(${index}) .slider__subtitle`),
      description: document.querySelector(`.slider__item:nth-child(${index}) .slider__description`),
      descriptionSecondary: document.querySelector(
        `.slider__item:nth-child(${index}) .slider__description--secondary`
      ),
      price: document.querySelector(`.slider__item:nth-child(${index}) .slider__price`),
      button: document.querySelector(`.slider__item:nth-child(${index}) .slider__button`),
      label: document.querySelector(`.slider__item:nth-child(${index}) .slider__label`),
    };
  }

  // Создаем массив слайдов, используя getSliderElements для каждого слайда
  const sliders = [1, 2, 3].map((index) => getSliderElements(index));

  // Размеры изображений для каждого слайда в различных состояниях
  const imageSizes = {
    1: { other: "159px", default: "199px", hover: "341px" },
    2: { other: "183px", default: "230px", hover: "394px" },
    3: { other: "158px", default: "198px", hover: "354px" },
  };

  let activeSlide = sliders[0]; // Активный слайд по умолчанию

  // Функция для обработки события "mouseenter" (наведение мыши на слайд)
  function handleMouseEnter(
    sliderElements,
    imageKey,
    otherTitles,
    otherDetails,
    otherLabel,
    otherImages
  ) {
    const {
      slider,
      image,
      badge,
      title,
      details,
      subtitle,
      description,
      descriptionSecondary,
      price,
      button,
    } = sliderElements;

    const imageSize = imageSizes[imageKey].hover; // Размер изображения при наведении

    // Если текущий активный слайд не тот, на который навели, сменить активный слайд
    if (activeSlide !== sliderElements) {
      activeSlide.slider.classList.remove("slider__item--expanded");
      activeSlide = sliderElements;
    }

    // Увеличение текущего слайда
    slider.style.flexGrow = "3";
    slider.style.width = "1160px";
    slider.style.transition = "flex-grow 1.5s ease, width 1.5s ease, background-color 1s ease";
    slider.classList.add("slider__item--expanded");

    // Изменение изображения при наведении
    image.style.width = imageSize;
    image.style.transform = `translateY(-50%) rotate(0deg)`;
    image.style.transition = "width 1.5s ease, transform 1.5s ease";

    // Показ и стилизация бейджа
    badge.style.opacity = "1";
    badge.style.visibility = "visible";
    badge.style.fontSize = "18px";
    badge.style.transition = "opacity 1s ease, font-size 1s ease";

    // Стилизация заголовка
    title.style.transition = "font-size 1.5s ease, opacity 1s ease";
    title.style.fontSize = "clamp(60px, 10.6vw, 212px)";

    // Стилизация блока с деталями
    details.style.left = "0";
    details.style.transform = "translateX(0)";
    details.style.opacity = "1";
    details.style.transition = "left 1.5s ease, transform 1.5s ease, opacity 0.5s ease";

    // Стилизация подзаголовка
    subtitle.style.left = "0";
    subtitle.style.transform = "translateX(0)";
    subtitle.style.fontSize = "28px";
    subtitle.style.transition = "left 1.5s ease, transform 1.5s ease , font-size 1.5s ease";

    // Скрытие основного описания
    description.style.opacity = "0";
    description.style.visibility = "hidden";

    // Показ вторичного описания
    descriptionSecondary.style.opacity = "1";
    descriptionSecondary.style.visibility = "visible";

    // Стилизация цены
    price.style.left = "0";
    price.style.transform = "translateX(0)";
    price.style.fontSize = "40px";
    price.style.color = "var(--color-lime)";
    price.style.transition =
      "color 1.5s ease, font-size 1.5s ease, left 1.5s ease, transform 1.5s ease";

    // Стилизация кнопки
    button.style.bottom = "29px";
    button.style.right = "-9px";
    button.style.opacity = "1";
    button.style.zIndex = "2";

    // Скрытие других заголовков
    otherTitles.forEach((otherTitle) => {
      otherTitle.style.visibility = "hidden";
      otherTitle.style.opacity = "0";
      otherTitle.style.fontSize = "70px";
      otherTitle.style.transition = "opacity 1s ease , visibility 1s ease, font-size 1s ease";
    });

    // Скрытие других деталей
    otherDetails.forEach((otherDetail) => {
      otherDetail.style.visibility = "hidden";
      otherDetail.style.opacity = "0";
      otherDetail.style.left = "50%";
      otherDetail.style.transform = "translateX(-50%)";
      otherDetail.style.transition =
        "opacity 1s ease , visibility 1s ease, left 1s ease, transform 1s ease";
    });

    // Показ других лейблов
    otherImages.forEach((otherImage, i) => {
      const otherImageSize = imageSizes[i === 0 ? 2 : i + 2].other;
      otherImage.style.width = otherImageSize;
      otherImage.style.transform = "translateY(-47%) rotate(7deg)";
      otherImage.style.transition = "width 1.5s ease, transform 1.5s ease";
    });

    // Показ других лейблов
    otherLabel.forEach((otherLabel) => {
      otherLabel.style.opacity = "1";
      otherLabel.style.visibility = "visible";
      otherLabel.style.transition = "opacity 1s ease, visibility 1s ease";
    });
  }

  // Функция для обработки события "mouseleave" (уход мыши со слайда)
  function handleMouseLeave(
    sliderElements,
    imageKey,
    otherTitles,
    otherDetails,
    otherLabel,
    otherImages
  ) {
    const {
      slider,
      image,
      badge,
      title,
      details,
      subtitle,
      description,
      descriptionSecondary,
      price,
      label,
      button,
    } = sliderElements;
    const imageSize = imageSizes[imageKey].default; // Размер изображения по умолчанию

    // Уменьшение слайда до первоначального состояния
    slider.style.flexGrow = "1";
    slider.style.width = "340px";
    slider.classList.remove("slider__item--expanded");

    // Восстановление состояния изображения
    image.style.width = imageSize;
    image.style.transform = "translateY(-50%) rotate(7deg)";
    image.style.transition = "width 1.5s ease, transform 1.5s ease";

    // Восстановление заголовка
    title.style.fontSize = "70px";
    title.style.visibility = "visible";
    title.style.opacity = "1";
    title.style.transition = "opacity 1s ease, font-size 1s ease, visibility 1s ease";

    // Скрытие бейджа
    badge.style.opacity = "0";
    badge.style.fontSize = "0px";
    badge.style.transition = "opacity 1s ease, font-size 1s ease";

    // Восстановление деталей
    details.style.left = "50%";
    details.style.transform = "translateX(-50%)";
    details.style.visibility = "visible";

    // Восстановление подзаголовка
    subtitle.style.left = "50%";
    subtitle.style.transform = "translateX(-50%)";
    subtitle.style.fontSize = "20px";
    subtitle.style.transition = "left 1.5s ease, transform 1.5s ease , font-size 1.5s ease";

    // Восстановление описания
    description.style.opacity = "1";
    description.style.visibility = "visible";
    descriptionSecondary.style.opacity = "0";
    descriptionSecondary.style.visibility = "hidden";

    // Восстановление цены
    price.style.left = "50%";
    price.style.transform = "translateX(-50%)";
    price.style.fontSize = "28px";
    price.style.color = "var(--color-white)";
    price.style.transition =
      "color 1.5s ease, font-size 1.5s ease, left 1.5s ease, transform 1.5s ease";

    // Стилизация label
    label.style.opacity = "0";
    label.style.visibility = "hidden";
    label.style.fontSize = "0px";
    label.style.transition = "opacity 0.5s ease, visibility 0.5s ease";

    // Скрытие кнопки
    button.style.right = "20%";
    button.style.bottom = "-50%";
    button.style.opacity = "0";

    // Показ других заголовков
    otherTitles.forEach((otherTitle) => {
      otherTitle.style.visibility = "visible";
      otherTitle.style.opacity = "1";
      otherTitle.style.transition = "opacity 1.5s ease";
    });

    // Показ других деталей
    otherDetails.forEach((otherDetail) => {
      otherDetail.style.visibility = "visible";
      otherDetail.style.opacity = "1";
      otherDetail.style.transition = "opacity 1.5s ease , visibility 1.5s ease";
    });

    // Восстановление других изображений
    otherImages.forEach((otherImage, i) => {
      const otherImageSize = imageSizes[i === 0 ? 2 : i + 2].default;
      otherImage.style.width = otherImageSize;
      otherImage.style.transition = "width 1.5s ease";
    });

    otherLabel.forEach((otherLabel) => {
      otherLabel.style.opacity = "0";
      otherLabel.style.visibility = "hidden";
      otherLabel.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
    });
  }

  // Добавляем события "mouseenter" и "mouseleave" на каждый слайд
  sliders.forEach((sliderElements, index) => {
    const otherTitles = sliders.filter((_, i) => i !== index).map((slider) => slider.title);
    const otherDetails = sliders.filter((_, i) => i !== index).map((slider) => slider.details);
    const otherLabel = sliders.filter((_, i) => i !== index).map((slider) => slider.label);
    const otherImages = sliders.filter((_, i) => i !== index).map((slider) => slider.image);

    // Наведение на слайд
    sliderElements.slider.addEventListener("mouseenter", () =>
      handleMouseEnter(
        sliderElements,
        index + 1,
        otherTitles,
        otherDetails,
        otherLabel,
        otherImages
      )
    );
    // Уход с слайда
    sliderElements.slider.addEventListener("mouseleave", () =>
      handleMouseLeave(
        sliderElements,
        index + 1,
        otherTitles,
        otherDetails,
        otherLabel,
        otherImages
      )
    );
  });
});
