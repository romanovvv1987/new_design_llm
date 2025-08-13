import React from 'react';
import { useTranslation } from 'react-i18next';
import { AlertCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/Tooltip';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  // Определяем язык браузера
  const browserLanguage = navigator.language?.split('-')[0] || 'en';
  const isLanguageMismatch = i18n.language !== browserLanguage;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center gap-2 relative">
          {isLanguageMismatch && (
            <AlertCircle className="absolute -top-1 -right-1 h-3 w-3 text-orange-500 bg-white rounded-full z-10" />
          )}
          <button
            onClick={() => changeLanguage('ru')}
            className={`px-2 py-1 text-sm rounded ${
              i18n.language === 'ru'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {t('language.russian')}
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`px-2 py-1 text-sm rounded ${
              i18n.language === 'en'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {t('language.english')}
          </button>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        {isLanguageMismatch 
          ? `Язык интерфейса (${i18n.language}) отличается от языка браузера (${browserLanguage})`
          : "Переключить язык"
        }
      </TooltipContent>
    </Tooltip>
  );
};

export default LanguageSwitcher;
