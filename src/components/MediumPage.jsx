import React from 'react'
import { Button } from './ui/Button'
import { Avatar } from './ui/Avatar'
import { Badge } from './ui/Badge'
import { Container } from './ui/Container'
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/Sheet'
import { LanguageSelect } from './ui/LanguageSelect'
import { UserMenu } from './ui/UserMenu'
import { Tag } from './ui/Tag'
import { 
  Search, 
  PenTool, 
  Bell, 
  Heart, 
  Play, 
  Bookmark, 
  Share2, 
  MoreHorizontal,
  Star,
  Menu
} from 'lucide-react'

const MediumPage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-medium-background">
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
                                <h4 className="text-sm font-medium text-gray-900 line-clamp-1">AI & Technology Insights</h4>
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
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Search & Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-6">
                    {/* Mobile Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Search articles, authors, topics..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    {/* Navigation Menu */}
                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <h3 className="text-base font-bold text-gray-900 mb-4">Navigation</h3>
                      <div className="space-y-3">
                        <a href="#" className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors group">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">Home</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 p-3 hover:bg-green-50 rounded-lg transition-colors group">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors">Popular</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 p-3 hover:bg-purple-50 rounded-lg transition-colors group">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">All</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 p-3 hover:bg-orange-50 rounded-lg transition-colors group">
                          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-700 transition-colors">News</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 p-3 hover:bg-red-50 rounded-lg transition-colors group">
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <span className="text-sm font-semibold text-gray-800 group-hover:text-red-700 transition-colors">Analysis</span>
                        </a>
                      </div>
                    </div>
                    
                    {/* Popular Searches */}
                    {!searchQuery && (
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-3">Popular Searches</h3>
                        <div className="flex flex-wrap gap-2">
                          {['GPT-4', 'AI', 'Machine Learning', 'OpenAI', 'Technology'].map(tag => (
                            <button
                              key={tag}
                              onClick={() => setSearchQuery(tag)}
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs text-gray-700 transition-colors"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main>
        <Container>
          <div className="py-6 lg:py-8">
            {/* Publication Header */}
            <div className="border-b border-medium-border pb-4 lg:pb-6 mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <a href="#" className="text-base lg:text-lg font-medium text-medium-primary hover:underline">
                    AI & Technology Insights
                  </a>
                  <span className="hidden sm:inline text-medium-secondary">·</span>
                  <Button variant="ghost" size="sm" className="w-fit">
                    Подписаться на публикацию
                  </Button>
                </div>
                
                {/* Member Badge */}
                <Badge variant="member">
                  <Star className="h-4 w-4 fill-medium-yellow" />
                  <span>История только для участников</span>
                </Badge>
              </div>
            </div>

            {/* Article */}
            <article className="space-y-6 lg:space-y-8">

              {/* Article Title */}
              <div className="space-y-3 lg:space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-medium-primary leading-tight">
                  GPT-4 превосходит GPT-3.5 — вот что изменилось
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-medium-secondary leading-relaxed">
                  Как новая модель OpenAI революционизирует AI-индустрию
                </h2>
              </div>

              {/* Article Tags */}
              <div className="flex flex-wrap gap-2">
                <Tag>Искусственный интеллект</Tag>
                <Tag>OpenAI</Tag>
                <Tag>GPT-4</Tag>
                <Tag>Машинное обучение</Tag>
                <Tag>Технологии</Tag>
              </div>

              {/* Author Info and Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar 
                    alt="George J. Ziogas" 
                    size="md"
                  />
                  <div className="min-w-0 flex-1">
                    <a href="#" className="text-base font-medium text-medium-primary hover:underline truncate block">
                      George J. Ziogas
                    </a>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-medium-secondary">
                      <span>9 июня 2025</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-2">
                  <Button variant="ghost" size="sm" className="h-8 px-2 sm:h-9 sm:px-3">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="ml-1 text-xs sm:text-sm">--</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2 sm:h-9 sm:px-3">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="ml-1 text-xs sm:text-sm">Слушать</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="hidden sm:flex">
                    <Share2 className="h-4 w-4 mr-2" />
                    Поделиться
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2 sm:h-9 sm:px-3">
                    <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline ml-2">Ещё</span>
                  </Button>
                </div>
              </div>

              {/* Article Image */}
              <figure className="text-center">
                <img 
                  src="https://miro.medium.com/v2/resize:fit:1400/1*ZkeGGo0gnAiD39Rs3nD2mg.jpeg" 
                  alt="Резюме" 
                  className="w-full max-w-4xl mx-auto rounded-lg"
                />
              </figure>

              {/* Article Text */}
              <div className="text-medium-body space-y-6 max-w-3xl mx-auto">
                <p className="text-base lg:text-lg leading-relaxed">
                  OpenAI представила GPT-4, новую языковую модель, которая значительно превосходит своего предшественника GPT-3.5 по всем ключевым параметрам.
                </p>
                
                <p className="text-base lg:text-lg leading-relaxed">
                  GPT-4 демонстрирует улучшенные способности к рассуждению, более точные ответы и лучшую производительность в сложных задачах. Модель может обрабатывать как текстовые, так и визуальные входные данные, открывая новые возможности для AI-приложений.
                </p>
                
                <p className="text-base lg:text-lg leading-relaxed">
                  В этой статье мы рассмотрим ключевые улучшения GPT-4 и их влияние на будущее искусственного интеллекта.
                </p>
                
                <h2 className="text-xl lg:text-2xl font-semibold text-medium-primary mt-8 mb-4">
                  Ключевые улучшения производительности
                </h2>
                
                <p className="text-base lg:text-lg leading-relaxed">
                  GPT-4 показывает значительные улучшения в задачах, требующих творческого мышления и сложных рассуждений. Модель лучше справляется с математическими задачами, программированием и анализом текста.
                </p>
                
                <p className="text-base lg:text-lg leading-relaxed">
                  Одним из самых впечатляющих достижений является способность GPT-4 понимать и анализировать изображения, что делает его первой мультимодальной моделью такого масштаба, доступной широкой публике.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default MediumPage
