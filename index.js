console.log("Jay Shree Ram");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navItems = document.querySelector(".navItems");
const navLIst = document.querySelectorAll(".navList");
let navLinks = document.querySelectorAll("nav a");
let sections = document.querySelectorAll("section");
const certificateContainer = [...document.querySelectorAll(".certificateContainer")];
const preButton = [...document.querySelectorAll(".pre")];
const nxtButton = [...document.querySelectorAll(".next")];




// To show navbar on click
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("toggleHamb")
  navItems.classList.toggle("showNav")
})

// To reverse the navbar
navLIst.forEach((items) => {
  items.addEventListener("click", () => {
    hamburgerMenu.classList.remove("toggleHamb")
    navItems.classList.remove("showNav")
  })
});


// To add Scroll effect on carousel

certificateContainer.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  nxtButton[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth + 100;
  });

  preButton[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});