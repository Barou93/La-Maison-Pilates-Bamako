# La Maison Pilates Bko — Landing Page & Tunnel Marketing

Ce projet est une landing page épurée, performante et optimisée pour la conversion mobile, développée spécifiquement pour le studio **La Maison Pilates Bko** situé à Baco Djicoroni ACI (Bamako). 

Le site a été conçu pour servir à la fois d'outil d'acquisition client direct via WhatsApp Business et de laboratoire d'apprentissage pratique pour des formations en marketing digital (SEO, Web Analytics, Tracking publicitaire et CRM).

## Caractéristiques principales

* **Architecture de conversion (AIDA) :** Le parcours utilisateur est structuré comme un tunnel de vente direct, captivant l'attention dès l'accroche (Hero) et maximisant l'intérêt des prospects à travers une présentation claire des spécialités et des tarifs transparents.
* **Stratégie Zéro Backend (WhatsApp Business CRM) :** Conçu sans infrastructure de base de données lourde ou payante. Les données saisies dans le formulaire de contact valident les entrées de l'utilisateur et génèrent instantanément un message pré-rempli et formaté envoyé directement sur le compte WhatsApp Business du studio.
* **SEO & Performance :** Code HTML5 100% sémantique intégrant les balises de données structurées (`JSON-LD` LocalBusiness) pour optimiser le référencement local à Bamako. Aucun framework JavaScript ou CSS lourd n'est utilisé, garantissant un affichage instantané même sur les connexions mobiles instables.
* **Design Fluide & Mobile-First :** Interface épurée et responsive s'adaptant de manière fluide à tous les types d'écrans (smartphones, tablettes, ordinateurs de bureau) grâce à des propriétés CSS modernes (`clamp()`, CSS Grid et Flexbox). Elle prend nativement en compte l'image officielle du logo (`desktop.png`) et le favicon (`favion.png`).

## Structure du projet

* `index.html` : Structure sémantique complète, métadonnées SEO, balises de partage social Open Graph et intégration des scripts tiers (icônes Lucide).
* `style.css` : Charte graphique du studio (combinaison de vert sauge et de teintes lin), gestion de la réactivité des composants et styles des micro-animations.
* `script.js` : Gestion des micro-animations au défilement de la page (via l'API native *Intersection Observer*) et logique de routage du formulaire vers l'API WhatsApp.
* `desktop.png` : Identité visuelle principale intégrée de manière fluide dans la barre de navigation.
* `favion.png` : Icône de marque affichée directement dans l'onglet du navigateur internet.

## Configuration et déploiement

### Déploiement gratuit
Pour mettre ce site en ligne instantanément et sans frais de serveur :
1. Créez un compte gratuit sur [Netlify](https://www.netlify.com/).
2. Glissez-déposez le dossier racine du projet contenant l'intégralité de ces fichiers sur l'interface web de Netlify.
3. Votre site est immédiatement disponible via une URL sécurisée HTTPS (ex: `maison-pilates.netlify.app`).

### Configuration du point de contact WhatsApp
Ouvrez le fichier `script.js` et modifiez la constante suivante en y insérant le numéro de téléphone de l'entreprise au format international, sans le caractère `+` ni les espaces :
```javascript
const WHATSAPP_NUMBER = "223XXXXXXXX"; // Remplacer par le numéro de téléphone au Mali