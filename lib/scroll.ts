export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.getElementById("site-header");
  const offset = (header?.offsetHeight ?? 76) + 18;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
