//ДОБАВЛЕНИЕ В КОРЗИНУ

var buyButton = document.querySelectorAll(".item-buy");
var buyModal = document.querySelector(".cart-add");
var buyClose = buyModal.querySelector(".modal-close");
var buyContinue = buyModal.querySelector(".button-continue");

for (var i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyModal.classList.add("modal-show");
  })
};

buyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyModal.classList.remove("modal-show");
});

buyContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyModal.classList.remove("modal-show");
})
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (buyModal.classList.contains("modal-show")) {
        buyModal.classList.remove("modal-show");
        buyModal.classList.remove("modal-error");
      }
    }
  });

// КАРТА
var mapButton = document.querySelector(".contacts-map");
var mapModal = document.querySelector(".map-big-modal");
var mapClose = mapModal.querySelector(".modal-close");

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapModal.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapModal.classList.contains("modal-show")) {
        mapModal.classList.remove("modal-show");
        mapModal.classList.remove("modal-error");
      }
    }
  });


// ФОРМА ОБРАТНОЙ СВЯЗИ

var feedbackButton = document.querySelector(".feedback-button");
var feedbackModal = document.querySelector(".feedback-modal");
var feedbackClose = feedbackModal.querySelector(".modal-close");
var feedbackForm = feedbackModal.querySelector("form");
var feedbackName = feedbackModal.querySelector("[name=name]");
var feedbackMail = feedbackModal.querySelector("[name=mail]");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("feedback-show");
  feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("feedback-show");
  feedbackModal.classList.remove("modal-error");
});
feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackMail.value) {
      evt.preventDefault();
      feedbackModal.classList.remove("modal-error");
      feedbackModal.offsetWidth = feedbackModal.offsetWidth;
      feedbackModal.classList.add("modal-error");
    }
  });
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedbackModal.classList.contains("feedback-show")) {
        feedbackModal.classList.remove("feedback-show");
        feedbackModal.classList.remove("modal-error");
      }
    }
  });
