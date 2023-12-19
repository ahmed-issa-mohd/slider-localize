import translations from './translations.js';

const languageSelector = document.querySelector('select');
languageSelector.addEventListener('change', (event) => {
  setLanguage(event.target.value);
  localStorage.setItem('lang', event.target.value);
  //   location.reload();
});

document.addEventListener('DOMContentLoaded', () => {
  const language = localStorage.getItem('lang') || 'en'; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
  $(document).ready(function () {
    if (language == 'ar') {
      $('.slider').slick({
        rtl: true,
        arrows: false,
        dots: true,
      });
      console.log('ar');
    } else {
      $('.slider').slick({
        ltr: true,
        arrows: false,
        dots: true,
      });
    }
  });
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((element) => {
    const translationKey = element.getAttribute('data-i18n');
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === 'ar' ? 'rtl' : 'ltr';
  if (language == 'ar') {
    document.dir = 'rtl';
    document.getElementById('SL').querySelector("[value='ar']").selected =
      'true';
  } else {
    document.dir = 'ltr';
    document.getElementById('SL').querySelector("[value='en']").selected =
      'true';
  }
};
