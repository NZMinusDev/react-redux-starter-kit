// import the original type declarations
import 'react-i18next';

import type { common, features, services, modules, shared } from './locales/en';

type ResourcesRecord<TFile extends object, TPath extends string> = {
  [K in keyof TFile as `${TPath}/${K}`]: TFile[K];
};

type CommonRecord = ResourcesRecord<typeof common, 'common'>;
type FeaturesRecord = ResourcesRecord<typeof features, 'features'>;
type ServicesRecord = ResourcesRecord<typeof services, 'services'>;
type ModulesRecord = ResourcesRecord<typeof modules, 'modules'>;
type SharedRecord = ResourcesRecord<typeof shared, 'shared'>;

type TranslationResources = CommonRecord &
  FeaturesRecord &
  ServicesRecord &
  ModulesRecord &
  SharedRecord;

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: TranslationResources;
  }
}
