import React from 'react'
import { useTranslation } from 'react-i18next'

const AIModelsPreviewBlock = () => {
  const { t } = useTranslation()

  const models = [
    { rank: 1, name: "Llama", company: "Meta", version: "v3.1", price: "$8/1M", context: "32K" },
    { rank: 2, name: "Mistral", company: "Mistral AI", version: "v8.7", price: "$25/1M", context: "64K" },
    { rank: 3, name: "GPT-4", company: "OpenAI", version: "v4.0", price: "$30/1M", context: "128K" },
    { rank: 4, name: "Claude 3", company: "Anthropic", version: "v3.0", price: "$15/1M", context: "200K" },
    { rank: 5, name: "Gemini", company: "Google", version: "v1.5", price: "$7/1M", context: "1M" }
  ]

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{t('sidebar.topAIModels')}</h3>
      </div>
      <div className="space-y-3">
        {models.map((model) => (
          <div key={model.rank} className="group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">{model.rank}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {model.name}
                  </h4>
                  <span className="text-xs text-gray-500">({model.version})</span>
                </div>
                <div className="flex items-center gap-4 mt-1">
                  <p className="text-xs text-gray-500">{model.company}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600 font-medium">{model.price}</span>
                    <span className="text-xs text-gray-500">{model.context}</span>
                  </div>
                </div>
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
