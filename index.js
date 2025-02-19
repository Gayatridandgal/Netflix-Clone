let accordion = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.childNodes[1].classList.toggle("fa-plus");
    this.childNodes[1].classList.toggle("fa-times");

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
