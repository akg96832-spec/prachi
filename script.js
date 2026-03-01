const birthday = new Date("March 19, 2026 00:00:00").getTime();
const countdown = document.getElementById("countdown");
const content = document.getElementById("birthdayContent");

setInterval(function() {
  const now = new Date().getTime();
  const gap = birthday - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  countdown.innerHTML = ${days}d ${hours}h ${minutes}m ${seconds}s;

  if (gap < 0) {
    countdown.style.display = "none";
    content.classList.remove("hidden");
    startTyping();
  }
}, 1000);

function startTyping() {
  const text = "Dear Prachi, on your special day I just want to say that you are truly amazing. May your life be filled with happiness, success and endless smiles. I’m always proud of you ❤️";
  let i = 0;
  const typing = document.getElementById("typing");

  function type() {
    if (i < text.length) {
      typing.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

function showSurprise() {
  document.getElementById("surpriseMessage").classList.remove("hidden");
}
