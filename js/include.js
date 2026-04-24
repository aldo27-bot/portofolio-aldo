// =====================
// NAVBAR INCLUDE
// =====================
fetch("../component/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // AUTO ACTIVE
    const links = document.querySelectorAll(".side-nav a");
    const current = window.location.pathname.split("/").pop();

    links.forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  });


// =====================
// COUNT UP ANIMATION
// =====================
const counters = document.querySelectorAll(".count");

counters.forEach(counter => {
  counter.innerText = "0";

  const update = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };

  update();
});


// =====================
// PARALLAX EFFECT
// =====================
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  if (parallax) {
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = `translateY(${scrollPosition * 0.4}px)`;
  }
});


// =====================
// PAGE TRANSITION
// =====================
document.querySelectorAll("a").forEach(link => {
  if (link.href && link.href.includes(".html")) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location = this.href;
      }, 300);
    });
  }
});