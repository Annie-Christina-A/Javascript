const menu = document.querySelector(".context-menu");
function display(show = true) {
  menu.style.display = show ? "block" : "none";
}
window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log(e);
  display();
  const topPx =
    e.y + menu.offsetHeight > window.innerHeight
      ? window.innerHeight - menu.offsetHeight
      : e.y;
  const leftPx =
    e.x + menu.offsetWidth > window.innerWidth
      ? window.innerWidth - menu.offsetWidth
      : e.x;
  menu.style.top = topPx + "px";
  menu.style.left = leftPx + "px";
});
window.addEventListener("click", () => {
  display(false);
});
