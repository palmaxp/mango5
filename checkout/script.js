let cardSelect = document.querySelectorAll(".card-select * *");
let tabPane = document.querySelectorAll(".tab-pane");
let cac = document.querySelectorAll(".cac");
let loadContent = document.querySelectorAll(
  ".pay-info .input-group-2 .area button",
);
let tabs = document.querySelector(".nav-tabs");
let payContent = document.querySelector(".pay-content");
let payTicket = document.querySelector(".pay-ticket");
let payPix = document.querySelector(".pay-pix");

let modal = document.querySelector(".modalSingIn");
let mailValue = document.querySelector(".input-yourmail");
let currentMail = document.querySelector(".currentMail");

function renderContent(index) {
  payContent.classList.remove("active");
  payTicket.classList.remove("active");
  payPix.classList.remove("active");
  switch (index) {
    case 0:
      payContent.classList.add("active");
      cac.forEach((element) => {
        element.classList.remove("active");
      });
      cac[0].classList.add("active");
      cardSelect.forEach((element) => {
        element.classList.remove("active");
      });
      cardSelect[0].classList.add("active");
      tabPane.forEach((element) => {
        element.classList.remove("active");
      });
      tabPane[0].classList.add("active");
      break;
    case 1:
      payTicket.classList.add("active");
      cac.forEach((element) => {
        element.classList.remove("active");
      });
      cac[0].classList.add("active");
      break;
    case 2:
      payPix.classList.add("active");
      cac.forEach((element) => {
        element.classList.remove("active");
      });
      cac[0].classList.add("active");
      break;
    default:
      payContent.classList.add("active");
      cac.forEach((element) => {
        element.classList.remove("active");
      });
      cac[0].classList.add("active");
      break;
  }
}
function handleSelect(e) {
  const arrCardSelect = Array.from(cardSelect);
  e.preventDefault();
  cardSelect.forEach((element) => {
    element.classList.remove("active");
  });
  e.target.classList.add("active");
  tabPane.forEach((element) => {
    element.classList.remove("active");
  });
  cac.forEach((element) => {
    element.classList.remove("active");
  });
  const cardIndex = arrCardSelect.findIndex((c) =>
    c.classList.contains("active"),
  );
  tabPane[cardIndex].classList.add("active");
  cac[cardIndex].classList.add("active");
}
cardSelect.forEach((element) => {
  element.addEventListener("click", handleSelect);
});
function handleLoad(e) {
  const arrLoadContent = Array.from(loadContent);
  loadContent.forEach((element) => {
    element.classList.remove("active");
    element.previousElementSibling.classList.remove("active");
  });
  e.target.classList.add("active");
  e.target.previousElementSibling.classList.add("active");
  const loadIndex = arrLoadContent.findIndex((c) =>
    c.classList.contains("active"),
  );
  renderContent(loadIndex);
}
loadContent.forEach((element) => {
  element.addEventListener("click", handleLoad);
});

function handleOpenModal() {
  currentMail.innerHTML = `${mailValue.value}`;
  modal.classList.add("show");
}
mailValue.addEventListener("blur", handleOpenModal);
