const hide = document.getElementById("hide");
const cart = document.getElementById("cart");
const like = document.getElementById("like");
const sidemenu = document.getElementById("sidemenu");
const preloader = document.getElementById("preloader");
const searchinput = document.getElementById("searchinput");

const btnlike = document.getElementById("btnlike");
const btncart = document.getElementById("btncart");
const btnmenu = document.getElementById("btnmenu");

window.onload = () => {
  preloader.style.display = "none";
};

btncart.addEventListener("click", () => {
  cart.style.transform = "translateX(0px)";
  hide.style.display = "block";
});

btnlike.addEventListener("click", () => {
  like.style.transform = "translateX(0px)";
  hide.style.display = "block";
});

hide.addEventListener("click", () => {
  cart.style.transform = "translateX(250px)";
  like.style.transform = "translateX(250px)";
  sidemenu.style.transform = "translateX(-250px)";
  hide.style.display = "none";
});

btnmenu.addEventListener("click", () => {
  sidemenu.style.transform = "translateX(0px)";
  hide.style.display = "block";
});

searchinput.addEventListener("keyup", () => {
  const items = document.querySelectorAll(".games__cards li");
  const values = document.querySelectorAll(".games__cards li .games__gametitle");
  values.forEach((element,index) => {
    if (!element.innerText.toLowerCase().includes(searchinput.value.toLowerCase())) {
      items[index].style.display = "none";
    } else {
      items[index].style.display = "block";
    }
  });
});
