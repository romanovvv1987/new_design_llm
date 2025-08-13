import React from 'react'
import { useTranslation } from 'react-i18next'
import { TrendingUp, Star } from 'lucide-react'

const AIModelsPreviewBlock = () => {
  const { t } = useTranslation()

  const models = [
    { 
      rank: 1, 
      name: "Llama", 
      company: "Meta", 
      version: "v3.1", 
      price: "$8/1M", 
      context: "32K",
      change: "+32K",
      isPositive: true,
      color: "bg-green-500"
    },
    { 
      rank: 2, 
      name: "Mistral", 
      company: "Mistral AI", 
      version: "v8.7", 
      price: "$25/1M", 
      context: "64K",
      change: "+64K",
      isPositive: true,
      color: "bg-green-500"
    },
    { 
      rank: 3, 
      name: "GPT-4", 
      company: "OpenAI", 
      version: "v4.0", 
      price: "$30/1M", 
      context: "128K",
      change: "+128K",
      isPositive: true,
      color: "bg-green-500"
    },
    { 
      rank: 4, 
      name: "Claude 3", 
      company: "Anthropic", 
      version: "v3.0", 
      price: "$15/1M", 
      context: "200K",
      change: "+200K",
      isPositive: true,
      color: "bg-green-500"
    },
    { 
      rank: 5, 
      name: "Gemini", 
      company: "Google", 
      version: "v1.5", 
      price: "$7/1M", 
      context: "1M",
      change: "+1M",
      isPositive: true,
      color: "bg-green-500"
    }
  ]

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{t('sidebar.topAIModels')}</h3>
        <Star className="h-4 w-4 text-gray-400" />
      </div>
      <div className="space-y-2">
        {models.map((model) => (
          <div key={model.rank} className="group cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-700">{model.rank}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {model.name}
                    </h4>
                    <span className="text-xs text-gray-500">({model.version})</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-xs text-gray-500">{model.company}</p>
                    <span className="text-xs text-gray-600 font-medium">{model.price}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-xs font-medium text-green-600">
                  {model.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <a href="/top10" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
          {t('sidebar.viewFullRanking')} →
        </a>
      </div>
    </div>
  )
}

export default AIModelsPreviewBlock

