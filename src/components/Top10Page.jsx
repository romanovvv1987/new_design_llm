import React, { useState } from 'react'
import { Container } from './ui/Container'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { LanguageSelect } from './ui/LanguageSelect'
import { UserMenu } from './ui/UserMenu'
import { 
  TrendingUp, 
  Star, 
  Users, 
  Zap, 
  Brain, 
  Globe,
  ArrowUp,
  ArrowDown,
  Minus,
  ExternalLink,
  Search,
  Bell,
  Heart
} from 'lucide-react'

const Top10Page = () => {
  const [sortBy, setSortBy] = useState('rank')
  const [sortOrder, setSortOrder] = useState('asc')
  const [searchQuery, setSearchQuery] = useState('')
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false)

  const aiModels = [
    {
      id: 1,
      rank: 1,
      name: "GPT-4",
      company: "OpenAI",
      type: "Large Language Model",
      parameters: "1.76T",
      releaseDate: "2023-03-14",
      performance: 95,
      popularity: 98,
      price: "Premium",
      pricePer1M: "$30",
      version: "GPT-4 Turbo",
      description: "Мощная мультимодальная модель с улучшенными способностями к рассуждению",
      website: "https://openai.com/gpt-4",
      change: "up"
    },
    {
      id: 2,
      rank: 2,
      name: "Claude 3 Opus",
      company: "Anthropic",
      type: "Large Language Model",
      parameters: "Unknown",
      releaseDate: "2024-03-04",
      performance: 94,
      popularity: 92,
      price: "Premium",
      pricePer1M: "$15",
      version: "Claude 3.5 Sonnet",
      description: "Самая мощная модель от Anthropic с превосходными аналитическими способностями",
      website: "https://claude.ai",
      change: "up"
    },
    {
      id: 3,
      rank: 3,
      name: "Gemini Ultra",
      company: "Google",
      type: "Multimodal Model",
      parameters: "Unknown",
      releaseDate: "2024-02-08",
      performance: 93,
      popularity: 89,
      price: "Premium",
      pricePer1M: "$7.50",
      version: "Gemini 1.5 Pro",
      description: "Продвинутая мультимодальная модель с интеграцией в экосистему Google",
      website: "https://gemini.google.com",
      change: "down"
    },
    {
      id: 4,
      rank: 4,
      name: "Claude 3 Sonnet",
      company: "Anthropic",
      type: "Large Language Model",
      parameters: "Unknown",
      releaseDate: "2024-03-04",
      performance: 91,
      popularity: 87,
      price: "Free/Premium",
      pricePer1M: "$3",
      version: "Claude 3.5 Haiku",
      description: "Сбалансированная модель с отличным соотношением цена/качество",
      website: "https://claude.ai",
      change: "up"
    },
    {
      id: 5,
      rank: 5,
      name: "GPT-3.5 Turbo",
      company: "OpenAI",
      type: "Large Language Model",
      parameters: "175B",
      releaseDate: "2022-11-30",
      performance: 88,
      popularity: 95,
      price: "Free/Premium",
      pricePer1M: "$0.50",
      version: "GPT-3.5 Turbo",
      description: "Быстрая и доступная модель для повседневных задач",
      website: "https://openai.com/gpt-3.5",
      change: "stable"
    },
    {
      id: 6,
      rank: 6,
      name: "Gemini Pro",
      company: "Google",
      type: "Large Language Model",
      parameters: "Unknown",
      releaseDate: "2023-12-06",
      performance: 87,
      popularity: 85,
      price: "Free/Premium",
      pricePer1M: "$1.50",
      version: "Gemini 1.5 Flash",
      description: "Доступная модель с хорошей производительностью",
      website: "https://gemini.google.com",
      change: "stable"
    },
    {
      id: 7,
      rank: 7,
      name: "Claude 3 Haiku",
      company: "Anthropic",
      type: "Large Language Model",
      parameters: "Unknown",
      releaseDate: "2024-03-04",
      performance: 85,
      popularity: 82,
      price: "Free/Premium",
      pricePer1M: "$0.25",
      version: "Claude 3.5 Haiku",
      description: "Быстрая и эффективная модель для повседневного использования",
      website: "https://claude.ai",
      change: "up"
    },
    {
      id: 8,
      rank: 8,
      name: "Llama 3 70B",
      company: "Meta",
      type: "Large Language Model",
      parameters: "70B",
      releaseDate: "2024-04-18",
      performance: 84,
      popularity: 78,
      price: "Open Source",
      pricePer1M: "Бесплатно",
      version: "Llama 3.1 70B",
      description: "Открытая модель с высокой производительностью",
      website: "https://llama.meta.com",
      change: "up"
    },
    {
      id: 9,
      rank: 9,
      name: "Mistral Large",
      company: "Mistral AI",
      type: "Large Language Model",
      parameters: "Unknown",
      releaseDate: "2024-02-26",
      performance: 83,
      popularity: 75,
      price: "Premium",
      pricePer1M: "$8",
      version: "Mistral Large 2",
      description: "Европейская модель с отличными языковыми способностями",
      website: "https://mistral.ai",
      change: "down"
    },
    {
      id: 10,
      rank: 10,
      name: "Cohere Command",
      company: "Cohere",
      type: "Large Language Model",
      parameters: "Unknown",
      releaseDate: "2023-06-15",
      performance: 81,
      popularity: 72,
      price: "Premium",
      pricePer1M: "$12",
      version: "Command R+",
      description: "Модель, оптимизированная для бизнес-приложений",
      website: "https://cohere.ai",
      change: "stable"
    }
  ]

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setSortOrder('asc')
    }
  }

  const sortedModels = [...aiModels].sort((a, b) => {
    let aValue = a[sortBy]
    let bValue = b[sortBy]
    
    if (sortBy === 'releaseDate') {
      aValue = new Date(aValue)
      bValue = new Date(bValue)
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  const getChangeIcon = (change) => {
    switch (change) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-green-500" />
      case 'down':
        return <ArrowDown className="h-4 w-4 text-red-500" />
      default:
        return <Minus className="h-4 w-4 text-gray-400" />
    }
  }

  const getPerformanceColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-100'
    if (score >= 80) return 'text-blue-600 bg-blue-100'
    if (score >= 70) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-lg font-black text-gray-900">
                GPTMARKETCUP
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                Popular
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                All
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                News
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                Analysis
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 relative group">
                AI Models
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2">
                {isDesktopSearchOpen ? (
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles, authors, topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      autoFocus
                      onBlur={() => {
                        setTimeout(() => {
                          if (!searchQuery) {
                            setIsDesktopSearchOpen(false)
                          }
                        }, 200)
                      }}
                    />
                    {searchQuery && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                        <div className="p-3">
                          <h3 className="text-sm font-medium text-gray-900 mb-3">Search Results</h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                                  <div className="text-gray-400 text-xs">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-0 flex-1">
                                <h4 className="text-sm font-medium text-gray-900 line-clamp-1">AI Models Ranking</h4>
                                <p className="text-xs text-gray-500">Search results for "{searchQuery}"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setIsDesktopSearchOpen(true)}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <LanguageSelect />
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <UserMenu />
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSelect />
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Filters Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <Container>
          <div className="py-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">AI Models</h1>
              <Badge variant="outline" className="text-sm">
                {aiModels.length} моделей
              </Badge>
            </div>

            {/* Filters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Price per 1M tokens Filter */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Цена за 1M токенов</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                  <option value="">Любая цена</option>
                  <option value="free">Бесплатно</option>
                  <option value="<1">До $1</option>
                  <option value="1-5">$1-$5</option>
                  <option value="5-15">$5-$15</option>
                  <option value="15+">$15+</option>
                </select>
              </div>

              {/* Context Size Filter */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Размер контекста</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                  <option value="">Любой</option>
                  <option value="100k+">100K+ токенов</option>
                  <option value="50k-100k">50K-100K токенов</option>
                  <option value="10k-50k">10K-50K токенов</option>
                  <option value="<10k">До 10K токенов</option>
                </select>
              </div>

              {/* Model Type Filter */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Тип модели</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                  <option value="">Все типы</option>
                  <option value="llm">Large Language Model</option>
                  <option value="multimodal">Multimodal Model</option>
                  <option value="code">Code Model</option>
                  <option value="chat">Chat Model</option>
                </select>
              </div>
            </div>

            {/* Action Buttons and Advanced Filters */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="active-only" 
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="active-only" className="text-sm text-gray-700">
                    Только активные модели
                  </label>
                </div>
                
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="recent-updates" 
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="recent-updates" className="text-sm text-gray-700">
                    Обновленные в 2024
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="high-popularity" 
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="high-popularity" className="text-sm text-gray-700">
                    Высокая популярность (80%+)
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Применить
                </Button>
                <Button variant="outline" size="sm">
                  Сбросить
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Сортировка:</span>
                <select className="border-none bg-transparent text-blue-600 font-medium focus:outline-none">
                  <option value="rank">По рангу</option>
                  <option value="performance">По производительности</option>
                  <option value="popularity">По популярности</option>
                  <option value="name">По названию</option>
                  <option value="company">По компании</option>
                </select>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <main className="py-8 bg-gray-50">
        <Container>

          {/* Publication Block */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
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

          {/* Rating Info */}
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Как формируется рейтинг?
                </h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Рейтинг основан на комплексной оценке производительности, популярности, доступности и актуальности моделей. 
                  Учитываются результаты тестов, количество пользователей, качество документации и скорость обновлений.
                </p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        onClick={() => handleSort('rank')}
                        className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                      >
                        Ранг
                        {sortBy === 'rank' && (
                          <span className="text-blue-600">
                            {sortOrder === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        onClick={() => handleSort('name')}
                        className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                      >
                        Модель
                        {sortBy === 'name' && (
                          <span className="text-blue-600">
                            {sortOrder === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </button>
                    </th>
                    
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        onClick={() => handleSort('performance')}
                        className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                      >
                        Производительность
                        {sortBy === 'performance' && (
                          <span className="text-blue-600">
                            {sortOrder === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <button 
                        onClick={() => handleSort('popularity')}
                        className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                      >
                        Популярность
                        {sortBy === 'popularity' && (
                          <span className="text-blue-600">
                            {sortOrder === 'asc' ? '↑' : '↓'}
                          </span>
                        )}
                      </button>
                    </th>
                                         <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       Цена за 1M
                     </th>
                     <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       Версия (текущая)
                     </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedModels.map((model) => (
                    <tr key={model.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">#{model.rank}</span>
                          {getChangeIcon(model.change)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{model.name}</div>
                          <div className="text-sm text-gray-500">{model.type}</div>
                          <div className="text-xs text-gray-400 mt-1">{model.description}</div>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge className={getPerformanceColor(model.performance)}>
                          {model.performance}%
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${model.popularity}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-900">{model.popularity}%</span>
                        </div>
                      </td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                         <div className="text-sm font-medium text-gray-900">{model.pricePer1M}</div>
                         <div className="text-xs text-gray-500">{model.price}</div>
                       </td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                         <div className="text-sm font-medium text-gray-900">{model.version}</div>
                       </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => window.open(model.website, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            Подробнее
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


        </Container>
      </main>
    </div>
  )
}

export default Top10Page
