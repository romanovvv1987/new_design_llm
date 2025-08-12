import React, { useState } from 'react'

const AITicker = () => {
  const [models, setModels] = useState([
    {
      id: 1,
      name: 'GPT-4',
      company: 'OpenAI',
      price: 30.00,
      version: 'v4.5',
      isLatest: true,
      volume: '2.1M',
      contextWindow: '128K'
    },
    {
      id: 2,
      name: 'Claude',
      company: 'Anthropic',
      price: 15.00,
      version: 'v3.5',
      isLatest: true,
      volume: '1.8M',
      contextWindow: '200K'
    },
    {
      id: 3,
      name: 'Gemini',
      company: 'Google',
      price: 12.00,
      version: 'v2.0',
      isLatest: true,
      volume: '1.5M',
      contextWindow: '1M'
    },
    {
      id: 4,
      name: 'Llama',
      company: 'Meta',
      price: 8.00,
      version: 'v3.1',
      isLatest: true,
      volume: '950K',
      contextWindow: '32K'
    },
    {
      id: 5,
      name: 'Mistral',
      company: 'Mistral AI',
      price: 25.00,
      version: 'v8.7',
      isLatest: true,
      volume: '780K',
      contextWindow: '64K'
    },
    {
      id: 6,
      name: 'Cohere',
      company: 'Cohere',
      price: 18.00,
      version: 'v4.2',
      isLatest: true,
      volume: '620K',
      contextWindow: '100K'
    },
    {
      id: 7,
      name: 'PaLM',
      company: 'Google',
      price: 10.00,
      version: 'v2.1',
      isLatest: false,
      volume: '420K',
      contextWindow: '8K'
    },
    {
      id: 8,
      name: 'Bard',
      company: 'Google',
      price: 5.00,
      version: 'v1.0',
      isLatest: false,
      volume: '380K',
      contextWindow: '10K'
    },
    {
      id: 9,
      name: 'GPT-3.5',
      company: 'OpenAI',
      price: 2.00,
      version: 'v3.5',
      isLatest: false,
      volume: '3.2M',
      contextWindow: '16K'
    },
    {
      id: 10,
      name: 'Claude 2',
      company: 'Anthropic',
      price: 8.00,
      version: 'v2.1',
      isLatest: false,
      volume: '890K',
      contextWindow: '100K'
    },
    {
      id: 11,
      name: 'Gemini Flash',
      company: 'Google',
      price: 6.00,
      version: 'v1.5',
      isLatest: false,
      volume: '720K',
      contextWindow: '500K'
    },
    {
      id: 12,
      name: 'Llama 2',
      company: 'Meta',
      price: 4.00,
      version: 'v2.0',
      isLatest: false,
      volume: '680K',
      contextWindow: '4K'
    },
    {
      id: 13,
      name: 'Mistral Medium',
      company: 'Mistral AI',
      price: 15.00,
      version: 'v7.2',
      isLatest: false,
      volume: '520K',
      contextWindow: '32K'
    },
    {
      id: 14,
      name: 'Cohere Generate',
      company: 'Cohere',
      price: 12.00,
      version: 'v3.1',
      isLatest: false,
      volume: '450K',
      contextWindow: '50K'
    },
    {
      id: 15,
      name: 'Code Llama',
      company: 'Meta',
      price: 9.00,
      version: 'v34B',
      isLatest: true,
      volume: '380K',
      contextWindow: '100K'
    },
    {
      id: 16,
      name: 'Claude Instant',
      company: 'Anthropic',
      price: 3.00,
      version: 'v1.2',
      isLatest: false,
      volume: '290K',
      contextWindow: '100K'
    },
    {
      id: 17,
      name: 'Gemini Nano',
      company: 'Google',
      price: 1.00,
      version: 'v1.0',
      isLatest: true,
      volume: '180K',
      contextWindow: '32K'
    },
    {
      id: 18,
      name: 'Mistral Small',
      company: 'Mistral AI',
      price: 8.00,
      version: 'v7.0',
      isLatest: false,
      volume: '220K',
      contextWindow: '8K'
    },
    {
      id: 19,
      name: 'Cohere Summarize',
      company: 'Cohere',
      price: 5.00,
      version: 'v2.0',
      isLatest: false,
      volume: '150K',
      contextWindow: '25K'
    },
    {
      id: 20,
      name: 'GPT-4 Turbo',
      company: 'OpenAI',
      price: 35.00,
      version: 'v4.5',
      isLatest: true,
      volume: '1.9M',
      contextWindow: '128K'
    }
  ])







  return (
    <div className="bg-gray-50">
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll">
          {models.map((model, index) => (
            <div
              key={`${model.id}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-4 py-2 min-w-[220px]"
            >
              {/* Model Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {model.name}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {model.company}
                  </span>
                  <span className="text-xs font-mono text-gray-900">
                    ${model.price}/1M
                  </span>
                  <span className={`text-xs font-medium ${model.isLatest ? 'text-green-600' : 'text-gray-600'}`}>
                    {model.version}
                  </span>
                  <span className="text-xs text-blue-600 font-medium">
                    {model.contextWindow}
                  </span>
                </div>
              </div>
            </div>
                      ))}
          </div>
          
          {/* Размывающийся левый край */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          
          {/* Размывающийся правый край */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    )
}

export default AITicker
