const hide = document.getElementById("hide");
const cart = document.getElementById("cart");
const like = document.getElementById("like");
const btnlike = document.getElementById("btnlike");
const btncart = document.getElementById("btncart");

btncart.addEventListener("click", () => {
  cart.style.transform = "translateX(0px)";
  hide.style.display = "block";
});

btnlike.addEventListener("click", () => {
  like.style.transform = "translateX(0px)";
  hide.style.display = "block";
});

hide.addEventListener('click',() => {
  cart.style.transform = "translateX(250px)";
  like.style.transform = "translateX(250px)";
  hide.style.display = "none";
})