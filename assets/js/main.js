let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-button").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

let mainVid = document.querySelector(".main-video");

document
  .querySelectorAll(".courseThree .courseThree__box .courseThree__video video")
  .forEach((vid) => {
    vid.onclick = () => {
      let src = vid.getAttribute("src");
      mainVid.classList.add("active");
      mainVid.querySelector("video").src = src;
    };
  });

document.querySelector("#close-vid").onclick = () => {
  mainVid.classList.remove("active");
};

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*===== ACTIVE AND REMOVE MENU =====*/

const currentLocation = location.href;
const menuItem = document.querySelectorAll(".navbar__link");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "navbar__link active-link";
  }
}

/* const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll(".nav__link").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active-link");
    console.log(link);
  }
});
 */
