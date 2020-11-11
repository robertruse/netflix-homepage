const buttons = document.querySelectorAll(".btn-faq");
const buttonContents = document.querySelectorAll(".btn-content");

function selectButton(e) {
  removeIconRotate();
  removeShow();
  this.lastElementChild.classList.add("icon-rotate");

  const buttonContent = document.querySelector(`#${this.id}-content`);
  buttonContent.classList.add("show");
}

function removeIconRotate() {
  buttons.forEach((item) => {
    item.lastElementChild.classList.remove("icon-rotate");
  });
}

function removeShow() {
  buttonContents.forEach((item) => {
    item.classList.remove("show");
  });
}

buttons.forEach((item) => {
  item.addEventListener("click", selectButton);
});
