const frm = document.getElementById("frm");
const output = document.querySelector(".output");
const spinner = document.querySelector("#loading");
const qrCode = document.querySelector("#qrcode");
const save=document.querySelector("#btn-save")
function generateQRCode(e) {
  e.preventDefault();
  const url = document.querySelector("#url").value;
  const size = document.querySelector("#size").value;
  const colorDark = document.querySelector("#colorDark").value;
  const colorLight = document.querySelector("#colorLight").value;
  if (url === "") {
    alert("Please Enter Your Website Link");
  } else {
    spinner.style.display = "flex";

    setTimeout(() => {
      spinner.style.display = "none";
      qrCode.innerHTML = "";
      const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
        colorDark: colorDark,
        colorLight: colorLight,
        correctLevel: QRCode.CorrectLevel.H,
      });
    }, 1000);
    createDownloadLink();
  }
}
frm.addEventListener("submit", generateQRCode);
function createDownloadLink() {
  const imgSource = qrCode.querySelector("img").src;
  save.href = imgSource;
}
save.addEventListener("click",()=>{
    setTimeout(()=>{
        
        save.download="qrCode"
    },50)
})