document.addEventListener("DOMContentLoaded", () => {
  animateSequence();
});

function animateSequence() {
  setTimeout(() => {
    // Balloon 1
    const balloon1 = document.getElementById("balloon1");
    balloon1.style.transform = "translateY(50px)";
    balloon1.style.opacity = 1;
  }, 200);
  setTimeout(() => {
    // Balloon 2 + Happy Birthday
    const balloon2 = document.getElementById("balloon2");
    balloon2.style.transform = "translateY(50px)";
    balloon2.style.opacity = 1;

    const text1 = document.getElementById("text1");
    text1.style.transform = "translateX(-50%) translateY(0)";
    text1.style.opacity = 1;
  }, 500);

  setTimeout(() => {
    const corner = document.getElementById("corner");
    corner.style.transform = "translateY(0)";
    corner.style.opacity = 1;

    const text2 = document.getElementById("text2");
    text2.style.transform = "translateX(-50%) translateY(0)";
    text2.style.opacity = 1;
  }, 1000);

  setTimeout(() => {
    const cake = document.getElementById("cake");
    cake.style.transform = "translateX(-50%) translateY(0)";
    cake.style.opacity = 1;
  }, 1500);

  setTimeout(() => {
    window.location.href = "page2.html";
  }, 10000);
}
