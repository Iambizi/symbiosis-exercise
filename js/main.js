// const menu = document.getElementById("menu");
// const sidebar = document.getElementById("sidebar");

// menu.addEventListener("click", function toggle() {});

const links = document.getElementsByClassName("menu-link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function() {
    this.className += " active";
  });
  links[i].addEventListener("mouseout", function() {
    this.className -= " active";
  });
}
