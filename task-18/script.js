const imgs = document.querySelectorAll(".img a");
let imgId = 1;
const imgDiv=document.querySelectorAll(".img")
imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    imgId = img.dataset.id;
    imgDiv.forEach((img) => {
      img.classList.remove("active");
    });
    img.parentElement.classList.add("active")
    moveImage();
  });
});

function moveImage() {
  const imageWidth = document.querySelector(
    ".main-img img:first-child"
  ).clientWidth;
  let width = (imgId - 1) * imageWidth;
  document.querySelector(
    ".main-img"
  ).style.transform = `translateX(${-width}px)`;
}
