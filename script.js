
const translations = {
  el: {
    title: "Φάρμα της Νικολέτας",
    subtitle: "Βρίσκεται στην Περαία Θεσσαλονίκης",
    'hero-title': "Καλώς ήρθατε στη φάρμα μας!",
    'hero-text': "Εξερευνήστε τις υπηρεσίες και τα όμορφα άλογά μας.",
    'services-title': "Υπηρεσίες / Services",
    'services-list': [
      "Ιππασία για αρχάριους",
      "Μαθήματα ιππασίας",
      "Εκδρομές με άλογα",
      "Ενοικίαση στάβλων"
    ],
    'gallery-title': "Gallery",
    'contact-title': "Επικοινωνία / Contact"
  },
  en: {
    title: "Nikoleta's Farm",
    subtitle: "Located in Peraia, Thessaloniki",
    'hero-title': "Welcome to our horse farm!",
    'hero-text': "Explore our services and beautiful horses.",
    'services-title': "Services",
    'services-list': [
      "Horseback riding for beginners",
      "Riding lessons",
      "Horse tours",
      "Stable rentals"
    ],
    'gallery-title': "Gallery",
    'contact-title': "Contact"
  }
};

function setLanguage(lang) {
  document.getElementById('title').textContent = translations[lang].title;
  document.getElementById('subtitle').textContent = translations[lang].subtitle;
  document.getElementById('hero-title').textContent = translations[lang]['hero-title'];
  document.getElementById('hero-text').textContent = translations[lang]['hero-text'];
  document.getElementById('services-title').textContent = translations[lang]['services-title'];
  const serviceItems = document.getElementById('services-list').children;
  translations[lang]['services-list'].forEach((text, i) => {
    serviceItems[i].textContent = text;
  });
  document.getElementById('gallery-title').textContent = translations[lang]['gallery-title'];
  document.getElementById('contact-title').textContent = translations[lang]['contact-title'];
}
