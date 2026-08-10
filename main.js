/* ============================================================
   KEDROXWRLD — Interactions & Behaviors
   ============================================================ */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------- Sticky header shadow ---------- */
  const header = $("#siteHeader");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
    $("#scrollProgress").style.width = progress + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer ---------- */
  const drawer = $("#drawer");
  const backdrop = $("#drawerBackdrop");
  const hamburger = $("#hamburger");
  const drawerClose = $("#drawerClose");

  function openDrawer() {
    drawer.classList.add("open");
    backdrop.classList.add("show");
    hamburger.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("show");
    hamburger.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  hamburger.addEventListener("click", () =>
    drawer.classList.contains("open") ? closeDrawer() : openDrawer()
  );
  drawerClose.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeDrawer(); }
  });
  $$(".drawer-link").forEach((link) => link.addEventListener("click", closeDrawer));

  /* ---------- Scroll-spy nav highlighting ---------- */
  const sections = $$("main section[id]");
  const navLinks = $$(".nav-link");
  const map = {};
  sections.forEach((s) => (map[s.id] = s));

  function setActive(id) {
    navLinks.forEach((l) =>
      l.classList.toggle("is-active", l.getAttribute("href") === "#" + id)
    );
  }
  setActive("home");

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => spy.observe(s));

  /* ---------- Scroll-triggered reveal ---------- */
  const revealEls = $$(".reveal");
  if (prefersReduced) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const reveal = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => reveal.observe(el));
  }

  /* ---------- Animated counters ---------- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const start = performance.now();

    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  $$(".stat-num").forEach((el) => counterObserver.observe(el));

  /* ---------- Portfolio expand/collapse ---------- */
  const workGrid = $("#workGrid");
  const workToggle = $("#workToggle");
  const extraCards = $$(".work-card-extra");
  function setWorkExpanded(expand) {
    workGrid.classList.toggle("is-expanded", expand);
    workToggle.innerHTML = expand
      ? 'SHOW LESS <span class="arrow" aria-hidden="true">↑</span>'
      : 'VIEW ALL PROJECTS <span class="arrow" aria-hidden="true">→</span>';
    if (expand) extraCards.forEach((el) => el.classList.add("is-visible"));
  }
  workToggle.addEventListener("click", () => setWorkExpanded(!workGrid.classList.contains("is-expanded")));

  /* ---------- About Read More expand/collapse ---------- */
  const aboutToggle = $("#aboutToggle");
  const aboutMore = $("#aboutMore");
  aboutToggle.addEventListener("click", () => {
    const open = aboutMore.classList.toggle("is-open");
    aboutToggle.innerHTML = open
      ? 'SHOW LESS <span class="arrow" aria-hidden="true">↑</span>'
      : 'READ MORE <span class="arrow" aria-hidden="true">→</span>';
  });

  /* ---------- Magnetic buttons ---------- */
  if (!prefersReduced && window.matchMedia("(pointer: fine)").matches) {
    $$(".magnetic").forEach((btn) => {
      const strength = 26;
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.35}px) scale(1.04)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)";
        btn.style.transform = "";
        setTimeout(() => (btn.style.transition = ""), 500);
      });
    });
  }

  /* ---------- Footer accordions (mobile) ---------- */
  const accordions = $$(".footer-accordion");
  const mqMobile = window.matchMedia("(max-width: 760px)");
  function initAccordion() {
    accordions.forEach((acc, i) => {
      const head = $(".footer-head", acc);
      const links = $(".footer-links", acc);
      if (mqMobile.matches) {
        head.setAttribute("role", "button");
        head.setAttribute("tabindex", "0");
        head.setAttribute("aria-expanded", "false");
        if (i === 0) { acc.classList.add("open"); head.setAttribute("aria-expanded", "true"); }
        const toggle = () => {
          const isOpen = acc.classList.contains("open");
          acc.classList.toggle("open", !isOpen);
          head.setAttribute("aria-expanded", String(!isOpen));
        };
        head.onclick = toggle;
        head.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } };
        links.style.maxHeight = acc.classList.contains("open") ? links.scrollHeight + "px" : "";
      } else {
        head.removeAttribute("role");
        head.removeAttribute("tabindex");
        head.removeAttribute("aria-expanded");
        head.onclick = null;
        head.onkeydown = null;
        links.style.maxHeight = "";
        acc.classList.remove("open");
      }
    });
  }
  initAccordion();
  mqMobile.addEventListener("change", initAccordion);

  /* ---------- Smooth-scroll with header offset fallback ---------- */
  function scrollToSection(target) {
    const offset = header.offsetHeight + 18;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
  }
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      scrollToSection(target);
    });
  });
})();
