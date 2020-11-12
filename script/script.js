const buttonItems = document.querySelectorAll(".btn-faq");
const buttonContentItems = document.querySelectorAll(".btn-content");

// Listen for button click
buttonItems.forEach((item) => {
  item.addEventListener("click", selectButton);
});

// Select button item
function selectButton(e) {
  removeIconRotate(this.id);
  this.lastElementChild.classList.toggle("icon-rotate");

  removeShow(`${this.id}-content`);
  const buttonContent = document.querySelector(`#${this.id}-content`);
  buttonContent.classList.toggle("show");
}

// Remove icon-rotate class from all icon items
function removeIconRotate(selectionId) {
  buttonItems.forEach((item) => {
    if (item.id != selectionId) {
      item.lastElementChild.classList.remove("icon-rotate");
    }
  });
}

// Remove show class from al button items
function removeShow(selectionId) {
  buttonContentItems.forEach((item) => {
    if (item.id != selectionId) {
      item.classList.remove("show");
    }
  });
}
