/** @format */

document.addEventListener("DOMContentLoaded", () => {
  // --- Initialisation des icônes Lucide ---
  lucide.createIcons();

  // --- 1. Micro-animations au défilement ---
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearanceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach((element) => appearanceObserver.observe(element));

  // --- 2. Gestion Unique via WhatsApp (Zéro Backend) ---
  const leadForm = document.getElementById("leadForm");
  const sendWhatsappBtn = document.getElementById("sendWhatsappBtn");
  const formFeedback = document.getElementById("formFeedback");

  // Remplacer par ton vrai numéro WhatsApp Business (ex: 22370000000)
  const WHATSAPP_NUMBER = "22371812544";

  // Fonction principale de redirection
  function handleSubscription(e) {
    if (e) e.preventDefault(); // Bloque le rechargement de la page si c'est le formulaire

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service-select").value;

    // Validation simple
    if (!name || !phone || !service) {
      formFeedback.style.color = "#d9534f";
      formFeedback.textContent =
        "⚠️ Veuillez remplir tous les champs avant de continuer.";
      return;
    }

    formFeedback.style.color = "var(--primary-dark)";
    formFeedback.textContent = "⚡ Redirection vers WhatsApp...";

    // Formatage du message pour ton WhatsApp Business
    const textMessage =
      `Bonjour La Maison Pilates Bko, je souhaite m'inscrire !\n\n` +
      `👤 *Nom :* ${name}\n` +
      `📞 *Contact :* ${phone}\n` +
      `🧘 *Formule choisie :* ${service}\n\n` +
      `Merci de me recontacter pour confirmer mon premier cours !`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(textMessage)}`;

    // Ouvre WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, "_blank");
  }

  // Action 1 : Clic sur le bouton principal "Envoyer l'inscription"
  leadForm.addEventListener("submit", handleSubscription);

  // Action 2 : Clic sur le bouton secondaire "S'inscrire via WhatsApp"
  sendWhatsappBtn.addEventListener("click", handleSubscription);
});
