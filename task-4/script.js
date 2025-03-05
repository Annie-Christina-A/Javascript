document.addEventListener("DOMContentLoaded", () => {
  const borderContainer = document.querySelector(".container");

  const editRange = document.getElementById("data");
  const editRangge = document.getElementById("datta");

  const copyBtn = document.querySelector(".btn");
  const border = document.getElementById("all");
  const code = document.getElementById("code");
  const width = document.getElementById("alll");
  var radius = 10;
  var coding = "test";
  var boarder = 10;
  function edit() {
    radius = border.value;
    editRange.innerText = radius + "px";
    boarder = width.value;
    editRangge.innerText = boarder + "px";
    coding = `border-radius:${radius}px;
    border:${boarder}px solid red`;
    code.value = coding;
    borderContainer.style.cssText = coding;
  }
  border.addEventListener("mousemove", edit);
  border.addEventListener("change", edit);
    width.addEventListener("mousemove", edit);
    width.addEventListener("change", edit);
  copyBtn.addEventListener("click", () => {
    document.querySelector("textarea").select();
    document.execCommand("copy");
    alert("code copied");
  });
  edit();
});
