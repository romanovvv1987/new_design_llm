import React from 'react'
import { useTranslation } from 'react-i18next'
import { Bookmark } from 'lucide-react'

const ReadingListBlock = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Bookmark className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">{t('sidebar.readingList')}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        {t('readingList.instructions')}
      </p>
      <div className="text-center py-8">
        <Bookmark className="h-12 w-12 text-gray-300 mx-auto mb-3" />
        <p className="text-sm text-gray-500">{t('sidebar.readingListEmpty')}</p>
        <p className="text-xs text-gray-400 mt-1">{t('sidebar.readingListDescription')}</p>
      </div>
    </div>
  )
}

export default ReadingListBlock
