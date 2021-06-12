const bar = document.getElementById("bar");
const sideBar = document.getElementById("sideBar");
const logo = document.getElementById("logo");
const sideBarSpan = document.getElementsByClassName("sideBarSpan");
const mainContent = document.getElementById("mainContent");
const header = document.getElementById("header");

let onClick = false;

bar.addEventListener("click", () => {
  if (!onClick) {
    sideBar.style.width = "60px";
    logo.style.display = "none";
    mainContent.style.marginLeft = "60px";
    header.style.left = "60px";
    header.style.width = "calc(100% - 60px)";
    for (let e of sideBarSpan) {
      e.style.display = "none";
    }
    onClick = true;
  } else {
    sideBar.style.width = "300px";
    logo.style.display = "block";
    mainContent.style.marginLeft = "300px";
    header.style.left = "300px";
    header.style.width = "calc(100% - 300px)";
    for (let e of sideBarSpan) {
      e.style.display = "inline";
    }
    onClick = false;
  }
});
