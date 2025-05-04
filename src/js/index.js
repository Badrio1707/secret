const btn = document.getElementById("openBtn");
const wrapper = document.getElementById("envelopeWrapper");
const letter = document.querySelector(".letter");

btn.addEventListener("click", () => {
  const today = new Date();
  const isMay5 = today.getMonth() === 4 && today.getDate() === 5;
  console.log(isMay5);



  // Jika tanggal 5 Mei, jalankan animasi
  wrapper.classList.add("open");

  setTimeout(() => {
    const rect = letter.getBoundingClientRect();

    letter.style.position = "fixed";
    letter.style.top = rect.top + "px";
    letter.style.left = rect.left + "px";
    letter.style.width = rect.width + "px";
    letter.style.height = rect.height + "px";
    letter.style.margin = "0";

    document.body.appendChild(letter);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        letter.classList.add("fullscreen");
        letter.style.top = "0";
        letter.style.left = "0";
        letter.style.width = "100vw";
        letter.style.height = "100vh";
      });
    });

    letter.addEventListener(
      "transitionend",
      () => {
        window.location.href = "page1.html";
      },
      { once: true }
    );
  }, 1000);
});
