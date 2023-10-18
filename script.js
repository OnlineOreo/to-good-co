const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
function videoAnimation() {
  var videoContainer = document.querySelector(".video");
  var playButton = document.querySelector(".play");

  videoContainer.addEventListener("mouseenter", () => {
    gsap.to(playButton, {
      scale: 1,
      opacity: 1,
    });
  });
  videoContainer.addEventListener("mouseleave", () => {
    gsap.to(playButton, {
      scale: 0,
      opacity: 0,
    });
  });
  videoContainer.addEventListener("mousemove", (e) => {
    gsap.to(playButton, {
      left: e.x - 70,
      top: e.y - 50,
    });
  });
}
videoAnimation();
function loadAnimation() {
  gsap.from(".section-1 span", {
    y: 100,
    delay: 0.5,
    duration: 0.8,
    opacity: 0,
    stagger: 0.5,
  });
  gsap.from(".video", {
    y: 100,
    delay: 1.3,
    duration: 0.8,
    opacity: 0,
    scale: 0.9,
    stagger: 0.5,
  });
}
loadAnimation();
