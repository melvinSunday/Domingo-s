document.querySelectorAll(".navlinks a, .Logo a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// section and navlinks
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navlinks a");
let dropdownLinks = document.querySelectorAll(".navlinks ul li ul li a");

window.onscroll = function () {
  var header = document.querySelector("#myHeader");
  var dropdownMenu = document.querySelector(".navlinks ul li ul");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        link.classList.remove("animate");
      });
      dropdownLinks.forEach((link) => {
        link.classList.remove("active");
        link.classList.remove("animate");
      });

      let activeNavLink = document.querySelector(
        ".navlinks a[href='#" + id + "']"
      );
      let activeDropdownLink = document.querySelector(
        ".navlinks ul li ul li a[href='#" + id + "']"
      );

      activeNavLink.classList.add("active");
      activeNavLink.classList.add("animate");
      activeDropdownLink.classList.add("active");
      activeDropdownLink.classList.add("animate");
    }
  });
};

////
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var header = document.getElementById("myHeader");
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 550
  ) {
    header.style.position = "fixed";

    header.style.backgroundColor = "#191919";
    header.classList.add("scrolled");
  } else {
    header.style.position = "relative";
    header.style.backgroundColor = "initial";
    header.classList.remove("scrolled");
  }

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top > offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        link.classList.remove("animate");
      });
      dropdownLinks.forEach((link) => {
        link.classList.remove("active");
        link.classList.remove("animate");
      });

      let activeNavLink = document.querySelector(
        ".navlinks a[href='#" + id + "']"
      );
      let activeDropdownLink = document.querySelector(
        ".navlinks ul li ul li a[href='#" + id + "']"
      );

      activeNavLink.classList.add("active");
      activeNavLink.classList.add("animate");
      activeDropdownLink.classList.add("active");
      activeDropdownLink.classList.add("animate");
    }
  });
}

//////animation1
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".services-wrap > div");
  const windowHeight = window.innerHeight;

  elements.forEach(function (element, index) {
    const distanceFromTop = element.getBoundingClientRect().top;

    if (distanceFromTop - windowHeight <= 0) {
      element.classList.add("fadeInUp");
      element.classList.add(`delay-${index}`);
    }
  });
});

///animation2
window.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".section1 h1");
  const windowHeight = window.innerHeight;

  images.forEach(function (image, index) {
    const distanceFromTop = image.getBoundingClientRect().top;

    if (distanceFromTop - windowHeight <= 0) {
      image.classList.add("fadeInUp");
      image.classList.add(`delay-${index}`);
    }
  });
});
window.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".frame img");
  const windowHeight = window.innerHeight;

  images.forEach(function (image, index) {
    const distanceFromTop = image.getBoundingClientRect().top;

    if (distanceFromTop - windowHeight <= 0) {
      image.classList.add("fadeInUp");
      image.classList.add(`delay-${index}`);
    }
  });
});

///animation3
window.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".section3 > div");
  const windowHeight = window.innerHeight;

  images.forEach(function (image, index) {
    const distanceFromTop = image.getBoundingClientRect().top;

    if (distanceFromTop - windowHeight <= 0) {
      image.classList.add("fadeInUp");
      image.classList.add(`delay3-${index}`);
    }
  });
});
window.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".section3 h3");
  const windowHeight = window.innerHeight;

  images.forEach(function (image, index) {
    const distanceFromTop = image.getBoundingClientRect().top;

    if (distanceFromTop - windowHeight <= 0) {
      image.classList.add("fadeInUp");
      image.classList.add(`delay-${index}`);
    }
  });
});

window.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".section3 h1");
  const windowHeight = window.innerHeight;

  images.forEach(function (image, index) {
    const distanceFromTop = image.getBoundingClientRect().top;

    if (distanceFromTop - windowHeight <= 0) {
      image.classList.add("fadeInUp");
      image.classList.add(`delay-${index}`);
    }
  });
});

window.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".section4 h1, .section4 p");
  const windowHeight = window.innerHeight;

  images.forEach(function (image, index) {
    const distanceFromTop = image.getBoundingClientRect().top;

    if (distanceFromTop - windowHeight <= 0) {
      image.classList.add("fadeInUp");
      image.classList.add(`delay-${index}`);
    }
  });
});

window.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".section4 > div");
  const windowHeight = window.innerHeight;

  images.forEach(function (image, index) {
    const distanceFromTop = image.getBoundingClientRect().top;

    if (distanceFromTop - windowHeight <= 0) {
      image.classList.add("fadeInUp");
      image.classList.add(`delay3-${index}`);
    }
  });
});
///menu
function openMenu(evt, menuName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}
window.onload = function () {
  document.querySelector(".tablink").click();
};

///note

document.addEventListener("DOMContentLoaded", function () {
  // Get the current section from the URL
  var currentSection = window.location.hash
    ? window.location.hash.substring(1)
    : "Home";

  // Show the note with a fade-in effect only if the current section is "Home"
  if (currentSection === "Home") {
    var note = document.getElementById("note");
    fadeIn(note, 1000); // Adjust the duration of the fade-in effect as needed (in milliseconds)
  }

  // Fade out the note when the "Okay" button is clicked
  var okayButton = document.getElementById("okayButton");
  okayButton.addEventListener("click", function () {
    fadeOut(note, 1000); // Adjust the duration of the fade-out effect as needed (in milliseconds)
  });
});

function fadeIn(element, duration) {
  var opacity = 0;
  var interval = 50; // Adjust the interval of opacity change as needed
  var gap = interval / duration;

  element.style.display = "block";
  element.style.opacity = opacity;

  function fadeInInterval() {
    opacity += gap;
    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeInTimer);
    }
  }

  var fadeInTimer = setInterval(fadeInInterval, interval);
}

function fadeOut(element, duration) {
  var opacity = 1;
  var interval = 50; // Adjust the interval of opacity change as needed
  var gap = interval / duration;

  function fadeOutInterval() {
    opacity -= gap;
    element.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(fadeOutTimer);
      element.style.display = "none";
    }
  }

  var fadeOutTimer = setInterval(fadeOutInterval, interval);
}

/////hamburger menu
// Function to close the dropdown menu
function closeDropdownMenu() {
  hamburger.classList.remove("active");
  navlinks.classList.remove("active");
}

// Event listener to close dropdown menu when clicking outside of it
document.body.addEventListener("click", function (event) {
  // Check if the clicked element is not part of the dropdown menu or hamburger menu
  if (
    !event.target.closest(".navlinks") &&
    !event.target.closest(".hamburger")
  ) {
    closeDropdownMenu();
  }
});

// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navlinks.classList.toggle("active");
});

// Close dropdown menu when a navlink is clicked
document
  .querySelectorAll(".navlinks a")
  .forEach((n) => n.addEventListener("click", closeDropdownMenu));

////
