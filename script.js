/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelectorAll(".fade-in"),
    t = new IntersectionObserver(
      (e, t) => {
        e.forEach((e) => {
          e.isIntersecting &&
            (e.target.classList.add("visible"), t.unobserve(e.target));
        });
      },
      { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
  e.forEach((e) => t.observe(e));
  const n = document.getElementById("leadForm"),
    o = document.getElementById("sendWhatsappBtn"),
    r = document.getElementById("formFeedback"),
    c = "22394495490";
  function a(e) {
    e && e.preventDefault();
    const t = document.getElementById("name").value.trim(),
      n = document.getElementById("phone").value.trim(),
      o = document.getElementById("service-select").value;
    if (!t || !n || !o)
      return (
        (r.style.color = "#d9534f"),
        void (r.textContent =
          "⚠️ Veuillez remplir tous les champs avant de continuer.")
      );
    ((r.style.color = "var(--primary-dark)"),
      (r.textContent = "⚡ Redirection vers WhatsApp..."));
    const a = encodeURIComponent(
      `Bonjour La Maison Pilates Bko, je souhaite m'inscrire !\n\n👤 *Nom* : ${t}\n📞 *Téléphone* : ${n}\n🎯 *Formule* : ${o}\n\nMerci !`,
    );
    window.open(`https://wa.me/${c}?text=${a}`, "_blank");
  }
  (n.addEventListener("submit", a),
    o.addEventListener("click", () => {
      a(null);
    }));
});
