import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const initI18N = () =>
  i18n
    .use(
      resourcesToBackend((language, namespace, callback) => {
        import(`./locales/${language}/${namespace}.ts`)
          .then((resources) => {
            const resourceConstName = namespace.slice(
              namespace.lastIndexOf('/') + 1
            );

            callback(null, resources[resourceConstName]);

            return resources;
          })
          .catch((error) => {
            callback(error, null);
          });
      })
    )
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: process.env.NODE_ENV !== 'production',
      fallbackLng: 'en',
      ns: [],
      interpolation: {
        // not needed for react as it escapes by default
        escapeValue: false,
      },
    });

export { initI18N };
