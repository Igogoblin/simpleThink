const petsKarusel = document.querySelector(".pets-karusel");
const appear = document.querySelector(".appear");
const disappear = document.querySelector(".disappear");
const invert = document.querySelector(".invert");
const karuselArea = document.querySelector(".karusel-area");
let karuselTrack = document.querySelector(".karusel-track");
let karuselBlock = document.querySelector(".karusel-block");
const pets = [
  {
    id: 0,
    title: "Katrine",
    subtitle: "Cat - British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    image: "../images/pets-katrine.png",
  },
  {
    id: 1,
    title: "Jennifer",
    subtitle: "Dog - Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    image: "../images/pets-jennifer.png",
  },
  {
    id: 2,
    title: "Woody",
    subtitle: "Dog - Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    image: "../images/pets-woody.png",
  },
  {
    id: 3,
    title: "Sophia",
    subtitle: "Dog - Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    image: "../images/pets-sophia.png",
  },
  {
    id: 4,
    title: "Timmy",
    subtitle: "Cat - British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    image: "../images/pets-timmy.png",
  },
  {
    id: 5,
    title: "Charly",
    subtitle: "Dog - Jack Russell Terrier ",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    image: "../images/pets-charly.png",
  },
  {
    id: 6,
    title: "Scarlett",
    subtitle: "Dog - Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    image: "../images/pets-scarlet.png",
  },
  {
    id: 7,
    title: "Freddie",
    subtitle: "Cat - British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    image: "../images/pets-freddie.png",
  },
];
console.log(
  0,
  "Katrine",
  1,
  "Jennifer",
  2,
  "Woody",
  3,
  "Sophia",
  4,
  "Timmy",
  5,
  "Charly",
  6,
  "Scarlett",
  7,
  "Freddie"
);
let startArray = () => {
  // Шаг 1: создаем массив цифр от 1 до 8
  let digits = [1, 2, 3, 4, 5, 6, 7, 0];

  // Функция для перемешивания массива (алгоритм Фишера-Йетса)
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Шаг 2: добавляем еще одно случайное число для достижения длины 9
  digits.push(Math.floor(Math.random() * 8));

  let result;
  do {
    result = shuffle([...digits]);
  } while (
    hasDuplicates(result.slice(0, 6)) ||
    hasDuplicates(result.slice(4, 9))
  );

  return result;
};

// Вспомогательная функция для проверки на дубликаты в массиве
function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}
let ourArray = startArray(); // основа с чем мы потом работаем !!!!!!!!!!!!!!!!!!!!!!!!!
console.log(ourArray);
let buildCard = (index) => {
  const card = document.createElement("div"); // Создаем div элемент
  card.classList.add("pets-card"); // Добавляем класс karusel-block

  // Создаем img элемент и настраиваем его
  const img = document.createElement("img");
  img.src = pets[index].image;
  img.alt = pets[index].title;

  // Создаем span элемент для заголовка
  const span = document.createElement("span");
  span.textContent = pets[index].title;

  // Создаем кнопку
  const button = document.createElement("button");
  button.classList.add("card-button");
  button.textContent = "Learn more";

  // Добавляем все созданные элементы в card
  card.appendChild(img);
  card.appendChild(span);
  card.appendChild(button);

  return card; // Возвращаем созданный элемент
};
let buildBlock = (part) => {
  const block = document.createElement("div");
  block.classList.add("karusel-block");

  // if (part == 0) {
  for (let i = part; i < part + 3; i++) {
    block.appendChild(buildCard(ourArray[i]));
  }
  // } else if (part == 1) {
  //   for (let i = 6; i < 9; i++) {
  //     console.log(ourArray[i]);
  //     block.appendChild(buildCard(ourArray[i]));
  //   }
  // }
  return block;
};
karuselTrack.prepend(buildBlock(0));
karuselTrack.prepend(buildBlock(3));
karuselTrack.prepend(buildBlock(6));
console.log("karuselTrack", karuselTrack);
console.log(pets);

startArray();

let index = 0;
function showSlide(i) {
  let karuselBlock = document.querySelectorAll(".karusel-block");
  index += i;
  if (index >= karuselBlock.length) {
    index = 0;
  } else if (index < 0) {
    index = karuselBlock.length - 1;
  }
  karuselTrack.style.transform = "translateX(" + -index * 100 + "%)";
  let slides = document.querySelectorAll(".karusel-block");
  // console.log(slides[2]);
  // slides = Array.from(slides);
  // // console.log(slides);
  // slides.length = 2;
  // // slides.push(buildCard(5));
  // let addBlock;
  if (index === 1) {
    // addBlock = buildBlock(0);
    console.log("start");
  }
  if (index === -1) {
    console.log("finish");
    //    addBlock = buildBlock(6);
  }
  // console.log(addBlock);
  // const firstElement = nodeList[0];
  //   firstElement.parentNode.replaceChild(buildBlock(0), firstElement);
  console.log(slides);
}
showSlide(1);

appear.addEventListener("click", () => {
  showSlide(-1);
  modifyArray(ourArray, 0); // Изменяем конец массива
  // Получаем список всех блоков
  let karuselBlock = document.querySelectorAll(".karusel-block");

  // Получаем последний блок
  const lastElement = karuselBlock[karuselBlock.length - 1];

  // Удаляем последний блок
  lastElement.parentNode.removeChild(lastElement);

  // Создаем новый блок
  const newBlock = buildBlock(0); // Создаем новый блок (6 - это пример параметра)

  // Добавляем новый блок в начало
  const karuselTrack = document.querySelector(".karusel-track");
  karuselTrack.prepend(newBlock);

  console.log("Обновленный список блоков:");
  console.log(karuselBlock);

  console.log(
    "Изменения завершены: удален последний блок и добавлен новый в начало."
  );

  // Перезагружаем индекс
  index = 0;
  // karuselTrack.prepend(buildBlock(6)); // добавим после того как обновим ourArray !!! и обрежем karuselTrack
});
invert.addEventListener("click", () => {
  showSlide(1);
  console.log("back!!!");
  console.log("index ", index);
});

// let buildCard = (src, title) => {
//   const block = `<div class="pets-card"><img src=${src} alt=${title}>
//   <span>${title}</span><button class="card-button">Learn more</button></div>`;
//   // const card = document.createElement("div");
//   // card.innerHTML = block;
//   return block;
// };

function modifyArray(arr, check) {
  // Создаем массив возможных значений от 0 до 7
  const possibleValues = Array.from({ length: 8 }, (_, i) => i);

  // Определяем диапазон для замены
  let start, finish;
  if (check === 1) {
    // Изменяем конец массива (индексы с 6 по 8)
    start = 6;
    finish = 9;
  } else {
    // Изменяем начало массива (индексы с 0 по 2)
    start = 0;
    finish = 3;
  }

  // Набор запрещенных значений
  const forbiddenValues = new Set(arr.slice(3, 6));

  // Функция для получения уникального значения
  function getUniqueValue() {
    const availableValues = possibleValues.filter(
      (v) => !forbiddenValues.has(v) && !arr.slice(start, finish).includes(v)
    );
    const randomIndex = Math.floor(Math.random() * availableValues.length);
    return availableValues[randomIndex];
  }

  // Генерация уникальных значений для заданного диапазона
  for (let i = start; i < finish; i++) {
    arr[i] = getUniqueValue();
    forbiddenValues.add(arr[i]); // Обновляем набор запрещенных значений
  }

  return arr;
}

// Пример использования
// let ourArray = [2, 4, 1, 3, 5, 6, 3, 2, 7]; // Пример исходного массива

console.log("Original Array:", ourArray);

// let modifiedArr = modifyArray(ourArray, 0); // Изменяем начало массива
// console.log("Modified Array (начало):", modifiedArr);

// modifiedArr = modifyArray(ourArray, 1); // Изменяем конец массива
// console.log("Modified Array (конец):", modifiedArr);

/*
1. в блоке три дива один справа, по центру и слева.
2. при смещении обновляем последний слайд в карусели
3. нужно учитывать что при обновлении последнего слайда с центральным все карточки разные


*/
