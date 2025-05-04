document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", () => {
    const audio = document.getElementById("myAudio");
    audio.play();
    document.getElementById("startBtn").style.display = "none"; // sembunyikan tombol
    animateSequence(); // jalankan animasi setelah audio

    const btn = document.getElementById("pauseBtn");

    btn.addEventListener("click", () => {
      if (btn.innerHTML === "volume_up") {
        btn.innerHTML = "volume_off";
        audio.pause(); // jika kamu mau jedakan audio juga
      } else {
        btn.innerHTML = "volume_up";
        audio.play(); // lanjutkan audio
      }
    });
  });
});

function animateSequence() {
  setTimeout(() => {
    const corner = document.getElementById("corner");
    corner.style.transform = "translateY(0)";
    corner.style.opacity = 1;
    // Balloon 1
    const paragraf1 = document.getElementById("paragraf-1");
    paragraf1.style.transform = "translateY(0)";
    paragraf1.style.opacity = 1;

    const pauseBtn = document.getElementById("pauseBtn");
    pauseBtn.style.transform = "translateY(0)";
    pauseBtn.style.opacity = 1;
  }, 200);

  setTimeout(() => {
    // Balloon 2 + Happy Birthday
    const paragraf2 = document.getElementById("paragraf-2");
    paragraf2.style.transform = "translateY(0)";
    paragraf2.style.opacity = 1;
  }, 500);

  setTimeout(() => {
    const paragraf3 = document.getElementById("paragraf-3");
    paragraf3.style.transform = "translateY(0)";
    paragraf3.style.opacity = 1;
  }, 15000);

  setTimeout(() => {
    const paragraf4 = document.getElementById("paragraf-4");
    paragraf4.style.transform = "translateY(0)";
    paragraf4.style.opacity = 1;
  }, 30000);

  setTimeout(() => {
    const paragraf5 = document.getElementById("paragraf-5");
    paragraf5.style.transform = "translateY(0)";
    paragraf5.style.opacity = 1;
  }, 45000);
  setTimeout(() => {
    const paragraf5 = document.getElementById("paragraf-5");
    paragraf5.style.transform = "translateY(0)";
    paragraf5.style.opacity = 1;

    const paragraf6 = document.getElementById("paragraf-6");
    paragraf6.style.transform = "translateY(0)";
    paragraf6.style.opacity = 1;
  }, 60000);

  // setTimeout(() => {
  //   window.location.href = "page2.html";
  // }, 10000);
}
