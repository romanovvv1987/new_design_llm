import React from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowUp, ArrowDown } from 'lucide-react'

const AIModelsPreviewBlock = () => {
  const { t } = useTranslation()

  const models = [
    { rank: 1, name: "GPT-4", company: "OpenAI", version: "23.02.2025", inputPrice: "$10", outputPrice: "$30" },
    { rank: 2, name: "Claude 3 Opus", company: "Anthropic", version: "15.02.2025", inputPrice: "$5", outputPrice: "$25" },
    { rank: 3, name: "Gemini Ultra", company: "Google", version: "10.02.2025", inputPrice: "$3.50", outputPrice: "$10.50" },
    { rank: 4, name: "Claude 3 Sonnet", company: "Anthropic", version: "20.02.2025", inputPrice: "$3", outputPrice: "$15" },
    { rank: 5, name: "GPT-3.5 Turbo", company: "OpenAI", version: "18.02.2025", inputPrice: "$0.50", outputPrice: "$1.50" }
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
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600 font-medium">{model.inputPrice}</span>
                    <ArrowDown className="h-3 w-3 text-gray-400" />
                    <ArrowUp className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-600 font-medium">{model.outputPrice}/1M</span>
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
