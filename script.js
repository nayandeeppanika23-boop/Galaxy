const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
const glow = document.querySelector(".glow");
const exploreBtn = document.getElementById("exploreBtn");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 180; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * 2,
    size: Math.random() * 2,
    speed: Math.random() * 0.7 + 0.2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  stars.forEach((star) => {
    star.y += star.speed;

    if (star.y > document.body.scrollHeight) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

exploreBtn.addEventListener("click", () => {
  document.getElementById("universe").scrollIntoView({
    behavior: "smooth"
  });
});

window.addEventListener("click", (e) => {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  ripple.style.left = e.clientX - 150 + "px";
  ripple.style.top = e.clientY - 150 + "px";

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 800);
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
