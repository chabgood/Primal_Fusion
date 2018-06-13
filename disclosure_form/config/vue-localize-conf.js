import translations from './vue-localize-translations'
export default {
  languages: {
    en: {
      key: 'eng',
      enabled: true
    },
    ru: {
      key: 'rus',
      enabled: true
    },
    de: {
      key: 'deu',
      enabled: false
    }
  },
  defaultLanguage: 'en',
  translations: translations,
  defaultLanguageRoute: true,
  resaveOnLocalizedRoutes: false,
  defaultContextName: 'global',
  fallbackOnNoTranslation: false,
  fallbackLanguage: 'en',
  supressWarnings: false
}
