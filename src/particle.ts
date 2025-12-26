let lastScroll = window.scrollY;
let lastTime = performance.now();

window.addEventListener("scroll", () => {
  const now = performance.now();
  const deltaScroll = Math.abs(window.scrollY - lastScroll);
  const deltaTime = now - lastTime;

  const velocity = deltaScroll / deltaTime;

  spawnParticle(velocity);

  lastScroll = window.scrollY;
  lastTime = now;
});

function spawnParticle(speed: number) {
  const p = document.createElement("div");
  p.className = "particle";

  const colors = [
    "#4fb7dd", // blue-300 (main speed blue)
    "#5724ff", // violet-300 (energy accent)
    "#dfdff0", // blue-50 (soft trail highlight)
    "#f0f2fa", // blue-100 (glow-like particle)
  ];
  p.style.background = colors[Math.floor(Math.random() * colors.length)];

  p.style.left = Math.random() * window.innerWidth + "px";
  p.style.top = Math.random() * window.innerHeight + "px";
  p.style.transform = `scale(${Math.min(speed * 6, 2)})`;

  document.body.appendChild(p);

  setTimeout(() => p.remove(), 800);
}
