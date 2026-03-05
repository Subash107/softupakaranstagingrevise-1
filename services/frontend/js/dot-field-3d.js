(function () {
  const TAU = Math.PI * 2;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

function prefersReducedMotion() {
  return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}
function qualityScale() {
  var cpu = Number(navigator.hardwareConcurrency || 4);
  var memory = Number(navigator.deviceMemory || 4);
  var smallScreen = window.innerWidth < 900;
  var lowPower = cpu <= 4 || memory <= 4;
  if (lowPower && smallScreen) return 0.45;
  if (lowPower) return 0.58;
  if (smallScreen) return 0.72;
  return 1;
}

  function normalizeAngleDelta(current, target) {
    let delta = (target - current) % TAU;
    if (delta > Math.PI) delta -= TAU;
    if (delta < -Math.PI) delta += TAU;
    return delta;
  }

  class DotField3D {
    constructor(host, canvas, options) {
      this.host = host;
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d", { alpha: true });
      this.options = Object.assign(
        {
          pattern: "flow",
          density: 1.2,
          minDots: 36,
          maxDots: 140,
          pointerRadius: 170,
          pointerStrength: 0.22,
          swirlStrength: 0.3,
          frameMs: 30,
          palette: [212, 228, 248, 266, 284, 336, 18, 36],
          onlyWhenActive: false,
          getReducedMotion: prefersReducedMotion,
        },
        options || {}
      );
      this.dots = [];
      this.width = 0;
      this.height = 0;
      this.dpr = 1;
      this.running = false;
      this.visible = true;
      this.pointer = { active: false, x: 0, y: 0 };
      this.io = null;
      this.raf = 0;
      this.sleepTimer = 0;
      this.lastDrawAt = 0;
      this.onResize = this.onResize.bind(this);
      this.onPointerMove = this.onPointerMove.bind(this);
      this.clearPointer = this.clearPointer.bind(this);
      this.tick = this.tick.bind(this);
    }

    onResize() {
      this.resize();
    }

    onPointerMove(event) {
      if (event.pointerType === "touch" && !event.isPrimary) return;
      const rect = this.host.getBoundingClientRect();
      this.pointer.active = true;
      this.pointer.x = event.clientX - rect.left;
      this.pointer.y = event.clientY - rect.top;
    }

    clearPointer() {
      this.pointer.active = false;
    }

    bind() {
      window.addEventListener("resize", this.onResize, { passive: true });
      this.host.addEventListener("pointermove", this.onPointerMove, { passive: true });
      this.host.addEventListener("pointerdown", this.onPointerMove, { passive: true });
      this.host.addEventListener("pointerleave", this.clearPointer);
      this.host.addEventListener("pointerup", this.clearPointer);
      this.host.addEventListener("pointercancel", this.clearPointer);
      if ("IntersectionObserver" in window) {
        this.io = new IntersectionObserver(
          (entries) => {
            const entry = entries && entries[0];
            this.visible = !!(entry && entry.isIntersecting);
          },
          { threshold: 0, rootMargin: "120px 0px" }
        );
        this.io.observe(this.host);
      }
    }

    resize() {
      const rect = this.host.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      if (width === this.width && height === this.height && this.dots.length) return;
      this.width = width;
      this.height = height;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = Math.round(width * this.dpr);
      this.canvas.height = Math.round(height * this.dpr);
      this.canvas.style.width = `${width}px`;
      this.canvas.style.height = `${height}px`;
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      this.seedDots();
    }

    seedDots() {
      const area = this.width * this.height;
      const density = this.options.density || 1;
      const rawCount = Math.round((area / 6200) * density);
      const count = clamp(rawCount, this.options.minDots, this.options.maxDots);
      const dots = [];
      const centerX = this.width * 0.5;
      const centerY = this.height * 0.54;
      const ringMin = Math.min(this.width, this.height) * 0.18;
      const ringMax = Math.hypot(this.width, this.height) * 0.52;
      for (let i = 0; i < count; i += 1) {
        let baseX;
        let baseY;
        if (this.options.pattern === "ring" && Math.random() > 0.2) {
          const t = (i / Math.max(1, count)) * TAU + rand(-0.2, 0.2);
          const radius = ringMin + Math.pow(Math.random(), 0.72) * (ringMax - ringMin);
          baseX = centerX + Math.cos(t) * radius;
          baseY = centerY + Math.sin(t) * radius * rand(0.82, 1.1);
        } else {
          baseX = rand(0, this.width);
          baseY = rand(0, this.height);
        }
        const hue = this.options.palette[Math.floor(Math.random() * this.options.palette.length)];
        const phase = rand(0, TAU);
        dots.push({
          baseX,
          baseY,
          x: baseX,
          y: baseY,
          phase,
          speed: rand(0.45, 1.35),
          driftX: rand(1.2, 6.2),
          driftY: rand(1.2, 6.8),
          hue,
          alpha: rand(0.35, 0.9),
          length: rand(2.6, 8.4),
          thickness: rand(0.8, 2.0),
          angle: rand(0, TAU),
          spin: rand(-0.45, 0.45),
          orbitAngle: rand(0, TAU),
          orbitRadius: rand(4, Math.min(this.width, this.height) * 0.06),
          orbitSpeed: rand(0.06, 0.28),
          influence: 0,
        });
      }
      this.dots = dots;
    }

    shouldRender() {
      if (!this.visible) return false;
      if (!this.options.onlyWhenActive) return true;
      return this.host.getAttribute("data-active") === "1";
    }

    draw(nowMs) {
      const ctx = this.ctx;
      const reduced = !!this.options.getReducedMotion();
      const t = nowMs * 0.001;
      const pointerRadius = Math.max(72, this.options.pointerRadius * (Math.min(this.width, this.height) / 520));
      const pointerStrength = this.options.pointerStrength;
      const swirlStrength = reduced ? this.options.swirlStrength * 0.2 : this.options.swirlStrength;
      const cx = this.width * 0.5;
      const cy = this.height * 0.5;
      ctx.clearRect(0, 0, this.width, this.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.lineCap = "round";
      for (let i = 0; i < this.dots.length; i += 1) {
        const dot = this.dots[i];
        const driftScale = reduced ? 0.22 : 1;
        const waveX = Math.cos(t * dot.speed + dot.phase) * dot.driftX * driftScale;
        const waveY = Math.sin(t * (dot.speed * 1.14) + dot.phase * 1.08) * dot.driftY * driftScale;
        dot.orbitAngle += dot.orbitSpeed * 0.012;
        const swirlX = Math.cos(dot.orbitAngle + t * 0.35) * dot.orbitRadius * swirlStrength;
        const swirlY = Math.sin(dot.orbitAngle + t * 0.35) * dot.orbitRadius * swirlStrength;
        let targetX = dot.baseX + waveX + swirlX;
        let targetY = dot.baseY + waveY + swirlY;
        let targetAngle = dot.angle + Math.sin(t * (dot.speed + dot.spin) + dot.phase) * 0.55;
        const centerDX = targetX - cx;
        const centerDY = targetY - cy;
        const centerDist = Math.hypot(centerDX, centerDY) || 1;
        if (swirlStrength > 0.01) {
          const tangentAngle = Math.atan2(centerDY, centerDX) + Math.PI * 0.5;
          targetAngle += normalizeAngleDelta(targetAngle, tangentAngle) * 0.18;
          if (this.options.pattern === "ring") {
            const orbitalPull = clamp((centerDist / Math.max(1, Math.min(this.width, this.height) * 0.6)), 0, 1);
            targetX += Math.cos(tangentAngle) * orbitalPull * 1.6 * swirlStrength;
            targetY += Math.sin(tangentAngle) * orbitalPull * 1.6 * swirlStrength;
          }
        }
        let influence = 0;
        if (!reduced && this.pointer.active) {
          const dx = this.pointer.x - targetX;
          const dy = this.pointer.y - targetY;
          const dist = Math.hypot(dx, dy) || 1;
          influence = clamp(1 - dist / pointerRadius, 0, 1);
          if (influence > 0) {
            const pull = influence * influence * pointerStrength;
            targetX += dx * pull;
            targetY += dy * pull;
            targetAngle = Math.atan2(dy, dx);
          }
        }
        dot.influence += (influence - dot.influence) * 0.16;
        dot.x += (targetX - dot.x) * (reduced ? 0.08 : 0.13);
        dot.y += (targetY - dot.y) * (reduced ? 0.08 : 0.13);
        dot.angle += normalizeAngleDelta(dot.angle, targetAngle) * 0.2;

        const renderLength = dot.length * (1 + dot.influence * 1.25);
        const renderAlpha = dot.alpha * (0.65 + dot.influence * 0.58);
        const lightness = 58 + dot.influence * 20;

        ctx.save();
        ctx.translate(dot.x, dot.y);
        ctx.rotate(dot.angle);
        ctx.strokeStyle = `hsla(${dot.hue}, 96%, ${lightness}%, ${renderAlpha})`;
        ctx.lineWidth = dot.thickness * (1 + dot.influence * 0.35);
        ctx.beginPath();
        ctx.moveTo(-renderLength * 0.5, 0);
        ctx.lineTo(renderLength * 0.5, 0);
        ctx.stroke();
        ctx.restore();
      }
      ctx.globalCompositeOperation = "source-over";
    }

    tick(now) {
      if (!this.running) return;
      if (!this.shouldRender()) {
        this.sleepTimer = window.setTimeout(() => {
          this.raf = window.requestAnimationFrame(this.tick);
        }, 180);
        return;
      }
      if (now - this.lastDrawAt >= this.options.frameMs) {
        this.draw(now);
        this.lastDrawAt = now;
      }
      this.raf = window.requestAnimationFrame(this.tick);
    }

    start() {
      if (!this.ctx || this.running) return;
      this.running = true;
      this.bind();
      this.resize();
      this.draw(performance.now());
      this.lastDrawAt = performance.now();
      this.raf = window.requestAnimationFrame(this.tick);
    }
  }

  function attachHeroFields() {
    const slider = document.querySelector("[data-hero-slider]");
    if (!slider) return;
    const track = slider.querySelector(".heroSliderTrack");
    if (!track) return;
    const q = qualityScale();
    const getReducedMotion = () =>
      slider.classList.contains("heroSlider--reduced-motion") || prefersReducedMotion();
    const mountSlides = () => {
      Array.from(track.children).forEach((slide) => {
        if (!(slide instanceof HTMLElement)) return;
        if (!slide.classList.contains("heroSlide")) return;
        if (slide.querySelector(".heroScatterField")) return;
        const canvas = document.createElement("canvas");
        canvas.className = "heroScatterField";
        canvas.setAttribute("aria-hidden", "true");
        slide.appendChild(canvas);
        const field = new DotField3D(slide, canvas, {
          pattern: "ring",
          density: 1.75 * q,
          minDots: Math.round(84 * q),
          maxDots: Math.round(170 * q),
          pointerRadius: 240,
          pointerStrength: 0.28,
          swirlStrength: 0.62,
          frameMs: 30,
          palette: [214, 226, 238, 252, 267, 286, 334, 12, 32, 48],
          onlyWhenActive: true,
          getReducedMotion,
        });
        field.start();
      });
    };
    mountSlides();
    const observer = new MutationObserver(mountSlides);
    observer.observe(track, { childList: true });
  }

  function attachHighlightSlideFields() {
    const slides = document.querySelectorAll(".slider--highlight .slide");
    if (!slides.length) return;
    const q = qualityScale();
    slides.forEach((slide) => {
      if (!(slide instanceof HTMLElement)) return;
      if (slide.querySelector(".slideScatterField")) return;
      const canvas = document.createElement("canvas");
      canvas.className = "slideScatterField";
      canvas.setAttribute("aria-hidden", "true");
      slide.insertBefore(canvas, slide.firstChild);
      const field = new DotField3D(slide, canvas, {
        pattern: "flow",
        density: 0.95 * q,
        minDots: Math.round(26 * q),
        maxDots: Math.round(56 * q),
        pointerRadius: 150,
        pointerStrength: 0.24,
        swirlStrength: 0.36,
        frameMs: 36,
        palette: [188, 204, 224, 246, 273, 328, 18, 36],
        onlyWhenActive: true,
        getReducedMotion: prefersReducedMotion,
      });
      field.start();
    });
  }

  function initDotField3D() {
    let booted = false;
    const boot = () => {
      if (booted) return;
      booted = true;
      attachHeroFields();
      attachHighlightSlideFields();
    };
    const defer = (fn, timeoutMs) => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(fn, { timeout: timeoutMs || 1200 });
        return;
      }
      window.setTimeout(fn, Math.min(timeoutMs || 180, 240));
    };
    const eagerStart = () => defer(boot, 120);
    const interactionEvents = ["pointerdown", "pointermove", "touchstart", "keydown", "scroll"];
    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, eagerStart, { once: true, passive: true });
    });
    // Keep startup light: initialize effects after idle or first interaction.
    defer(boot, 3800);
    document.addEventListener("hero:ready", () => defer(boot, 1200), { once: false });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDotField3D, { once: true });
  } else {
    initDotField3D();
  }
})();
