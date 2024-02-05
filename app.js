const exerciseList = document.querySelectorAll(".exercise-content");
const icon = document.querySelectorAll(".icon");
const fullIcon = document.querySelectorAll(".full-icon");

const responsiveWidth = matchMedia("(min-width: 992px)");
const changeSize = (mql) => {
  mql.matches;
  if (mql.matches == true) {
    for (let i = 0; i < exerciseList.length; i++) {
      exerciseList[i].classList.remove("hidden");
    }
    for (let i = 0; i < fullIcon.length; i++) {
      fullIcon[i].classList.add("display-none");
    }
  } else {
    for (let i = 0; i < fullIcon.length; i++) {
      fullIcon[i].classList.remove("display-none");
    }
  }
};
responsiveWidth.addEventListener("change", changeSize);
changeSize(responsiveWidth);

// SwiperJS
var swiper = new Swiper(".mySwiper", {
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function toggleFullscreen() {
  for (let i = 0; i < exerciseList.length; i++) {
    exerciseList[i].classList.toggle("hidden");
  }

  for (let i = 0; i < icon.length; i++) {
    icon[i].classList.toggle("display-none");
  }
}
