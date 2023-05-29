const arrow = document.querySelector(".arrow");
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".menu");
const body = document.querySelector("body");
const date = document.querySelector("#date");
let isShown = false;

// Get and return date to footer

date.innerText = new Date().getFullYear();

// Hide arrow after animation
setTimeout(() => {
  arrow.style.scale = "0";
}, 8000);

// show menu when the hamburger menu icon is clicked and remove body scroll else restore default
menuBtn.onclick = () => {
  if (!isShown) {
    menuBtn.classList.add("menu-btn-active");
    navMenu.classList.add("menu-active");
    body.style.overflowY = "hidden";
    isShown = true;
  } else {
    menuBtn.classList.remove("menu-btn-active");
    navMenu.classList.remove("menu-active");
    body.style.overflowY = "auto";
    isShown = false;
  }
};

//  ......................... About page .......................

const teamCont = document.querySelector(".grid");
const cardClasses = ["card flex flex-jc-c", "img-teacher", "teacher-desc", "line"];

const members = [
  {
    img: "./app/assets/person1.webp",
    imgAlt: "Picture of a professor",
    name: "Scott Charles",
    title: "Software Engineer",
    desc: "Worked with other programmers to develop Kiyu the best online tranding platfom in 2017.",
  },
  {
    img: "./app/assets/person2.webp",
    imgAlt: "Picture of a professor",
    name: "Jessica DeGaule",
    title: "UX&UI expert",
    desc: "Has over 100 professional deployed websites templates.",
  },
  {
    img: "./app/assets/person3.webp",
    imgAlt: "Picture of a professor",
    name: "Sergio Gust",
    title: "Senior Program Manager and Full Stack Developper",
    desc: "Known for his contributions to the national id service automation in Canada.",
  },
  {
    img: "./app/assets/person4.webp",
    imgAlt: "Picture of a professor",
    name: "Jake Wisler",
    title: "fullstack Python Developper",
    desc: "Known for her contributions to the national id service automation in Canada.",
  },
  {
    img: "./app/assets/person5.webp",
    imgAlt: "Picture of a professor",
    name: "Charles Texas",
    title: "Dr. in Computer Science and Senior Editor",
    desc: "Has over 100 contributions to frameworks from React to Django and many more.",
  },
  {
    img: "./app/assets/person6.webp",
    imgAlt: "Picture of a professor",
    name: "Hellen Grant",
    title: "Dr. in Computer science and Lead Software Engineer",
    desc: 'Best selling author of the book "Why I chose Computer Science."',
  },
];

const mediaQuery = window.matchMedia("(max-width: 768px)");

function person(count) {
  const card = document.createElement("div");
  card.className = `${cardClasses[0]}`;
  teamCont.appendChild(card);

  const imgCont = document.createElement("div");
  imgCont.classList.add("image-container");
  card.appendChild(imgCont);

  const img = document.createElement("img");
  img.classList.add(`${cardClasses[1]}`);
  img.src = `${members[count].img}`;
  img.alt = `${members[count].imgAlt}`;
  imgCont.appendChild(img);

  const description = document.createElement("div");
  description.classList.add(`${cardClasses[2]}`);

  const hiddenElements = (e) => {
    if (count >= 2 && e.matches) {
      card.classList.add("hidden");
      card.setAttribute("data-hide", "true");
      console.log("Matches");
    } else {
      card.classList.remove("hidden");
    }
  };

  mediaQuery.addEventListener("change", (e) => hiddenElements(e));
  hiddenElements(mediaQuery);

  description.innerHTML = `
    <h3>${members[count].name}</h3>
    <span> ${members[count].title}</span>
    <span class=${cardClasses[3]}></span>
    <p> ${members[count].desc} </p>
  `;
  card.appendChild(description);
}

for (let count = 0; count <= members.length - 1; count += 1) {
  person(count);
}

const hideBtn = document.querySelector(".hideBtn");
const allCards = document.querySelectorAll(".card");
let active = false;

hideBtn.addEventListener("click", () => {
  if (!active) {
    hideBtn.innerText = "Show Less";
    hideBtn.style.setProperty("--transform", "translateY(-50%) rotate(-90deg)");
    active = true;
  } else {
    hideBtn.innerText = "Show More";
    hideBtn.style.setProperty("--transform", "translateY(-50%) rotate(90deg)");
    console.log();
    active = false;
  }
  allCards.forEach((card) => {
    if (card.hasAttribute("data-hide")) {
      card.classList.toggle("hidden");
    }
  });
});
