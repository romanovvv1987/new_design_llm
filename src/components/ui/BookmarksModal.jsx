import React from 'react'
import { useTranslation } from 'react-i18next'
import { Bookmark, X, Share2, Trash2 } from 'lucide-react'

const BookmarksModal = ({ isOpen, onClose, bookmarks = [], onRemoveBookmark, onClearAll }) => {
  const { t } = useTranslation()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Full Screen */}
      <div className="fixed inset-0 bg-white z-50 lg:hidden">
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
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {bookmarks.length > 0 ? (
            <div className="p-4 space-y-4">
              {bookmarks.map((bookmark) => (
                <div key={bookmark.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <img 
                      src={bookmark.image} 
                      alt={bookmark.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900 line-clamp-2 mb-2">
                      {bookmark.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-1">{bookmark.author}</p>
                    <p className="text-sm text-gray-400">{bookmark.date}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => onRemoveBookmark && onRemoveBookmark(bookmark.id)}
                      className="p-2 hover:bg-red-100 rounded transition-colors"
                    >
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                      <Share2 className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <Bookmark className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-base text-gray-500 mb-3">{t('sidebar.readingListEmpty')}</p>
              <p className="text-sm text-gray-400">{t('sidebar.readingListDescription')}</p>
            </div>
          )}
        </div>

        {/* Footer with Clear All button */}
        {bookmarks.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            <button 
              onClick={onClearAll}
              className="w-full text-base text-red-600 hover:text-red-700 hover:bg-red-50 px-4 py-3 rounded-lg transition-colors font-medium"
            >
              Очистить все
            </button>
          </div>
        )}

      </div>
    </>
  )
}

export default BookmarksModal
