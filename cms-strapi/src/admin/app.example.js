const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  theme: {
    light: {
      colors: {
        primary700: '#D5172A',
        primary600: '#DF6267',
        primary500: '#E9A5A7',
        primary200: '#F7E3E4',
        primary100: '#FCF3F3',
        buttonPrimary700: '#891217',
        buttonPrimary600: '#000000',
        buttonPrimary500: '#891217'
      }
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
