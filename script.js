(function heroFrameScrubber() {
  const section = document.querySelector(".hero-scrubber");
  const canvas = section && section.querySelector(".hero-scrubber__canvas");
  if (!section || !canvas) return;

  const ctx = canvas.getContext("2d");
  const FRAME_COUNT = 97;
  const frameSrc = (i) =>
    `hero-frames/tali/frame_${String(i).padStart(3, "0")}.jpg`;

  const images = new Array(FRAME_COUNT);
  let loadedCount = 0;
  let currentFrame = FRAME_COUNT - 1;
  let rafId = null;

  function sizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawFrame(i) {
    const img = images[i];
    if (!img || !img.complete || !img.naturalWidth) return;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function updateFrame() {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height - vh;
    if (total <= 0) return;
    let progress = -rect.top / total;
    progress = Math.max(0, Math.min(1, progress));
    const nextFrame = Math.max(
      0,
      FRAME_COUNT - 1 - Math.floor(progress * (FRAME_COUNT - 1))
    );
    if (nextFrame !== currentFrame) {
      currentFrame = nextFrame;
      drawFrame(currentFrame);
    }
  }

  function scheduleUpdate() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      updateFrame();
    });
  }

  for (let i = 0; i < FRAME_COUNT; i += 1) {
    const img = new Image();
    img.decoding = "async";
    img.src = frameSrc(i + 1);
    img.onload = () => {
      loadedCount += 1;
      if (i === FRAME_COUNT - 1) {
        sizeCanvas();
        drawFrame(currentFrame);
      }
      if (loadedCount === FRAME_COUNT) {
        drawFrame(currentFrame);
      }
    };
    images[i] = img;
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener(
    "resize",
    () => {
      sizeCanvas();
      drawFrame(currentFrame);
    },
    { passive: true }
  );

  sizeCanvas();
  drawFrame(currentFrame);
})();

(function () {
  const deck = document.getElementById("testiDeck");
  const dotsWrap = document.getElementById("testiDots");
  const prev = document.getElementById("testiPrev");
  const next = document.getElementById("testiNext");
  if (!deck || !dotsWrap || !prev || !next) return;

  const cards = Array.from(deck.querySelectorAll(".tcard"));
  const total = cards.length;
  let current = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  for (let i = 0; i < total; i += 1) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `מעבר לעדות ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  }

  const dots = Array.from(dotsWrap.querySelectorAll("button"));

  function render() {
    deck.style.transform = `translateX(${current * -100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  function goTo(index) {
    current = (index + total) % total;
    render();
  }

  prev.addEventListener("click", () => goTo(current - 1));
  next.addEventListener("click", () => goTo(current + 1));

  deck.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true }
  );

  deck.addEventListener(
    "touchend",
    (event) => {
      touchEndX = event.changedTouches[0].clientX;
      const delta = touchEndX - touchStartX;
      if (Math.abs(delta) < 30) return;
      if (delta > 0) goTo(current - 1);
      if (delta < 0) goTo(current + 1);
    },
    { passive: true }
  );

  render();
})();

(function () {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => io.observe(el));
})();
