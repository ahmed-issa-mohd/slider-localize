const translations = {
  en: {
    home: 'Home',
    about: 'About',
    contact: 'Contact us',
    selectLanguage: 'Select a language',
    english: 'English',
    arabic: 'Arabic',
  },
  ar: {
    home: 'الصفحة الرئيسية',
    about: 'من نحن',
    contact: 'تواصل معنا',
    selectLanguage: 'إختر لغة',
    english: 'الانجليزية',
    arabic: 'العربية',
  },
};

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

const languageSelector = document.querySelector('select');
languageSelector.addEventListener('change', (event) => {
  setLanguage(event.target.value);
  localStorage.setItem('lang', event.target.value);
  location.reload();
});
