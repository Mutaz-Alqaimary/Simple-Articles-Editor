let family = document.querySelector("#fonts-family");
let bold = document.querySelector(".fonts-weight");
let size = document.querySelectorAll(".fonts-size > span");
let filter = document.querySelector(".fonts-filter");
let paragraph = document.querySelector("p");

family.addEventListener("change", function () {
  paragraph.style.fontFamily = this.value;
});

bold.addEventListener("click", function () {
  this.classList.toggle("active-button");
  paragraph.classList.toggle("bold");
});

filter.addEventListener("click", function () {
  this.classList.toggle("active-button");
  paragraph.classList.toggle("filter-invert");
});

size[1].innerHTML = window
  .getComputedStyle(paragraph)
  .getPropertyValue("font-size")
  .match(/\d+/g);

if (size[1].innerHTML == 16) {
  size[0].style.opacity = 0.6;
  size[0].style.color = "#aaa";
  size[0].style.cursor = "not-allowed";
}
if (size[1].innerHTML == 22) {
  size[2].style.opacity = 0.6;
  size[2].style.color = "#aaa";
  size[2].style.cursor = "not-allowed";
}

size[0].addEventListener("click", function () {
  if (size[1].innerHTML > 16) {
    size[1].innerHTML = +size[1].innerHTML - 1;
    paragraph.style.fontSize = `${size[1].innerHTML}px`;
  }
  editButtons(size[1].innerHTML);
});

size[2].addEventListener("click", function () {
  if (size[1].innerHTML < 22) {
    size[1].innerHTML = +size[1].innerHTML + 1;
    paragraph.style.fontSize = `${size[1].innerHTML}px`;
  }
  editButtons(size[1].innerHTML);
});

function editButtons(numSize) {
  if (numSize == 16) {
    size[0].style.opacity = 0.6;
    size[0].style.color = "#aaa";
    size[0].style.cursor = "not-allowed";
  } else {
    size[0].style.opacity = 1;
    size[0].style.color = "#000";
    size[0].style.cursor = "pointer";
  }
  if (numSize == 22) {
    size[2].style.opacity = 0.6;
    size[2].style.color = "#aaa";
    size[2].style.cursor = "not-allowed";
  } else {
    size[2].style.opacity = 1;
    size[2].style.color = "#000";
    size[2].style.cursor = "pointer";
  }
}
