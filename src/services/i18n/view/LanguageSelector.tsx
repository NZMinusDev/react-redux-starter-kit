import React from 'react';
import { useTranslation } from 'react-i18next';

import { Autocomplete, TextField } from '@shared/components/primitives';

interface LanguageSelectorProps {}

const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const { t, i18n } = useTranslation('services/i18n');
  const languages = [{ label: 'en' }, { label: 'ru' }];
  const language = languages.find(
    (value) => value.label === i18n.resolvedLanguage
  );

  const onChange = <T extends string | { label: string } | null>(
    event: React.SyntheticEvent,
    value: T | Array<T>
  ) => {
    if (value instanceof Object && 'label' in value) {
      i18n.changeLanguage(value.label);
    }
  };

  return (
    <Autocomplete
      options={languages}
      value={language}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} label={t('label')} />}
      disableClearable
    />
  );
};

export { LanguageSelector };
