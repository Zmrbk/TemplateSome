function myFunction() {
  let burgerMenu = document.getElementById("top_nav");
  if (burgerMenu.className === "nav") {
    burgerMenu.className += " responsive";
  } else {
    burgerMenu.className = "nav";
  }
}