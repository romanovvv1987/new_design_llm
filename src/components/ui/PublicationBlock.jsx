import React from 'react'
import { Heart } from 'lucide-react'

const PublicationBlock = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 mb-1">
            AI & Technology Insights
          </h4>
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">
            Публикация для экспертных статей о искусственном интеллекте, технологиях и их влиянии на будущее. От исследователей, для исследователей.
          </p>
          <button className="inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-medium-primary text-medium-primary hover:bg-medium-primary hover:text-white h-9 px-3 text-xs">
            <Heart className="h-4 w-4 mr-1" />
            Donate
          </button>
        </div>
      </div>
    </div>
  )
}

export default PublicationBlock
