import I18n from 'react-native-i18n';
import az from './az';
import en from './en';

I18n.fallbacks = true;
I18n.defaultLocale = 'en-EN';

I18n.translations = {
  az,
  en
};

export default I18n;
