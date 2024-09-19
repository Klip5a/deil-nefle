export function initializeCategories() {
  // Получаем все элементы с классом "categories__name" и заменяем пробел перед "И" на неразрывный пробел.
  const categoryNames = document.querySelectorAll(".categories__name");
  categoryNames.forEach((name) => {
    name.innerHTML = name.innerHTML.replace(/\sИ\s/g, " И&nbsp;");
  });

  // Получаем все элементы категорий и соответствующие кнопки для применения эффектов.
  const categoriesContents = document.querySelectorAll(".categories__content");
  const categoriesButtons = document.querySelectorAll(".categories__button");

  // Для каждой категории настраиваем эффекты при наведении мыши.
  categoriesContents.forEach((content, index) => {
    // Получаем соответствующую кнопку по индексу.
    const button = categoriesButtons[index];

    // Функция для применения эффекта при наведении.
    function hoverEffect() {
      button.style.border = "2px solid var(--color-lime)"; // Изменяем границу кнопки.
      button.style.backgroundColor = "var(--color-lime)"; // Меняем цвет фона кнопки.
      button.style.backgroundImage = 'url("./assets/icons/arrow-lavender.svg)'; // Меняем иконку на стрелку другого цвета.
      button.style.transition =
        "border 0.5s ease, background-color 0.5s ease, background-image 0.5s ease"; // Добавляем плавный переход для всех изменений.
    }

    // Функция для сброса эффекта при уходе курсора.
    function resetEffect() {
      button.style.border = "2px solid var(--color-lime)"; // Сбрасываем границу.
      button.style.backgroundColor = "transparent"; // Возвращаем прозрачный фон.
      button.style.backgroundImage = 'url("./assets/icons/arrow-lime.svg")'; // Возвращаем исходную иконку.
    }

    // Применяем эффекты при наведении и уходе курсора с элемента категории.
    content.addEventListener("mouseover", hoverEffect);
    content.addEventListener("mouseout", resetEffect);

    // Применяем такие же эффекты при наведении и уходе курсора с кнопки.
    button.addEventListener("mouseover", hoverEffect);
    button.addEventListener("mouseout", resetEffect);
  });
}
