const sidedrawer = document.querySelector(".sidedrawer");
const backdrop = document.querySelector(".backdrop");
const bars = document.getElementById("bars");

bars.addEventListener("click", () => {
  sidedrawer.classList.add("active");
  backdrop.classList.add("show");
});

backdrop.addEventListener("click", () => {
  sidedrawer.classList.remove("active");
  backdrop.classList.remove("show");
});

// showcase
const showcaseImageContainer = document.getElementById("showcaseImage");
const indicators = document.querySelectorAll(".indicator");

window.onload = () => {
  let i = 1;
  setInterval(() => {
    if (i > 4) {
      i = 1;
    }
    renderImage(i);
    for (const indicator of indicators) {
      if (i == indicator.id) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    }

    i++;
  }, 2000);
};

for (const indicator of indicators) {
  indicator.addEventListener("click", (e) => {
    renderImage(e.target.id);
  });
}

function renderImage(imageNUm) {
  let imageHTML = "";

  for (const indicator of indicators) {
    if (imageNUm === indicator.id) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  }
  showcaseImageContainer.innerHTML = `<img src="assets/portfolio${imageNUm}.png" alt="" />`;
}

//Testimonial part

const persons = document.querySelectorAll(".profile__picture");
const personName = document.querySelector(".testimonial__bio__name");
const personRole = document.querySelector(".testimonial__bio__role");
const personContent = document.querySelector(".testimonial__content__text");
const personStars = document.querySelector(".testimonial__content__stars");

let testimonial = [
  {
    id: "0",
    name: "Calvin Henry",
    role: "Restauran Owner",
    conntent:
      "Finallly, I can grow my businnes through digital product. All thanks you to Steward",
    star: 4,
  },
  {
    id: "2",
    name: "Julia Bell",
    role: "Copywriter",
    conntent: "His job perfect. All Thanks for Steward",
    star: 4,
  },
  {
    id: "1",
    name: "Arlene Cooper",
    role: "Photographer",
    conntent: "I would love to work with this guy. His work is perfect",
    star: 5,
  },
];

for (const person of persons) {
  person.addEventListener("click", (e) => {
    let index = e.target.id.split("-")[1];
    renderContent(index);
  });
}
renderContent(0);
function renderContent(index) {
  personName.innerText = `${testimonial[index].name}`;
  personRole.innerText = `${testimonial[index].role}`;
  personContent.innerText = `${testimonial[index].conntent}`;

  let starHtml = ``;
  for (let i = 0; i < testimonial[index].star; i++)
    starHtml +=
      '<span class="iconify star active" data-icon="entypo:star"  data-inline="false" ></span>';
  personStars.innerHTML = starHtml;
}

//handele navbar background
const navbar = document.getElementById("navbar");

document.addEventListener("scroll", () => {
  if (window.top.scrollY > 199) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
