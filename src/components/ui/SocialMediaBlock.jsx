import React from 'react'
import { useTranslation } from 'react-i18next'

const SocialMediaBlock = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('social.joinUs')}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {t('social.followUpdates')}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <a 
          href="https://vk.com/group" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.48 14.27h-1.46c-.55 0-.72-.44-1.71-1.42-.86-.86-1.24-.96-1.45-.96-.31 0-.4.1-.4.65v1.3c0 .47-.14.67-1.24.67-1.82 0-3.74-1.14-5.05-3.27C6.68 10.91 6.6 9.7 6.6 9.46c0-.21.1-.4.65-.4h1.46c.47 0 .61.21.78.67.76 2.26 2.02 4.23 2.54 4.23.18 0 .27-.09.27-.58V9.5c-.06-1-.58-1.08-.58-1.44 0-.18.14-.36.36-.36h2.28c.31 0 .42.15.42.49v2.66c0 .31.18.42.27.42.18 0 .31-.09.6-.89.39-1.18 1.12-3.36 1.12-3.36.09-.18.27-.36.66-.36h1.46c.55 0 .67.27.55.66-.24 1.14-2.57 4.53-2.57 4.53-.2.31-.27.42 0 .76.18.27.78.84 1.18 1.34.78.91 1.34 1.69 1.5 2.21.14.47-.09.71-.55.71z"/>
          </svg>
          <span className="text-sm font-medium">ВКонтакте</span>
        </a>
        
        <a 
          href="https://facebook.com/group" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span className="text-sm font-medium">Facebook</span>
        </a>
        
        <a 
          href="https://twitter.com/group" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
          <span className="text-sm font-medium">Twitter</span>
        </a>
        
        <a 
          href="https://t.me/group" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          <span className="text-sm font-medium">Telegram</span>
        </a>
      </div>
    </div>
  )
}

export default SocialMediaBlock
