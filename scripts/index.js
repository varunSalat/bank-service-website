const wwoBtns = document.querySelectorAll(".wwo_nav_btn"),
  wwoCards = document.querySelectorAll(".wwo_card");

window.addEventListener("load", () => {
  wwoCards.forEach((card) => {
    if (card.getAttribute("data-wwo") === "loan") {
      card.classList.add("show");
      card.style.display = "flex";
    } else {
      card.classList.remove("show");
      card.style.display = "none";
    }
  });
});

const handlewwoBtnClick = (type) => {
  wwoBtns.forEach((btn) =>
    btn.getAttribute("data-wwo") === type
      ? btn.classList.add("active")
      : btn.classList.remove("active")
  );

  wwoCards.forEach((card) => {
    if (card.getAttribute("data-wwo") === type) {
      card.classList.add("show");
      setTimeout(() => {
        card.style.display = "flex";
      }, 300);
    } else {
      card.classList.remove("show");
      setTimeout(() => {
        card.style.display = "none";
      }, 300);
    }
  });
};

wwoBtns.forEach((btn) => {
  btn.addEventListener("click", () =>
    handlewwoBtnClick(btn.getAttribute("data-wwo"))
  );
});

// !SWIPER JS
//   <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  effect: "none",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000, // Delay between transitions in milliseconds
    disableOnInteraction: false, // Keep autoplay running even after user interaction
  },
});
