import React from 'react'
import { useTranslation } from 'react-i18next'
import { Avatar } from './Avatar'
import { Button } from './Button'
import { Plus } from 'lucide-react'

const WhoToFollowBlock = () => {
  const { t } = useTranslation()

  const authors = [
    {
      name: "Linda Caroll",
      avatar: "https://miro.medium.com/v2/resize:fill:128:128/1*Qyz-Q2jRxi9usgoaacyF9w.jpeg",
      followers: "55K",
      description: "Everything is storytelling. https://lindac.substack.com/"
    },
    {
      name: "Write A Catalyst",
      avatar: "https://miro.medium.com/v2/resize:fill:128:128/1*KCHN5TM3Ga2PqZHA4hNbaw.png",
      followers: "132K",
      isPublication: true,
      description: "Write A Catalyst and Build it into Existence."
    },
    {
      name: "Wes O'Donnell",
      avatar: "https://miro.medium.com/v2/resize:fill:128:128/1*dniFgGeopx0e8X8ouGv7yQ@2x.jpeg",
      followers: "47K",
      description: "US Army & US Air Force Veteran | Global Security Writer | Juris Doctor | Intel Forecaster | TEDx Speaker"
    },
    {
      name: "Counter Arts",
      avatar: "https://miro.medium.com/v2/resize:fill:128:128/1*StB59injG6ZBN2B2iksKYg.png",
      followers: "37K",
      isPublication: true,
      description: "The (Counter)Cultural One-Stop for Nonfiction on Medium… incorporating categories for: 'Art', 'Culture', 'Equality', 'Photography', 'Film', 'Mental Health', 'Music' and 'Literature'."
    },
    {
      name: "Dr. Allison Wiltz",
      avatar: "https://miro.medium.com/v2/resize:fill:128:128/1*f8Q6_ie8s7pPBleC5vG6xQ@2x.jpeg",
      followers: "73K",
      description: "Black womanist scholar with a PhD from New Orleans, LA with bylines in Oprah Daily, Momentum, ZORA, Cultured. #WEOC Founder"
    }
  ]

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('sidebar.whoToFollow')}</h3>
      <div className="space-y-4">
        {authors.map((author, index) => (
          <div key={index} className="flex items-start gap-3">
            <Avatar 
              alt={author.name} 
              size="md"
              src={author.avatar}
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-semibold text-gray-900 truncate">{author.name}</h4>
              <p className="text-xs text-gray-500 mb-1">
                {author.isPublication ? `Publication · ${author.followers}` : `${author.followers}`} {t('article.followers')}
              </p>
              <p className="text-xs text-gray-600 line-clamp-2">{author.description}</p>
            </div>
            <Button variant="ghost" size="icon" className="flex-shrink-0 text-gray-400 hover:text-blue-600">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhoToFollowBlock
