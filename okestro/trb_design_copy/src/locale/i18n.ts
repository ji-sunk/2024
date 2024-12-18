import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEn from './lang/en-US.json';
import translationKo from './lang/ko-KR.json';

const resources = {
  en: {
    translation: translationEn,
  },
  ko: {
    translation: translationKo,
  },
};

i18n
  .use(initReactI18next) // react-i18next를 초기화합니다.
  .use(LanguageDetector) // 브라우저 언어 감지 기능을 추가합니다.
  .init({
    resources,
    debug: true,
    nonExplicitSupportedLngs: true, // 지역화된 언어 코드를 일반 코드로 처리

    fallbackLng: 'ko',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // 사용자의 언어 설정을 캐시하기 위한 방법 목록
    },
  });

export default i18n;
