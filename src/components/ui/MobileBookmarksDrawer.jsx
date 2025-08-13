import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Bookmark, X, Plus, Share2, MoreHorizontal } from 'lucide-react'
import { Button } from './Button'

const MobileBookmarksDrawer = ({ isOpen, onClose }) => {
  const { t } = useTranslation()
  const [bookmarks] = useState([
    {
      id: 1,
      title: "GPT-4 превосходит GPT-3.5 — вот что изменилось",
      author: "George J. Ziogas",
      date: "2 часа назад",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*ZkeGGo0gnAiD39Rs3nD2mg.jpeg"
    },
    {
      id: 2,
      title: "ChatGPT vs Claude: детальное сравнение возможностей",
      author: "AI Research Team",
      date: "4 часа назад",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop"
    }
  ])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Bookmark className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">{t('sidebar.readingList')}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {bookmarks.length > 0 ? (
            <div className="p-4 space-y-4">
              {bookmarks.map((bookmark) => (
                <div key={bookmark.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <img 
                      src={bookmark.image} 
                      alt={bookmark.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                      {bookmark.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">{bookmark.author}</p>
                    <p className="text-xs text-gray-400">{bookmark.date}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                      <Share2 className="h-4 w-4 text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                      <MoreHorizontal className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <Bookmark className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500 mb-2">{t('sidebar.readingListEmpty')}</p>
              <p className="text-xs text-gray-400">{t('sidebar.readingListDescription')}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <Button className="w-full" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            {t('button.createList')}
          </Button>
        </div>
      </div>
    </>
  )
}

export default MobileBookmarksDrawer
